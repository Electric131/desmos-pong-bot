# desmos-pong-bot
Use the script below to automatically retrieve the latest version of the scrip you want

```js
fetch('https://raw.githubusercontent.com/Electric131/desmos-pong-bot/main/unstoppable.js')
.then(data=>data.text()
.then(text=>eval(text)));```

Replace *unstoppable.js* with the script you want to use.
