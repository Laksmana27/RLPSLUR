let fetch = require('node-fetch')
let fs = require('fs')
let handler = async (m, { conn, generateWAMessageFromContent, }) => {
    let { anon, anticall, antispam, antitroli, backup, jadibot, gconly, nsfw, statusupdate, autogetmsg, antivirus, publicjoin } = global.db.data.settings[conn.user.jid]
    const chats = Object.keys(await conn.chats)
    const groups = Object.keys(await conn.groupFetchAllParticipating())
     block = await conn.fetchBlocklist()
       let tag = `@${m.sender.replace(/@.+/, '')}`
  let mentionedJid = [m.sender]
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
    let sts = `┌────〔 Status 〕───⬣
> ✧  Aktif selama ${uptime}
> ✧  *${groups.length}* Grup
> ✧  *${chats.length - groups.length}* Chat Pribadi
> ✧  *${Object.keys(global.db.data.users).length}* Pengguna
> ✧  ${block == undefined ? '*0* Diblokir' : '*' + block.length + '* Diblokir'}
> ✧  *${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length}* Chat Terbanned
> ✧  *${Object.entries(global.db.data.users).filter(user => user[1].banned).length}* Pengguna Terbanned
╰────────────⬣

┌───〔 Pengaturan 〕───⬣
> ✧  ${anon ? '🟢' : '🔴'} *Anon Chat*
> ✧  ${anticall ? '🟢' : '🔴'} *Anti Call*
> ✧  ${antispam ? '🟢' : '🔴'} *Anti Spam*
> ✧  ${antitroli ? '🟢' : '🔴'} *Anti Troli*
> ✧  ${backup ? '🟢' : '🔴'} *Auto Backup DB*
> ✧  ${gconly ? '🟢' : '🔴'} *Mode Grup*
> ✧  ${jadibot ? '🟢' : '🔴'} *Jadi Bot*
> ✧  ${nsfw ? '🟢' : '🔴'} *Mode Nsfw*
╰────────────⬣`

// Pengiriman
conn.sendMessage(m.chat, {
text: sts,
contextInfo: {
externalAdReply: {
title: 'Info Status',
thumbnailUrl: 'https://telegra.ph/file/808136881849880bff83d.jpg',
mediaType: 1,
renderLargerThumbnail: true
}}})
}

handler.help = ['stats']
handler.tags = ['info']
handler.command = /^stats?$/i

module.exports = handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}