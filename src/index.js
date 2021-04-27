import "dotenv/config.js"
import Discord from "discord.js"
import Koa from "koa"

const port = process.env.PORT || 3000
new Koa()
  .use(async ctx => {
    ctx.body = '<a href=https://github.com/Tashima42/almoco-bot>Git repository</a>'
  })
  .listen(port)

const client = new Discord.Client()
client.on('ready', () => {
  console.info(`Connected! ${client.user.tag}`)
})

client.login(process.env.BOT_TOKEN)

const prefix = "!"

const embbedMessage = new Discord.MessageEmbed()
  .setTitle("Hora do almoço")
  .setColor("#6f3ed1")
  .addField('😋😋😋😋', 'Até a tarde!')

client.on('message', async (msg) => {
  if (msg.author.bot) return
  if (!msg.content.startsWith(prefix)) return
  const parsedMessage = msg.content.split('!').join('')
  if (parsedMessage == "almoco" || parsedMessage == "almoço") {
    msg.channel.send(embbedMessage)
  }
})
