// Made for a pong desmos script
// https://github.com/johndoesstuff/randomProjects/blob/master/desmos%20pong.js
// Only works for 2 player, makes the bot go against itself

if (typeof gameIn == 'undefined') {
  alert("Desmos Pong was not detected so it was loaded automatically.");
  // Get the latest version of desmos pong
  fetch('https://raw.githubusercontent.com/johndoesstuff/randomProjects/master/desmos%20pong.js').then(data=>data.text().then(function(text){var s=document.createElement("script");s.type ="text/javascript";s.text=text;document.body.appendChild(s);}));
}

var simBall = {};
var distance = 0;
var distance2 = 0;
var bot_TwoSR1 = false;
var bot_TwoSR2 = false;
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
		if (distance > .1) bot_TwoSR1 = true;
    	if (ball.xvel > 0 && Math.min(Math.max(simBall.y, -3), 3).toFixed(1) - player2 > 0 && bot_TwoSR1) {
			bot_TwoSR1 = false;
			player2 += 0.1;
    	}else if(ball.xvel > 0 && bot_TwoSR1) {
			bot_TwoSR1 = false;
      	player2 -= 0.1;
    	}
		Object.assign(simBall, ball);
		while (simBall.x > -4) {
			simBall.x += 3*simBall.xvel/(100-gameSpeed);
			simBall.y += 3*simBall.yvel/(100-gameSpeed);
			if (simBall.x > 4) {
				simBall.xvel = -1;
				simBall.yvel = 3*Math.random()-1.5;
			};
			if (simBall.y > 4 || simBall.y < -4) simBall.yvel *= -1;
		}
		distance2 = Math.abs(Math.min(Math.max(simBall.y, -3), 3).toFixed(1) - player1);
		if (distance2 > .1) bot_TwoSR2 = true;
		if (ball.xvel < 0 && Math.min(Math.max(simBall.y, -3), 3).toFixed(1) - player1 > 0 && bot_TwoSR2) {
			bot_TwoSR2 = false;
			player1 += 0.1;
		}else if(ball.xvel < 0 && bot_TwoSR2) {
			bot_TwoSR2 = false;
			player1 -= 0.1;
		}
	}
}, 1000 / 60);
