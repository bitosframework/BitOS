/**
 * Build configuration
 */

export default function () {
  return {
    analyticsEndpoint: 'https://zqqgwwumllncmhfcxexw.functions.supabase.co/logger',

    builtinModules: [
      '3pm', 'auth', 'backup', 'bluetooth', 'confetti', 'contract', 'desktop', 'edit',
      'files', 'gamepad', 'help', 'hid', 'lang', 'midi', 'peer', 'ping', 'repl', 'screensaver', 'serial',
      'speak', 'socket', 'three', 'usb', 'view', 'vm', 'wallet', 'wasm', 'worker', 'www'
    ],

    defaultFilesystemOverlayConfig: {
      // AsyncMirror is not the ideal way to handle this, but it works for now
      // until migration from sync to async in the fsModules is complete
      '/': {
        fs: 'AsyncMirror',
        options: {
          sync: { fs: 'InMemory' },
          async: {
            fs: 'IndexedDB',
            options: {
              storeName: 'BitOS'
            }
          }
        }
      },
    
      '/bin': { fs: 'InMemory' },
      '/tmp': { fs: 'InMemory' },
      '/mount': { fs: 'InMemory' },
      '/proc': { fs: 'InMemory' }
    },

    defaultPackages: [
      'https://unpkg.com/@BitOS-apps/account',
      'https://unpkg.com/@BitOS-apps/etherscan',
      'https://unpkg.com/@BitOS-apps/git',
      'https://unpkg.com/@BitOS-apps/runkit',
      'https://unpkg.com/@BitOS-apps/markdown',
      'https://unpkg.com/@BitOS-apps/doom',
      'https://unpkg.com/@BitOS-apps/diablo',
      'https://unpkg.com/@BitOS-apps/wolfenstein',
      'https://unpkg.com/@BitOS-apps/minipaint',
      'https://unpkg.com/@BitOS-apps/rubikscube',
      'https://unpkg.com/@BitOS-apps/webamp'
    ],

    ipechoEndpoint: 'https://ipecho.net/plain',

    kernelEvents: [
      'MemoryLoaded', 'FilesystemLoaded', 'FilesystemModulesLoaded', 'KernelBinsLoaded', 'BuiltinModulesLoaded',
      'ModuleLoaded', 'PackagesLoaded', 'AutostartStart', 'AutostartEnd', 'ScreensaverStart', 'ScreensaverEnd'
    ],

    screensaverTimeout: 90000
  }
}
