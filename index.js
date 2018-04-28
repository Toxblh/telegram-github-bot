const axios = require('axios')
const TelegramBot = require('node-telegram-bot-api')

const { TOKEN} = require('./token')

const USER = 'toxblh'
const REPO = 'MTMR'

const options = { polling: true }
const bot = new TelegramBot(TOKEN, options)

bot.onText(/\/stats/, msg => {
    const userId = msg.chat.id
    let output = ''
    let sum = 0
    axios.get(`https://api.github.com/repos/${USER}/${REPO}/releases`).then(({ data }) => {
        data.map(item => {
            item.assets.map(obj => {
                console.log(`${obj.name},${obj.download_count}`)
            })
        })
    })
})
