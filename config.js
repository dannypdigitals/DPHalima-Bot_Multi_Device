import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['2349137433485', 'Danny P ❣️', true], 
]

global.mods = ['2349137433485'] 
global.prems = ['2349137433485']
global.APIs = { 
  xteam: 'https://api.xteam.xyz', 
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}
global.APIKeys = {
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zenzapis.xyz': '675e34de8a', 
  'https://api-fgmods.ddns.net': '𝐀𝐛𝐝𝐮𝐥𝐫𝐚𝐡𝐦𝐚𝐧'
}

global.packname = 'Halimaᴮᴼᵀ' 
global.author = '𝐇𝐚𝐥𝐢𝐦𝐚' 
global.fgig = '▢ Follow me on Instagram\nhttps://www.instagram.com/noo.i.e\n' 
global.dygp = 'https://chat.whatsapp.com/CwcVSB5w1vYCL14W0gH0q1'
global.fgsc = 'https://github.com/x-poison' 
global.fgyt = ''
global.fglog = 'https://i.imgur.com/EJgRBnS.jpg' 

global.wait = '*⌛ _loading..._*\n*▰▰▰▰▰▰▱▱*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '5'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
