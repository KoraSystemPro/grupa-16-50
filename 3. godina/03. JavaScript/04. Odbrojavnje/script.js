var confetti = {
	maxCount: 150,		//set max confetti count
	speed: 2,			//set the particle animation speed
	frameInterval: 15,	//the confetti animation frame interval in milliseconds
	alpha: 1.0,			//the alpha opacity of the confetti (between 0 and 1, where 1 is opaque and 0 is invisible)
	gradient: false,	//whether to use gradients for the confetti particles
	start: null,		//call to start confetti animation (with optional timeout in milliseconds, and optional min and max random confetti count)
	stop: null,			//call to stop adding confetti
	toggle: null,		//call to start or stop the confetti animation depending on whether it's already running
	pause: null,		//call to freeze confetti animation
	resume: null,		//call to unfreeze confetti animation
	togglePause: null,	//call to toggle whether the confetti animation is paused
	remove: null,		//call to stop the confetti animation and remove all confetti immediately
	isPaused: null,		//call and returns true or false depending on whether the confetti animation is paused
    isRunning: null,		//call and returns true or false depending on whether the animation is running
    snow: false         // snow = false     - padaju konfete, 
                        // snow = true      - pada sneg
};

(function() {
	confetti.start = startConfetti;
	confetti.stop = stopConfetti;
	confetti.toggle = toggleConfetti;
	confetti.pause = pauseConfetti;
	confetti.resume = resumeConfetti;
	confetti.togglePause = toggleConfettiPause;
	confetti.isPaused = isConfettiPaused;
	confetti.remove = removeConfetti;
	confetti.isRunning = isConfettiRunning;
	var supportsAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
    var colors = ["rgba(30,144,255,", "rgba(107,142,35,", "rgba(255,215,0,", "rgba(255,192,203,", "rgba(106,90,205,", "rgba(173,216,230,", "rgba(238,130,238,", "rgba(152,251,152,", "rgba(70,130,180,", "rgba(244,164,96,", "rgba(210,105,30,", "rgba(220,20,60,"];
    var snowColors = ["rgba(255,255,255,", "rgba(243,243,243,", "rgba(209,230,242", "rgba(213,240,255,"]
	var streamingConfetti = false;
	var animationTimer = null;
	var pause = false;
	var lastFrameTime = Date.now();
	var particles = [];
	var waveAngle = 0;
	var context = null;

	function resetParticle(particle, width, height) {
		particle.color = colors[(Math.random() * colors.length) | 0] + (confetti.alpha + ")");
        particle.color2 = colors[(Math.random() * colors.length) | 0] + (confetti.alpha + ")");
        particle.colorSnow = snowColors[(Math.random() * snowColors.length) | 0] + (confetti.alpha + ")");

		particle.x = Math.random() * width;
		particle.y = Math.random() * height - height;
		particle.diameter = Math.random() * 10 + 5;
		particle.tilt = Math.random() * 10 - 10;
		particle.tiltAngleIncrement = Math.random() * 0.07 + 0.05;
		particle.tiltAngle = Math.random() * Math.PI;
		return particle;
	}

	function toggleConfettiPause() {
		if (pause)
			resumeConfetti();
		else
			pauseConfetti();
	}

	function isConfettiPaused() {
		return pause;
	}

	function pauseConfetti() {
		pause = true;
	}

	function resumeConfetti() {
		pause = false;
		runAnimation();
	}

	function runAnimation() {
		if (pause)
			return;
		else if (particles.length === 0) {
			context.clearRect(0, 0, window.innerWidth, window.innerHeight);
			animationTimer = null;
		} else {
			var now = Date.now();
			var delta = now - lastFrameTime;
			if (!supportsAnimationFrame || delta > confetti.frameInterval) {
				context.clearRect(0, 0, window.innerWidth, window.innerHeight);
				updateParticles();
				drawParticles(context);
				lastFrameTime = now - (delta % confetti.frameInterval);
			}
			animationTimer = requestAnimationFrame(runAnimation);
		}
	}

	function startConfetti(timeout, min, max) {
		var width = window.innerWidth;
		var height = window.innerHeight;
		window.requestAnimationFrame = (function() {
			return window.requestAnimationFrame ||
				window.webkitRequestAnimationFrame ||
				window.mozRequestAnimationFrame ||
				window.oRequestAnimationFrame ||
				window.msRequestAnimationFrame ||
				function (callback) {
					return window.setTimeout(callback, confetti.frameInterval);
				};
		})();
		var canvas = document.getElementById("confetti-canvas");
		if (canvas === null) {
			canvas = document.createElement("canvas");
			canvas.setAttribute("id", "confetti-canvas");
			canvas.setAttribute("style", "display:block;z-index:9;pointer-events:none;position:fixed;top:0");
			document.body.prepend(canvas);
			canvas.width = width;
			canvas.height = height;
			window.addEventListener("resize", function() {
				canvas.width = window.innerWidth;
				canvas.height = window.innerHeight;
			}, true);
			context = canvas.getContext("2d");
		} else if (context === null)
			context = canvas.getContext("2d");
		var count = confetti.maxCount;
		if (min) {
			if (max) {
				if (min == max)
					count = particles.length + max;
				else {
					if (min > max) {
						var temp = min;
						min = max;
						max = temp;
					}
					count = particles.length + ((Math.random() * (max - min) + min) | 0);
				}
			} else
				count = particles.length + min;
		} else if (max)
			count = particles.length + max;
		while (particles.length < count)
			particles.push(resetParticle({}, width, height));
		streamingConfetti = true;
		pause = false;
		runAnimation();
		if (timeout) {
			window.setTimeout(stopConfetti, timeout);
		}
	}

	function stopConfetti() {
		streamingConfetti = false;
	}

	function removeConfetti() {
		stop();
		pause = false;
		particles = [];
	}

	function toggleConfetti() {
		if (streamingConfetti)
			stopConfetti();
		else
			startConfetti();
	}
	
	function isConfettiRunning() {
		return streamingConfetti;
	}

	function drawParticles(context) {
		var particle;
		var x, y, x2, y2;
		for (var i = 0; i < particles.length; i++) {
			particle = particles[i];
			context.beginPath();
			context.lineWidth = particle.diameter;
			x2 = particle.x + particle.tilt;
			x = x2 + particle.diameter / 2;
			y2 = particle.y + particle.tilt + particle.diameter / 2;
			if (confetti.gradient) {
                // Ako ima gradijent, onda ga pravi i dodeljuej tu boju za crtanje
				var gradient = context.createLinearGradient(x, particle.y, x2, y2);
				gradient.addColorStop("0", particle.color);
                gradient.addColorStop("1.0", particle.color2);
                // Crta boju za napravljen gradijent
				context.strokeStyle = gradient;
			} else {
                // Koristi niz boja koji je zadat za confetti
                if(confetti.snow == false){
                    // Padaju konfete
                    context.strokeStyle = particle.color;
                } else {
                    // Pada sneg
                    context.strokeStyle = particle.colorSnow;
                }

            }
			context.moveTo(x, particle.y);
			context.lineTo(x2, y2);
			context.stroke();
		}
	}

	function updateParticles() {
		var width = window.innerWidth;
		var height = window.innerHeight;
		var particle;
		waveAngle += 0.01;
		for (var i = 0; i < particles.length; i++) {
			particle = particles[i];
			if (!streamingConfetti && particle.y < -15)
				particle.y = height + 100;
			else {
				particle.tiltAngle += particle.tiltAngleIncrement;
				particle.x += Math.sin(waveAngle) - 0.5;
				particle.y += (Math.cos(waveAngle) + particle.diameter + confetti.speed) * 0.5;
				particle.tilt = Math.sin(particle.tiltAngle) * 15;
			}
			if (particle.x > width + 20 || particle.x < -20 || particle.y > height) {
				if (streamingConfetti && particles.length <= confetti.maxCount)
					resetParticle(particle, width, height);
				else {
					particles.splice(i, 1);
					i--;
				}
			}
		}
	}
})();



