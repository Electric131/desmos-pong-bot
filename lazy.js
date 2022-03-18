// Made for a pong desmos script
// https://github.com/johndoesstuff/randomProjects/blob/master/desmos%20pong.js
// Add this to make it hit the ball automatically
// -- This version is just a lazier version of unstoppable, it does not use a raycast to find where the ball will go, instead just goes to where the ball currently is

if (typeof gameIn == 'undefined') {
  alert("Desmos Pong was not detected so it was loaded automatically.");
  // Get the latest version of desmos pong
  fetch('https://raw.githubusercontent.com/johndoesstuff/randomProjects/master/desmos%20pong.js').then(data=>data.text().then(function(text){var s=document.createElement("script");s.type ="text/javascript";s.text=text;document.body.appendChild(s);}));
}

var bot_circularInterval = setInterval(function() {
	if(inGame && gameIn == 1) {
		if (gameSpeed >= 99) gotoMenu();
		circularChar.p = (Math.atan2(circlarPosition.y, circularPosition.x));
	}
}, 1000 / 60);

var bot_twoInterval = setInterval(function() {
	if(inGame && gameIn == 0) {
		if (gameSpeed >= 99) gotoMenu();
		player2 = Math.min(Math.max(ball.y, -3), 3).toFixed(1)
	}
}, 1000 / 60);

var bot_oneInterval = setInterval(function() {
	if(inGame && gameIn == 2) {
		if (gameSpeed >= 99) gotoMenu();
		player1 = Math.min(Math.max(ball.y, -3), 3).toFixed(1)
	}
}, 1000 / 60);
