# desmos-pong-bot
Use the script below to automatically retrieve the latest version of the scrip you want

```js
fetch('https://raw.githubusercontent.com/Electric131/desmos-pong-bot/main/main.js')
.then(data=>data.text()
.then(text=>eval(text)));
```

Replace *main.js* with the script you want to use.
