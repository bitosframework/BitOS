import arg from 'arg'
import path from 'path'
import colors from 'ansi-colors'
import { ctxmenu } from 'ctxmenu'
import { lookup } from 'mime-types'

import './index.css'
import README from '../../../README.md'
import defaultWallpaperURL from './default_wallpaper.png'
import { default as defaultAppIcon } from '../../assets/default-app-icon.svg'

export const name = 'desktop'
export const version = '1.0.0'
export const description = 'BitOS Desktop'
export const help = `
  Usage:
    desktop <options>             Start the Desktop Environment
    desktop launcher              Start the Desktop Launcher only

  Options:
    --wallpaper, -w               Specify the URL to the wallpaper to use at startup
    --launcher-wallpaper, l       Specify the URL to the wallpaper for the launcher
`

const spec = {
  '--version': Boolean,
  '-v': '--version',
  '--wallpaper': String,
  '-w': '--wallpaper',
  '--launcher-wallpaper': String,
  '-l': '--launcher-wallpaper'
}

let kernel = globalThis.Kernel
let terminal = globalThis.Terminal
let desktop
let launcher
const defaultLauncherWallpaper = 'https://images.unsplash.com/photo-1639262498805-17c7dc422d37'

export function saveDesktopIconPositions () {
  const positions = {}

  document.querySelectorAll('.BitOS-desktop-entry').forEach(entry => {
    const { x, y } = entry.getBoundingClientRect()
    const { location } = JSON.parse(entry.dataset.file)
    positions[location] = { x, y }
  })

  globalThis.localStorage.setItem('BitOS_desktop_icon_positions', JSON.stringify(positions))
}

export function loadDesktopIconPositions () {
  try {
    const positions = JSON.parse(globalThis.localStorage.getItem('BitOS_desktop_icon_positions'))

    document.querySelectorAll('.BitOS-desktop-entry').forEach(entry => {
      try {
        const { location } = JSON.parse(entry.dataset.file)
        const { x, y } = positions[location]
        entry.style.position = 'absolute'
        entry.style.top = y + 'px'
        entry.style.left = x + 'px'
      } catch {
        console.log('Position not set:', entry.dataset.file)
      }
    })
  } catch (err) {
    console.warn('No desktop positions set')
  }
}

export async function launchTerminal (options = {}) {
  let win = null

  const customCommands = options.customCommands || []
  customCommands.push({ name: 'exit', run: () => win.window.close() })

  const termKernel = options.kernel ? options.kernel : (kernel || globalThis.Kernel)

  const newTerm = termKernel.BitOSTerminal.create({
    fontFamily: options.fontFamily || "'Fira Mono', monospace",
    fontSize: options.fontSize || 18,
    fontWeight: options.fontWeight || 900,
    theme: options.theme || { background: '#131820' },
    customCommands
  })

  const container = document.createElement('div')
  container.style.width = '100%'
  container.style.height = '100%'
  newTerm.open(container)
  newTerm.cwd = options.path || '/'

  let fitInterval
  win = termKernel.windows.create({
    title: options.windowTitle || options.command || 'BitOS.sh',
    mount: container,
    width: options.windowWidth || '75%',
    height: options.windowHeight || '70%',
    x: 'center',
    y: 'center',
    onclose: () => {
      clearInterval(fitInterval)
    }
  })

  win.term = newTerm
  if (options.startup) termKernel.execute(options.startup, { terminal: newTerm })
  newTerm.prompt()
  newTerm.focus()

  if (options.command) kernel.execute(options.command, { terminal: newTerm })

  // TODO: There's gotta be a better way, but for now we'll just setInterval
  // Running .fit in win.onresize doesn't work
  fitInterval = setInterval(newTerm.fit, 200)
  setTimeout(() => win.window.focus(), 10)

  return win
}

