import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
*「 PRESET 3 」*
https://alight.link/zfrRNimRJHE7XrNd7

Susbcribe:
https://youtube.com/@mooonid
`.trim()
  m.reply(caption)
}
handler.help = ['Preset AM']
handler.tags = ['tools']
handler.command = /^(p3)$/i
handler.limit = true

export default handler
