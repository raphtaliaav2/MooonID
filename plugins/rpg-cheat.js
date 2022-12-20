let handler = async (m, { conn }) => {
let info = `
*${htki} CHEAT ${htka}*
`
const sections = [
   {
	title: `✃ CHEAT MENU`,
	rows: [
	    {title: "Cheat All", rowId: '.curang', description: 'Unlimited Money' },
	]
    }, 

]

const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "Hack",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['cheatbot', 'cheat']
handler.tags = ['rpg']
handler.command = /^(cheat(bot)?|cheat)$/i
handler.private = false
handler.owner = true
handler.premium = true

export default handler