async function createFileLayer () {
  const fileLayer = document.createElement('div')
  fileLayer.id = 'BitOS-desktop-file-layer'
  fileLayer.addEventListener('dragover', e => {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'move'
  })

  const files = kernel.fs.readdirSync('/desktop')

  files.forEach(filename => {
    const file = {
      name: filename,
      location: kernel.utils.path.resolve('/desktop', filename),
      type: kernel.fs.statSync(path.resolve('/desktop', filename)).isDirectory() ? 'dir' : 'file'
    }

    const entry = document.createElement('div')
    const icon = document.createElement('mwc-icon')
    const title = document.createElement('h1')

    let fileIcon
    switch (file.type) {
      case 'dir':
        fileIcon = 'folder'
        break
      default:
        fileIcon = 'text_snippet'
    }

    entry.id = `BitOS-desktop-entry-${btoa(file.location)}`
    entry.classList.add('BitOS-desktop-entry')

    icon.textContent = fileIcon
    title.textContent = file.name
    entry.dataset.file = JSON.stringify(file)
    icon.dataset.file = entry.dataset.file
    title.dataset.file = entry.dataset.file

    entry.appendChild(icon)
    entry.appendChild(title)
    fileLayer.appendChild(entry)

    entry.draggable = true

    entry.addEventListener('dragstart', e => {
      // console.log('dragstart', e)
      e.dataTransfer.setData('text', e.target.id)
      e.dataTransfer.effectAllowed = 'move'
    })

    entry.addEventListener('dragend', e => {
      // console.log('dragend', e)
      e.target.style.position = 'absolute'
      e.target.style.left = (e.x - 48) + 'px'
      e.target.style.top = (e.y - 48) + 'px'
      saveDesktopIconPositions()
    })

    const entryContextMenu = [
      {
        text: 'Edit',
        action: () => kernel.execute(`edit ${file.location}`)
      },

      {
        text: 'Delete',
        action: async () => {
          kernel.execute(`rm ${file.location}`)
          const fileLayer = await createFileLayer()
          document.querySelector('#BitOS-desktop-file-layer').replaceWith(fileLayer)
          loadDesktopIconPositions()
        }
      }
    ]

    entry.addEventListener('contextmenu', e => {
      e.preventDefault()
      e.stopPropagation()
      ctxmenu.show(entryContextMenu, e.target)
    })

    entry.addEventListener('click', e => {
      const { file } = e.target.dataset
      const data = JSON.parse(file)
      const stat = kernel.fs.statSync(data.location)
      const fileParts =kernel.utils.path.parse(data.name)
      const extension = fileParts.ext
      const mime = lookup(extension)

      if (stat.isDirectory()) {
        return kernel.execute(`files ${data.location}`)
      }

      switch (extension) {
        case '.sh':
          return kernel.executeScript(data.location)
        case '.js':
          return kernel.execute(`eval ${data.location}`)
        case '.json':
        case '.txt':
          return kernel.execute(`edit ${data.location}`)
        case '.md':
          return kernel.execute(`markdown ${data.location}`)
        case '.link':
          try {
            const { url, useBitOSBrowser } = JSON.parse(kernel.fs.readFileSync(location, 'utf8'))
            if (!useBitOSBrowser) globalThis.open(url, '_blank')
            else kernel.execute(`www ${url}`)
          } catch (err) {
            console.error(err)
            kernel.dialog({ title: 'Error', text: err.message, icon: 'error' })
          }
          break
        default:
          if (mime && /^(image|video|audio|application\/pdf)/.test(mime)) return kernel.execute(`view ${location}`)
          kernel.execute(`alert I'm not sure how to handle this file!`)
      }
    })
  })

  return fileLayer
}

