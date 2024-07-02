let { MessageType } = require('@whiskeysockets/baileys')
let PhoneNumber = require('awesome-phonenumber')
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
      let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp; Ownerkuh!!\nORG:DitzOfc\nTITLE:soft\nitem1.TEL;waid=${nomorown}:${nomorown}\nitem1.X-ABLabel:Ponsel\nitem2.URL:http://github.com/DitzOfc\nitem2.X-ABLabel:💬 More\nitem3.EMAIL;type=INTERNET:AditGantengJir@gmail.com\nitem3.X-ABLabel:Email\nitem4.ADR:;;PERSIMPANGAN JONGGOL;;;;\nitem4.X-ABADR:💬 More\nitem4.X-ABLabel:Lokasi\nEND:VCARD`;
      const sentMsg = await conn.sendMessage(
    m.chat,
    {
      contacts: {
        displayName: wm,
        contacts: [{ vcard }],
      },
      contextInfo: {
        externalAdReply: {
          title: "Daffz_ID",
          body: "Version: 2.0.0",
          thumbnailUrl: 'https://telegra.ph/file/d71cfd143a3f80de3bc45.jpg',
          mediaType: 1,
          showAdAttribution: false,
          renderLargerThumbnail: true,
        },
      },
    },
    { quoted: m },
  );
  conn.reply(m.chat, 'Hai kak, Ini owner ku, Kalo ada perlu bilang aja sama dia😊', sentMsg)
}
handler.help = ['owner']
handler.tags = ['info']

handler.command = /^(owner)$/i

module.exports = handler