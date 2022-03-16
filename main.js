// Made for a pong desmos script

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
			bot_originLoc = circularChar.p;
			bot_movingTo = (Math.atan2(tempPos.y, tempPos.x));
/* 			console.log(bot_originLoc);
			console.log(bot_movingTo);
			      console.log(bot_originLoc - bot_movingTo); */
		}
    distance = Math.abs(bot_originLoc - bot_movingTo) % Math.PI;
		if(bot_originLoc - bot_movingTo < 0) {
			if((bot_originLoc - circularChar.p) < (distance/2)) {
				keyboard.l = true;
			} else {
				keyboard.l = false;
			}
		} else {
			if((bot_originLoc + bot_movingTo) % Math.PI / 2 <= circularChar.p) {
				keyboard.r = true;
			} else {
				keyboard.r = false;
			}
		}
/* 		if((bot_originLoc - bot_movingTo) % Math.PI < 0.2) {
		  bot_originLoc = null;
		  bot_movingTo = null;
		      keyboard.l = false;
		      keyboard.r = false;
		} */
	}
}, 1000 / 60);
