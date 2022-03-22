// Made for a pong desmos script
// https://github.com/johndoesstuff/randomProjects/blob/master/desmos%20pong.js
// Add this to make it hit the ball automatically
// -- This version makes it impossible to lose by directly setting the position instead of using user controls

if (typeof gameIn == 'undefined') {
    alert("Desmos Pong was not detected so it was loaded automatically. (Infinite Speed Version)");
    // Get the latest version of desmos pong
    fetch('https://raw.githubusercontent.com/Electric131/desmos-pong-bot/main/infinite_speed_mod.js').then(data=>data.text().then(function(text){var s=document.createElement("script");s.type ="text/javascript";s.text=text;document.body.appendChild(s);}));
}

var simBall = {};
var bot_circularInterval = setInterval(function() {
	if(inGame && gameIn == 1) {
		Object.assign(simBall, circularPosition);
		while(simBall.x ** 2 + simBall.y ** 2 < 0.95) {
		    simBall.x += Math.cos(circularDirection) / (100 - gameSpeed);
		    simBall.y += Math.sin(circularDirection) / (100 - gameSpeed);
		}
		circularChar.p = (Math.atan2(simBall.y, simBall.x));
	}
}, 1000 / 60);

var simBall = {};
var bot_oneInterval = setInterval(function() {
	if(inGame && gameIn == 2) {
		Object.assign(simBall, ball);
		while (simBall.x < 4) {
			simBall.x += 3*simBall.xvel/(100-gameSpeed);
			simBall.y += 3*simBall.yvel/(100-gameSpeed);
			if (simBall.y > 4 || simBall.y < -4) simBall.yvel *= -1;
			if (simBall.x < -4) simBall.xvel = 1;
		}
		player1 = Math.min(Math.max(simBall.y, -3), 3).toFixed(1);
	}
}, 1000 / 60);

var simBall = {};
var bot_twoInterval = setInterval(function() {
	if(inGame && gameIn == 0) {
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
		if (ball.xvel > 0) player2 = Math.min(Math.max(simBall.y, -3), 3).toFixed(1);
	}
}, 1000 / 60);
