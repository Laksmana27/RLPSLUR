var fetch = require("node-fetch");
const link = 'https://data.bmkg.go.id/DataMKG/TEWS/'
var handler = async (m, {
  conn,
  text, 
  usedPrefix, 
  command 
  }) => {
	try {
		let res = await fetch(link+'autogempa.json')
		let anu = await res.json()
		anu = anu.Infogempa.gempa
		let txt = `*${anu.Wilayah}*\n\n`
		txt += `> ≡ Tanggal : ${anu.Tanggal}\n`
		txt += `> ≡ Waktu : ${anu.Jam}\n`
		txt += `> ≡ Potensi : *${anu.Potensi}*\n\n`
		txt += `> ≡ Magnitude : ${anu.Magnitude}\n`
		txt += `> ≡ Kedalaman : ${anu.Kedalaman}\n`
		txt += `> ≡ Koordinat : ${anu.Coordinates}${anu.Dirasakan.length > 3 ? `\nDirasakan : ${anu.Dirasakan}` : ''}`
		await conn.sendMessage(m.chat, { image: { url: link+anu.Shakemap }, caption: txt }, { quoted: m })
	} catch (e) {
		console.log(e)
		conn.reply(m.chat, `🚩 Fitur Error.`, m)
	}
};
handler.command = handler.help = ['infogempa', 'gempa'];
handler.tags = ['tools', 'internet'];
handler.premium = false;
handler.limit = true;
module.exports = handler ;