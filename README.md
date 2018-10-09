# Small bot for get few statistics from github

### Commands:
- `/downloads` - return amount downloads latest release and total
- `/stats` - return stars, folowers, forks and issues
- `/traffic` - return statistic about traffic to the repo

### PS: For work need create a file in root 'token.js' with content
```js
module.exports = {
    TOKEN: 'token-for-you-bot'
    GITHUB_USER: 'github-username',
    GITHUB_PASSWORD: 'github-password'
}
```

