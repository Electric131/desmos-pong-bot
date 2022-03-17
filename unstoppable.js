// Made for a pong desmos script
// https://github.com/johndoesstuff/randomProjects/blob/master/desmos%20pong.js
// Add this to make it hit the ball automatically
// -- This version makes it impossible to lose by directly setting the position instead of using user controls

var tempPos = {};
var bot_circularInterval = setInterval(function() {
	if(inGame && gameIn == 1) {
        Object.assign(tempPos, circularPosition);
        while(tempPos.x ** 2 + tempPos.y ** 2 < 0.95) {
            tempPos.x += Math.cos(circularDirection) / (100 - gameSpeed);
            tempPos.y += Math.sin(circularDirection) / (100 - gameSpeed);
        }
        circularChar.p = (Math.atan2(tempPos.y, tempPos.x));
    }
}, 1000 / 60);