export async function start (args) {
  try {
    terminal.log('Starting BitOS.sh Desktop..')

    desktop = document.createElement('div')
    desktop.id = 'BitOS-desktop'

    const wallpaper = document.createElement('img')
    wallpaper.id = 'BitOS-desktop-wallpaper'
    wallpaper.src = args['--wallpaper'] || defaultWallpaperURL
    wallpaper.style.opacity = 0

    if (wallpaper.complete) {
      wallpaper.style.opacity = 1
    } else {
      wallpaper.addEventListener('load', () => { wallpaper.style.opacity = 1 })
    }

    const fileLayer = await createFileLayer()

    desktop.appendChild(wallpaper)
    desktop.appendChild(fileLayer)

    const menuButton = document.createElement('mwc-icon')
    menuButton.id = 'BitOS-desktop-menu-button'
    menuButton.ariaLabel = 'Open the Launcher'
    menuButton.textContent = 'widgets'
    // menuButton.classList.add('animate__animated', 'animate__bounce', 'animate__slow')
    menuButton.classList.add('hint--left', 'hint--success')

    const shellButton = document.createElement('mwc-icon')
    shellButton.id = 'BitOS-desktop-shell-button'
    shellButton.ariaLabel = 'Open a terminal'
    shellButton.textContent = 'terminal'
    shellButton.classList.add('hint--left', 'hint--info')
    shellButton.addEventListener('click', () => launchTerminal())

    const exitButton = document.createElement('mwc-icon')
    exitButton.id = 'BitOS-desktop-exit-button'
    exitButton.ariaLabel = 'Exit the desktop'
    exitButton.textContent = 'logout'
    exitButton.classList.add('hint--left', 'hint--info')
    exitButton.addEventListener('click', exitDesktop)

    const showButtons = () => {
      [shellButton, exitButton].forEach(btn => { btn.style.opacity = 1 })
    }

    const hideButtons = () => {
      [shellButton, exitButton].forEach(btn => { btn.style.opacity = 0 })
    }
    
    menuButton.addEventListener('animationend', () => menuButton.classList.remove('animate__animated', 'animate__bounce', 'animate__slow'))
    menuButton.addEventListener('click', e => toggleLauncher({ e }))

    menuButton.addEventListener('contextmenu', e => {
      e.preventDefault()
      e.stopPropagation()
    })

    menuButton.addEventListener('mouseenter', () => {
      menuButton.classList.add('BitOS-desktop-menu-button-hover')
    })

    menuButton.addEventListener('mouseleave', () => {
      menuButton.classList.remove('BitOS-desktop-menu-button-hover')
    })

    menuButton.addEventListener('touchstart', () => {
      menuButton.classList.add('BitOS-desktop-menu-button-hover')
      showButtons()
    })

    menuButton.addEventListener('touchend', e => {
      const target = document.elementFromPoint(e.changedTouches?.[0].clientX, e.changedTouches?.[0].clientY)
      e.preventDefault()
      e.stopPropagation()
      if (target) target.click()
      hideButtons()
      menuButton.classList.remove('BitOS-desktop-menu-button-hover')
    })

    const buttons = [menuButton, shellButton, exitButton]

    buttons.forEach(btn => {
      btn.addEventListener('pointerenter', showButtons)
      btn.addEventListener('pointerleave', hideButtons)
    })

    const metaListener = e => {
      if (e.code === 'KeyQ' && e.ctrlKey && e.shiftKey) exitDesktop()
      if (e.key === 'Meta' && e.ctrlKey) toggleLauncher(args)
      if (e.key === 'Tab' && e.shiftKey) toggleRunner()
    }

    globalThis.addEventListener('keydown', metaListener)

    desktop.append(menuButton)
    desktop.append(shellButton)
    desktop.append(exitButton)
    
    document.querySelector('#BitOS-terminal').style.display = 'none'
    document.body.appendChild(desktop)

    loadDesktopIconPositions()

    // const desktopContextMenu = [
    //   {
    //     text: 'New File',
    //     action: () => {}
    //   }
    // ]

    // desktop.addEventListener('contextmenu', e => {
    //   e.preventDefault()
    //   e.stopPropagation()
    //   // console.log(e)
    //   ctxmenu.show(desktopContextMenu, e)
    // })
  } catch (err) {
    console.error(err)
    throw err
  }
}

export async function toggleRunner () {
  if (document.querySelector('#BitOS-desktop-runner')) return document.querySelector('#BitOS-desktop-runner').remove()

  const dialog = document.createElement('div')
  dialog.id = 'BitOS-desktop-runner'
  dialog.hideActions = true

  const input = document.createElement('input')
  input.id = 'BitOS-desktop-runner-input'
  input.placeholder = 'Run a command...'

  input.addEventListener('keydown', async e => {
    if (e.key !== 'Enter') return
    // launchTerminal({ command: input.value })
    kernel.execute(input.value)
    dialog.remove()
  })

  dialog.append(input)
  dialog.open = true

  document.body.appendChild(dialog)
  // TODO: Figure out how to get the damn input focused properly - everything I tried didn't work
}

