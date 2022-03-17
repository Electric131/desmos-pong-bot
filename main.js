// Made for a pong desmos script
// https://github.com/johndoesstuff/randomProjects/blob/master/desmos%20pong.js
// Add this to make it hit the ball automatically

var tempPos = {};
var distance = 0;
var bot_movingTo = null;
var bot_originLoc = null;
var bot_circularInterval = setInterval(function() {
	if(inGame && gameIn == 1) {
		if(!bot_movingTo) {
			Object.assign(tempPos, circularPosition);
			while(tempPos.x ** 2 + tempPos.y ** 2 < 0.95) {
				tempPos.x += Math.cos(circularDirection) / (100 - gameSpeed);
				tempPos.y += Math.sin(circularDirection) / (100 - gameSpeed);
			}
            bot_originLoc = Object.assign({}, circularChar).p % Math.PI;
			bot_movingTo = (Math.atan2(tempPos.y, tempPos.x));
		}
        distance = Math.abs(bot_originLoc - bot_movingTo) % Math.PI;
		if(bot_originLoc - bot_movingTo < 0) {
			if((bot_originLoc - circularChar.p) <= (distance/2)) {
                keyboard.r = true;
				keyboard.l = false;
			} else {
                keyboard.r = false;
				keyboard.l = false;
			}
		} else {
			if((bot_originLoc + circularChar.p) <= (distance/2)) {
                keyboard.r = false;
				keyboard.l = true;
			} else {
                keyboard.r = false;
				keyboard.l = false;
			}
		}
        if (bot_movingTo) {
            console.log((bot_movingTo - circularChar.p) % Math.PI);
            console.log(bot_movingTo, circularChar.p);
            if(((bot_movingTo - circularChar.p) + Math.PI) % (2 * Math.PI) < 0.1 && ((bot_movingTo - circularChar.p) + Math.PI) % (2 * Math.PI) > -0.1) {
                console.log("Stopping");
                bot_originLoc = null;
                bot_movingTo = null;
                keyboard.l = false;
                keyboard.r = false;
            }
		}
	}else {
        bot_originLoc = null;
        bot_movingTo = null;
        keyboard.l = false;
        keyboard.r = false;
    }
}, 1000 / 60);
