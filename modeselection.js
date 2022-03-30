var modes = {"normal":"the paddle moves normally", "unbeatable ":"paddle teleports", "lazy":"lazy version of unbeatable", "twos-trouble": "only changes 2-player"}

var modeList = []
for (var modeInfo of Object.entries(modes)) {
    modeList.push(`${modeInfo[0]} (${modeInfo[1]})`);
}

var mode = window.prompt("Select a mode to load\n\n" + modeList.join('\n'));
if (Object.keys(modes).includes(mode)) {
    fetch(`https://raw.githubusercontent.com/Electric131/desmos-pong-bot/main/${mode}.js`)
    .then(data=>data.text()
    .then(text=>eval(text)));
}else {
    alert("Invalid Mode Name. Try again.")
}