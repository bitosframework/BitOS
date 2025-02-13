import arg from 'arg'

export const name = 'swap'
export const version = '0.1.0'
export const description = 'BitOS Swap'

const spec = {
  '--version': Boolean,
  '-v': '--version'
}

let kernel = globalThis.Kernel
let terminal = globalThis.Terminal
let provider

export async function run (terminal, context) {
  kernel = terminal.kernel
  terminal = terminal
  provider = kernel.modules.account.provider

  const args = arg(spec, { argv: context.split(' ') })
  const cmd = args._?.[0]

  console.log({ args, version })
  if (args['--version']) return log(version)

  switch (cmd) {
    case 'install':
      return await install(args._?.slice(1))
  }
}
