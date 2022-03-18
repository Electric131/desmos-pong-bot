// Made for a pong desmos script
// https://github.com/johndoesstuff/randomProjects/blob/master/desmos%20pong.js
// Add this to make it hit the ball automatically
// -- This version is just a lazier version of unstoppable, it does not use a raycast to find where the ball will go, instead just goes to where the ball currently is

var tempPos = {};
var bot_circularInterval = setInterval(function() {
	if(inGame && gameIn == 1) {
		if (gameSpeed >= 99) gotoMenu();
		circularChar.p = (Math.atan2(circlarPosition.y, circularPosition.x));
	}
}, 1000 / 60);

var bot_twoInterval = setInterval(function() {
	if(inGame && gameIn == 0) {
		if (gameSpeed >= 99) gotoMenu();
		if (ball.y < 3 && ball.y > -3) {
        		player2 = ball.y
		}
	}
}, 1000 / 60);

var bot_oneInterval = setInterval(function() {
	if(inGame && gameIn == 2) {
		if (gameSpeed >= 99) gotoMenu();
		if (ball.y < 3 && ball.y > -3) {
        		player1 = ball.y
		}
	}
}, 1000 / 60);
