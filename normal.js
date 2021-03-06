// Made for a pong desmos script
// https://github.com/johndoesstuff/randomProjects/blob/master/desmos%20pong.js
// Add this to make it hit the ball automatically

if (typeof gameIn == 'undefined') {
  alert("Desmos Pong was not detected so it was loaded automatically.");
  // Get the latest version of desmos pong
  fetch('https://raw.githubusercontent.com/johndoesstuff/randomProjects/master/desmos%20pong.js').then(data=>data.text().then(function(text){var s=document.createElement("script");s.type ="text/javascript";s.text=text;document.body.appendChild(s);}));
}

var simBall = {};
var distance = 0;
var bot_CircularSR = false;
var bot_circularInterval = setInterval(function() {
	if(inGame && gameIn == 1) {
		if (gameSpeed >= 99) gotoMenu();
		Object.assign(simBall, circularPosition);
		while(simBall.x ** 2 + simBall.y ** 2 < 0.95) {
		    simBall.x += Math.cos(circularDirection) / (100 - gameSpeed);
		    simBall.y += Math.sin(circularDirection) / (100 - gameSpeed);
		}
		distance = Math.abs((Math.atan2(simBall.y, simBall.x) - circularChar.p) % (Math.PI * 2));
		if (distance > .2) bot_CircularSR = true;
		// I'm too lazy to use velocity math so it just moves at a constant speed   #lazy
		if ((Math.atan2(simBall.y, simBall.x) - circularChar.p) % (Math.PI * 2) > Math.PI && bot_CircularSR) {
			bot_CircularSR = false;
			circularChar.p += distance/10
		}else if(bot_CircularSR) {
			bot_CircularSR = false;
			circularChar.p -= distance/10
		}
	}
}, 1000 / 60);

var simBall = {};
var distance = 0;
var bot_OneSR = false;
var bot_oneInterval = setInterval(function() {
	if(inGame && gameIn == 2) {
		if (gameSpeed >= 99) gotoMenu();
		Object.assign(simBall, ball);
		while (simBall.x < 4) {
			simBall.x += 3*simBall.xvel/(100-gameSpeed);
			simBall.y += 3*simBall.yvel/(100-gameSpeed);
			if (simBall.y > 4 || simBall.y < -4) simBall.yvel *= -1;
			if (simBall.x < -4) simBall.xvel = 1;
		}
    distance = Math.abs(Math.min(Math.max(simBall.y, -3), 3).toFixed(1) - player1);
	if (distance > .1) bot_OneSR = true;
    if (Math.min(Math.max(simBall.y, -3), 3).toFixed(1) - player1 > 0 && bot_OneSR) {
    	bot_OneSR = false;
		player1 += 0.1;
    }else if(bot_OneSR) {
		bot_OneSR = false;
      	player1 -= 0.1;
    	}
	}
}, 1000 / 60);

var simBall = {};
var distance = 0;
var bot_TwoSR = false;
var bot_twoInterval = setInterval(function() {
	if(inGame && gameIn == 0) {
		if (gameSpeed >= 99) gotoMenu();
		Object.assign(simBall, ball);
		while (simBall.x < 4) {
			simBall.x += 3*simBall.xvel/(100-gameSpeed);
			simBall.y += 3*simBall.yvel/(100-gameSpeed);
			if (simBall.x < -4) {
				simBall.xvel = 1;
				simBall.yvel = 3*Math.random()-1.5;
			};
			if (simBall.y > 4 || simBall.y < -4) simBall.yvel *= -1;
		}
    distance = Math.abs(Math.min(Math.max(simBall.y, -3), 3).toFixed(1) - player2);
	if (distance > .1) bot_TwoSR = true;
    if (ball.xvel > 0 && Math.min(Math.max(simBall.y, -3), 3).toFixed(1) - player2 > 0 && bot_TwoSR) {
		bot_TwoSR = false;
		player2 += 0.1;
    }else if(ball.xvel > 0 && bot_TwoSR) {
		bot_TwoSR = false;
      	player2 -= 0.1;
    	}
	}
}, 1000 / 60);