// -----------------------------------------------------------------

// Pocinje da pada sneg
confetti.snow = true;
confetti.start();

var br_overlaja = 1;
let promena_gradijenta_timer = setInterval(promeniGradijent, 20000);
function promeniGradijent(){
	var formirani_gradijent;
	function generisiGradijent(){
		let gradijent = "";
		gradijent = "rgba("  
		let alpha = 0.3;
		for(let i = 0; i < 3; i++){
			let rgb = Math.floor((Math.random()*10000) % 256 - 1);
			gradijent += rgb + ",";
		}
		gradijent += alpha + ")";
		return gradijent;
	}

	let ugao = Math.floor(((Math.random() * 10000) % 361 - 1)) + "deg";
	formirani_gradijent = "linear-gradient(" + ugao + "," + generisiGradijent() + "," + generisiGradijent() + ")";

	if(br_overlaja == 1){
		document.getElementById("overlay" + 1).style.backgroundImage = formirani_gradijent;
		document.getElementById("overlay" + 2).style.opacity = 0;
		document.getElementById("overlay" + 1).style.opacity = 1;
		br_overlaja = 2;
	} else if (br_overlaja == 3){
		document.getElementById("overlay" + 2).style.backgroundImage = formirani_gradijent;
		document.getElementById("overlay" + 1).style.opacity = 0;
		document.getElementById("overlay" + 2).style.opacity = 1;
		br_overlaja = 1;
	} else {
		br_overlaja = 3;
	}
}

