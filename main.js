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
var curreetVel = 0;
var originLoc = null
var goalLoc = null
var bot_circularInterval = setInterval(function() {
	if(inGame && gameIn == 1) {
		if (gameSpeed >= 99) gotoMenu();
		Object.assign(simBall, circularPosition);
		while(simBall.x ** 2 + simBall.y ** 2 < 0.95) {
		    simBall.x += Math.cos(circularDirection) / (100 - gameSpeed);
		    simBall.y += Math.sin(circularDirection) / (100 - gameSpeed);
		}
    distance = Math.abs((Math.atan2(simBall.y, simBall.x) - circularChar.p) % (Math.PI * 2));
    currentVel = Object.assign({}, circularPosition).vel
    originLoc = Object.assign({}, circularPosition).p % (Math.PI * 2)
    goalLoc = Object.assign({}, circularPosition).p % (Math.PI * 2)
    if ((Math.atan2(simBall.y, simBall.x) - circularChar.p) % (Math.PI * 2) > Math.PI) {
      // Go Right
      while (Math.abs(Math.atan2(simBall.y, simBall.x) - goalLoc) < 0.1 && Math.abs(Math.atan2(simBall.y, simBall.x) - goalLoc) > 0.1) {
        currentVel /= 1.1;
        goalLoc += currentVel/75;
      }
    }else {
      // Go Left

    }
	}
}, 1000 / 60);

var simBall = {};
var distance = 0;
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
    distance = Math.abs(Math.min(Math.max(simBall.y, -3), 3).toFixed(1) - player1)
    if (ball.xvel > 0 && Math.min(Math.max(simBall.y, -3), 3).toFixed(1) - player1 > 0 && distance > 0.4) {
      player1 += 0.1;
    }else if(ball.xvel > 0) {
      player1 -= 0.1;
    }
	}
}, 1000 / 60);

var simBall = {};
var distance = 0;
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
    if (ball.xvel > 0 && Math.min(Math.max(simBall.y, -3), 3).toFixed(1) - player2 > 0 && distance > 0.4) {
      player2 += 0.1;
    }else if(ball.xvel > 0) {
      player2 -= 0.1;
    }
	}
}, 1000 / 60);
