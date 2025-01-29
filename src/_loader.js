/**
 * BitOS Loader
 * @description The BitOS bootloader
 * @module @BitOS-core/_loader
 * @author Jay Mathis <code@mathis.network>
 * @license MIT
 * @see https://github.com/BitOS-org/kernel
 */

import 'regenerator-runtime/runtime'
import Config from './config'

import('./kernel').then(kernel => {
  if (!globalThis.Kernel) {
    const term = document.createElement('div')
    term.id = 'BitOS-terminal'
    document.body.appendChild(term)
  }

  globalThis.Kernel = kernel
  process.env = Config

  import('./terminal').then(async term => {
    if (globalThis.Terminal) document.querySelector('#BitOS-terminal').innerHTML = ''
    const bootArgs = new URLSearchParams(globalThis.location.search)

    globalThis.Terminal = term.default.create({
      fontFamily: bootArgs.get('fontFamily') || "'Fira Mono', monospace",
      fontSize: bootArgs.get('fontSize') || 18,
      fontWeight: bootArgs.get('fontWeight') || 900,
      theme: { background: bootArgs.get('themeBackground') || '#121212' }
    })

    console.log({ bootArgs, isMobile: kernel.isMobile, env: process.env })

    globalThis.Terminal.open(document.querySelector('#BitOS-terminal'))
    if (!kernel.isMobile) globalThis.Terminal.loadWebglAddon() // webgl addon does weird things on small screens
    globalThis.Terminal.fit()
    globalThis.Terminal.focus()

    try {
      for (const event of globalThis.Kernel.KernelEvents) globalThis.Kernel.events.off(event)
      await kernel.boot()
    } catch (err) {
      console.error(err)
      Terminal.log(err.message)
      globalThis.alert?.(`Kernel Boot Error: ${err.message}`)
    }

    if (document.querySelector('#BitOS-desktop')) document.querySelector('#BitOS-terminal').style.display = 'none'
  })
})

if (module.hot) module.hot.accept()
