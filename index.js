const axios = require('axios')
const TelegramBot = require('node-telegram-bot-api')

const { TOKEN} = require('./token')

const USER = 'toxblh'
const REPO = 'MTMR'

const options = { polling: true }
const bot = new TelegramBot(TOKEN, options)

bot.onText(/\/downloads/, msg => {
    const userId = msg.chat.id
    let output = ''
    let sum = 0
    axios.get(`https://api.github.com/repos/${USER}/${REPO}/releases`).then(({ data }) => {
        data.map(item => {
            item.assets.map(obj => {
                sum += obj.download_count
            })
        })
        output = `${data[0].assets[0].name}: ${data[0].assets[0].download_count}\nTotal: ${sum}`
        bot.sendMessage(userId, output)
    })
})

bot.onText(/\/stats/, msg => {
    const userId = msg.chat.id
    let output = ''
    axios.get(`https://api.github.com/repos/${USER}/${REPO}`).then(({ data }) => {
        output += `Stars: ${data.stargazers_count}\n`
        output += `Forks: ${data.forks_count}\n`
        output += `Issues: ${data.open_issues_count}\n`
        output += `Watches: ${data.subscribers_count}\n`
        bot.sendMessage(userId, output)
    })
})
