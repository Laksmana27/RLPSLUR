var crypto = require('crypto')

let handler = async (m, { conn, text }) => {
  if (conn.user.jid !== global.conn.user.jid) return
  let chats = Object.entries(conn.chats).filter(([_, chat]) => chat.isChats).map(v => v[0])
  let cc = conn.serializeM(text ? m : m.quoted ? await m.getQuotedObj() : false || m)
  let teks = text ? text : cc.text
  conn.reply(m.chat, `_Send broadcast messages to ${chats.length} chat_`, m)
  for (let id of chats) await conn.copyNForward(id, conn.cMod(m.chat, cc, /bc|broadcast/i.test(teks) ? teks : teks + '\n' + readMore + '「 *Owner Broadcast* 」' + randomID(32)), true).catch(_ => _)
  conn.reply(m.chat, `_Success broadcast ${chats.length} chat!_`, m)
}
handler.help = ['broadcast', 'bc'].map(v => v + ' *<teks>*')
handler.tags = ['owner']
handler.command = /^(broadcast|bc|bcs)$/i

handler.owner = true

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

const randomID = length => require('crypto').randomBytes(Math.ceil(length * .5)).toString('hex').slice(0, length)