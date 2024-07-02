let handler = async (m, { conn }) => {
  let text = '- Network WhatsApp Bot\nhttps://chat.whatsapp.com/EiiM1KYNJXQ100nju0R8W4'
  m.reply(text)
}

handler.command = /^(gcbot)$/i;
handler.private = false;
module.exports = handler;