const vreme = document.getElementById("timer");
const nova_godina = new Date(2021, 0, 1, 0, 0, 0, 0).getTime();

function dohvatiTrenutnoVreme(){
    let trenutno_vreme = new Date().getTime();
    let do_nove_godine = nova_godina - trenutno_vreme; // u milisekundama

    // Stigli smo do nove godine!
    if(do_nove_godine <= 0){
		document.getElementById("timer").style.fontSize = "15em";
        confetti.stop();
        confetti.snow = false;
        confetti.start(60000, 500, 100);
        vreme.innerHTML = "SREĆNA NOVA 2021. GODINA!"
        // vreme.innerHTML = "СРЕЋНА НОВА 2021. ГОДИНА!"
        clearInterval(timer_interval);
        return
    }

    // Izracunavamo dane, sate, minute, sekunde
    let dani = Math.floor(do_nove_godine / (1000 * 60 * 60 * 24));
    let sati = Math.floor((do_nove_godine % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minuti = Math.floor((do_nove_godine % (1000 * 60 * 60)) / (1000 * 60));
    let sekundi = Math.floor((do_nove_godine % (1000 * 60)) / 1000);
    
	// Ispis u paragraf
	let t_d = "d ";
	let t_h = "h ";
	let t_m = "m ";
	let t_s = "s ";
 	if(dani > 0){
		// d h m s
		vreme.innerHTML = dani + t_d + sati + t_h + minuti + t_m + sekundi + t_s;
	} else if (dani == 0 && sati > 0){
		// h m s
		vreme.innerHTML = sati + t_h + minuti + t_m + sekundi + t_s;
		document.getElementById("timer").style.fontSize = "13em";
	} else if (dani == 0 && sati == 0 && minuti > 0){
		// m s
		vreme.innerHTML = minuti + t_m + sekundi + t_s;
		document.getElementById("timer").style.fontSize = "20em";
	} else {
		vreme.innerHTML = sekundi;
		document.getElementById("timer").style.fontSize = "50em";

	}

}

// // Kursor animacija
// let kursor_div = document.querySelector(".cursor");
// window.addEventListener('mousemove', kursor);;
// // Pomeraj za kurosor na stranici
// function kursor(pomeraj){
// 	kursor_div.style.top = pomeraj.pageY + "px";
// 	kursor_div.style.left = pomeraj.pageX + "px";
// }



// Pozivamo funkciju jednom da se izvrsi pri ucitavanju stranice i postavljamo interval za izvrsavanje
dohvatiTrenutnoVreme();
const timer_interval = setInterval(dohvatiTrenutnoVreme, 1000);
