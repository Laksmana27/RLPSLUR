let fs = require('fs')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
let handler = async (m, { conn, text, usedPrefix, command }) => {
let sc = `*[ B O T - S C R I P T ]*\n\n`
sc += `┌  ◦  *Name* : Tenka-Ai\n`
sc += `│  ◦  *Version* : Latest\n`
sc += `│  ◦  *Size* : 1.5 MB\n`
sc += `│  ◦  *Updated* : Satu Hari Yang Lalu\n`
sc += `└  ◦  *Url* : (No url Attached)`
let tqto = `*[ B I G - T H A N K S T O ]*\n\n`
tqto += `┌  ◦  _EraaMyLove🐣_\n`
tqto += `│  ◦  _Ilham_\n`
tqto += `│  ◦  _Fahri_\n`
tqto += `│  ◦  _DimasBotzz_\n`
tqto += `│  ◦  _Akbal_\n`
tqto += `│  ◦  _DitzOfc_\n`
tqto += `│  ◦  *_DaffzOfficial_* -> ${nomorown}\n`
tqto += `└  ◦  _Lenwy_\n\n`
tqto += `Made By DaffOfficial`
conn.sendMessage(m.chat, {
text: `${sc}\n\n${tqto}`,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
title: 'DAFFZ_ID-1.0.9-VERSION',
thumbnailUrl: 'https://telegra.ph/file/808136881849880bff83d.jpg',
mediaType: 1,
renderLargerThumbnail: true
}}}, {quoted: m})
}
handler.help = ['tqto']
handler.tags = ['main','info']
handler.command = /^(credits|credit|thanks|thanksto|tqto)$/i
module.exports = handler