// Made for a pong desmos script
// https://github.com/johndoesstuff/randomProjects/blob/master/desmos%20pong.js
// Add this to make it hit the ball automatically
// -- This version is just a lazier version of unstoppable, it does not use a raycast to find where the ball will go, instead just goes to where the ball currently is

var tempPos = {};
var bot_circularInterval = setInterval(function() {
	if(inGame && gameIn == 1) {
        circularChar.p = (Math.atan2(circlarPosition.y, circularPosition.x));
    }
}, 1000 / 60);
