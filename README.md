# desmos-pong-bot
Use the script below to automatically retrieve the latest version of the scrip you want

`fetch('https://raw.githubusercontent.com/Electric131/desmos-pong-bot/main/unstoppable.js').then(data=>data.text().then(function(text){var s=document.createElement("script");s.type ="text/javascript";s.text=text;document.body.appendChild(s);}));`

Replace *unstoppable.js* with the script you want to use.
