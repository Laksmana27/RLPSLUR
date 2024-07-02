let fs = require('fs') 
let chalk = require('chalk')
let moment = require('moment-timezone')

// Owner
global.owner = [
  ['62895372305081'],
  ['62895372305081'],
  ['62895372305081', 'RLP-𝗠𝗗', 'contact@tenka.my.id', true]
] // Put your number here
global.mods = ['62895372305081'] // Moderator
global.prems = ['62895372305081'] // Premium
global.rose = 'YqzaFbPLBTCgEmCyqUHysLw9pRUw12CCELJxw6N7viYc1c3VDxk31iIGoomCzK0Z';
global.lolkey = 'pentilkuda';
global.neo = 'DitzOfc';
global.alya = 'DitzOfc';
global.yanz = 'Fardankey';
global.xzn = 'Always ditz';
global.APIs = {
    // API Prefix
    // name: 'https://website'
    lol: 'https://api.lolhuman.xyz',
    neoxr: 'https://api.neoxr.eu',
    alya: 'https://api.alyachan.dev',
    xzn: 'https://skizo.tech',
    yanz: 'https://api.yanzbotz.my.id',
}
global.APIKeys = {
    // APIKey Here
    // 'https://website': 'apikey'
    'https://api.neoxr.eu': 'DitzOfc',
    'https://api.lolhuman.xyz': 'pentilkuda',
    'https://api.alyachan.dev': 'DitzOfc',
    'https://skizo.tech': 'Always ditz',
    'https://api.yanzbotz.my.id': 'Fardankey'
}

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0

const spack = fs.readFileSync("function/exif.json")
const stickerpack = JSON.parse(spack)
if (stickerpack.spackname == '') {
  var sticker_name = 'Sticker By'
  var sticker_author = 'RLP-𝗠𝗗'
} else {
  var sticker_name = 'Sticker By'
  var sticker_author = 'RLP-𝗠𝗗'
}

const file_exif = "function/exif.json"
fs.watchFile(file_exif, () => {
  fs.unwatchFile(file_exif)
  console.log(chalk.redBright("Update 'exif.json'"))
  delete require.cache[file_exif]
  require('./function/exif.json')
})

// Document
global.minety = pickRandom(['application/msword', 'application/vnd.ms-excel', 'application/vnd.ms-powerpoint', 'application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'])
// Database
global.atlaapi= '8Zv6ptlT6VAyLTi0MXBgDr4gQgweeC7X1mZWcFuyFSQteGJ8GHuH8eS71BDhHc8iGZ7S8bBIBTi8v8oMzKnQrzhAdkpHirYEGcVg'
global.version = '5.0.3'
global.sessionName = 'Daffz' // Jangan Di Ubah
global.gcbot = 'https://chat.whatsapp.com/GUdaOFWAjIT7T4Hl1MarT3'
global.instagram = 'https://www.instagram.com/snsei_dull?igsh=Zm40czUxZnk2dDEz'
// buttons settings
global.namebot = '© RLP-𝗠𝗗(Public Bot)'
global.botversi = '2.0.0'
global.thumb = 'https://telegra.ph/file/08969ea695144d2e3d568.jpg'
global.docthumb = 'https://telegra.ph/file/504066777388cdbac9886.jpg'
global.footer = 'Powered By _*RLP-𝗠𝗗*_'

global.email = 'Dullah248c@gmail.com'
global.creator = "62895372305081@s.whatsapp.net"
global.nomorbot = '6281575135965'
global.nomorown = '62895372305081'

// Panel
global.domain = 'isi domain lu' // Domain Web
global.apikey = 'isi ptla lu' // Key PTLA
global.c_apikey = 'isi pltc lu' // Key PTLC
global.eggs = '15' // ga ush di ubah klo kga tau
global.locs = '1'
// Sosial Media
global.sig = '-'
global.syt = 'https://youtube.com/@danz nano'
global.sgh = '-'
global.sgc = 'https://chat.whatsapp.com/GUdaOFWAjIT7T4Hl1MarT3'
global.swa = 'https://wa.me/62895372305081'
global.swb = '-' // Link Discord
global.snh = 'https://nhentai.to' // Link nhentai

// Pembayaran
global.pdana = '~Not Found~' // isi pyment lu
global.povo = '~Not Found~'
global.pgopay = '~Not Found~'
global.pulsa = '~Not Found~'
global.pulsa2 = '~Not Found~'
global.psaweria = '~Not Found~'
global.ptrakteer = '~Not Found~'
global.psbuzz = '~Not Found~'

// Fake Size
global.fsizedoc = '99999999999999' // default 10TB
global.fpagedoc = '999'

global.useMulti = true
global.autoread = true

// Watermark
global.packname = 'Deo Official'
global.author = '-'
global.wm = '©RLP-𝗠𝗗'
global.wm2 = 'RLP-𝗠𝗗'
global.titlebot = `${global.wm}`
global.danied = 'A K S E S  K A M U  D I  T O L A K!!'
global.done = '```Status Request :```' + ' `Succes`'
global.packname = 'RLP-𝗠𝗗'
global.author = 'RLP-𝗠𝗗'
global.nameown = 'RLP-𝗠𝗗'
global.wait = 'Wait a moment... '

// Tampilan
global.htki =  '⬣───「' // Hiasan kiri
global.htka = '」───⬣' // Hiasan kanan
global.htjava = '❃' // Hiasan
global.sa = '╭─'
global.gx = '│✇'
global.gy = '│•'
global.gz = '│'
global.sb = '╰────࿐'
global.kki = '「'
global.kka = '」'

global.multiplier = 1000 // The higher, The harder levelup

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      trash: '🗑',
      armor: '🥼',
      sword: '⚔️',
      wood: '🪵',
      rock: '🪨',
      string: '🕸️',
      horse: '🐎',
      cat: '🐈' ,
      dog: '🐕',
      fox: '🦊',
      petFood: '🍖',
      iron: '⛓️',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v =>vv [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})//