export async function toggleLauncher (args) {
  if (launcher) {
    launcher.window.close()
    launcher = null
    return
  }

  // TODO: Load this from somewhere configurable and just make it... better.
  const launcherApps = [
    { name: 'Files', icon: kernel.modules.files?.icon, description: kernel.modules.files?.description, run: () => kernel.execute('files /desktop')},
    // { name: 'Mailchain', icon: kernel.modules.mailchain?.icon, description: kernel.modules.mailchain?.description, run: () => kernel.execute('www --no-toolbar --title Mailchain https://inbox.mailchain.xyz')},
    { name: 'Doom', icon: kernel.modules['@BitOS-apps/doom']?.icon, description: kernel.modules['@BitOS-apps/doom']?.description, run: () => kernel.execute('@BitOS-apps/doom')},
    { name: 'Wolfenstein', icon: kernel.modules['@BitOS-apps/wolfenstein']?.icon, description: kernel.modules['@BitOS-apps/wolfenstein']?.description, run: () => kernel.execute('wolfenstein')},
    { name: 'Screensaver', icon: kernel.modules.screensaver?.icon, description: kernel.modules.screensaver?.description, run: () => kernel.execute('screensaver') },
    { name: 'Browser', icon: kernel.modules.www?.icon, description: kernel.modules.www?.description, run: () => kernel.execute('www about:blank')},
    { name: 'Instacalc', icon: kernel.modules.www?.icon, description: kernel.modules.www?.description, run: () => kernel.execute('www https://instacalc.com') },
    { name: 'Thesaurus', icon: kernel.modules.www?.icon, description: kernel.modules.www?.description, run: () => kernel.execute('www https://thesaurus.com') },
    { name: 'Dictionary', icon: kernel.modules.www?.icon, description: kernel.modules.www?.description, run: () => kernel.execute('www https://dictionary.com') },
    { name: 'Wikipedia', icon: kernel.modules.www?.icon, description: kernel.modules.www?.description, run: () => kernel.execute('www https://wikipedia.org') },
    // { name: 'WASM Studio', icon: kernel.modules.www?.icon, description: kernel.modules.www?.description, run: () => kernel.execute('www https://webassembly.studio') },
    // { name: 'WASM Shell', icon: kernel.modules.www?.icon, description: kernel.modules.www?.description, run: () => kernel.execute('www https://webassembly.sh') }
  ]

  const template = document.createElement('div')
  template.id = 'BitOS-desktop-launcher'

  for (const app of launcherApps.sort((a, b) => a.name > b.name ? 1 : ((b.name > a.name) ? -1 : 0))) {
    const { name, description, icon, run } = app

    const entry = document.createElement('div')
    entry.classList.add('BitOS-desktop-launcher-entry')

    const img = document.createElement('img')
    img.src = icon || defaultAppIcon

    const title = document.createElement('h1')
    title.textContent = name

    entry.title = description
    entry.dataset.command = name
    entry.append(img)
    entry.append(title)
    template.appendChild(entry)

    entry.addEventListener('click', async e => {
      const { command } = entry.dataset
      console.log({ command })
      try {
        run()
      } catch (err) {
        kernel.log(err.message)
        kernel.dialog({ icon: 'error', title: 'Error', text: colors.unstyle(err.message) })
      } finally {
        if (launcher?.window) launcher.window.close()
      }
    })
  }

  launcher = kernel.windows.create({
    class: 'no-min no-full BitOS-desktop-launcher-window',
    title: 'BitOS',
    mount: template,
    x: 'center',
    y: 'center',
    width: '70%',
    height: '70%',
    onblur: () => {
      launcher?.window?.close?.()
    },
    onclose: () => {
      launcher = null
    }
  })

  launcher.window.body.style.backgroundImage = `url(${args['--launcher-wallpaper'] || defaultLauncherWallpaper})`
  launcher.window.body.id = 'BitOS-desktop-launcher-wallpaper'
}

export async function exitDesktop () {
  desktop.remove()
  document.querySelector('#BitOS-terminal').style.display = 'block'
  globalThis.Terminal.focus()
  globalThis.Terminal.fit()
}

export async function run (term, context) {
  terminal = term
  kernel = term.kernel

  const args = arg(spec, { argv: context.split(' ') })
  const cmd = args._?.[0]

  if (args['--version']) return terminal.log(version)
  if (!kernel.fs.existsSync('/desktop')) kernel.fs.mkdirSync('/desktop')
  if (!kernel.fs.existsSync('/desktop/Documents')) kernel.fs.mkdirSync('/desktop/Documents')

  switch (cmd) {
    case 'launcher':
      return toggleLauncher(args)
    case 'start':
    default:
      if (document.querySelector('#BitOS-desktop')) throw new Error('Desktop is already running')
      return await start(args)
  }
}