// Skripta vezana za konfete
var confetti={maxCount:100,speed:1,frameInterval:1,alpha:1,gradient:!1,start:null,stop:null,toggle:null,pause:null,resume:null,togglePause:null,remove:null,isPaused:null,isRunning:null,mode:1};!function(){confetti.start=startConfetti,confetti.stop=stopConfetti,confetti.toggle=toggleConfetti,confetti.pause=pauseConfetti,confetti.resume=resumeConfetti,confetti.togglePause=toggleConfettiPause,confetti.isPaused=isConfettiPaused,confetti.remove=removeConfetti,confetti.isRunning=isConfettiRunning;var supportsAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame,colors=["rgba(30,144,255,","rgba(107,142,35,","rgba(255,215,0,","rgba(255,192,203,","rgba(106,90,205,","rgba(173,216,230,","rgba(238,130,238,","rgba(152,251,152,","rgba(70,130,180,","rgba(244,164,96,","rgba(210,105,30,","rgba(220,20,60,"],snow=["rgba(238,251,255,","rgba(238,244,255,","rgba(230,230,230,"],streamingConfetti=!1,animationTimer=null,pause=!1,lastFrameTime=Date.now(),particles=[],waveAngle=0,context=null;function resetParticle(particle,width,height){return particle.color=colors[Math.random()*colors.length|0]+(confetti.alpha+")"),particle.color2=colors[Math.random()*colors.length|0]+(confetti.alpha+")"),particle.colorSnow=snow[Math.random()*snow.length|0]+(confetti.alpha+")"),particle.x=Math.random()*width,particle.y=Math.random()*height-height,particle.diameter=10*Math.random()+5,particle.tilt=10*Math.random()-10,particle.tiltAngleIncrement=.07*Math.random()+.05,particle.tiltAngle=Math.random()*Math.PI,particle}function toggleConfettiPause(){pause?resumeConfetti():pauseConfetti()}function isConfettiPaused(){return pause}function pauseConfetti(){pause=!0}function resumeConfetti(){pause=!1,runAnimation()}function runAnimation(){if(!pause)if(0===particles.length)context.clearRect(0,0,window.innerWidth,window.innerHeight),animationTimer=null;else{var now=Date.now(),delta=now-lastFrameTime;(!supportsAnimationFrame||delta>confetti.frameInterval)&&(context.clearRect(0,0,window.innerWidth,window.innerHeight),updateParticles(),drawParticles(context),lastFrameTime=now-delta%confetti.frameInterval),animationTimer=requestAnimationFrame(runAnimation)}}function startConfetti(timeout,min,max){var width=window.innerWidth,height=window.innerHeight;window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(callback){return window.setTimeout(callback,confetti.frameInterval)};var canvas=document.getElementById("confetti-canvas");null===canvas?((canvas=document.createElement("canvas")).setAttribute("id","confetti-canvas"),canvas.setAttribute("style","display:block;z-index:999999;pointer-events:none;position:fixed;top:0"),document.body.prepend(canvas),canvas.width=width,canvas.height=height,window.addEventListener("resize",(function(){canvas.width=window.innerWidth,canvas.height=window.innerHeight}),!0),context=canvas.getContext("2d")):null===context&&(context=canvas.getContext("2d"));var count=confetti.maxCount;if(min)if(max)if(min==max)count=particles.length+max;else{if(min>max){var temp=min;min=max,max=temp}count=particles.length+(Math.random()*(max-min)+min|0)}else count=particles.length+min;else max&&(count=particles.length+max);for(;particles.length<count;)particles.push(resetParticle({},width,height));streamingConfetti=!0,pause=!1,runAnimation(),timeout&&window.setTimeout(stopConfetti,timeout)}function stopConfetti(){streamingConfetti=!1}function removeConfetti(){stop(),pause=!1,particles=[]}function toggleConfetti(){streamingConfetti?stopConfetti():startConfetti()}function isConfettiRunning(){return streamingConfetti}function drawParticles(context){for(var particle,x,y,x2,y2,i=0;i<particles.length;i++){if(particle=particles[i],context.beginPath(),context.lineWidth=particle.diameter,x=(x2=particle.x+particle.tilt)+particle.diameter/2,y2=particle.y+particle.tilt+particle.diameter/2,confetti.gradient){var gradient=context.createLinearGradient(x,particle.y,x2,y2);gradient.addColorStop("1.0",particle.colorSnow),gradient.addColorStop("0",particle.color),context.strokeStyle=gradient}else 1==confetti.mode?context.strokeStyle=particle.colorSnow:context.strokeStyle=particle.color;context.moveTo(x,particle.y),context.lineTo(x2,y2),context.stroke()}}function updateParticles(){var width=window.innerWidth,height=window.innerHeight,particle;waveAngle+=.01;for(var i=0;i<particles.length;i++)particle=particles[i],!streamingConfetti&&particle.y<-15?particle.y=height+100:(particle.tiltAngle+=particle.tiltAngleIncrement,particle.x+=Math.sin(waveAngle)-.5,particle.y+=.5*(Math.cos(waveAngle)+particle.diameter+confetti.speed),particle.tilt=15*Math.sin(particle.tiltAngle)),(particle.x>width+20||particle.x<-20||particle.y>height)&&(streamingConfetti&&particles.length<=confetti.maxCount?resetParticle(particle,width,height):(particles.splice(i,1),i--))}}();

// Pocinje sneg
// mode: 1 - sneg
// mode: 2 - konfete
confetti.mode = 1;
confetti.start();

const div_timer = document.getElementById("timer");

// Postavljamo vreme do kog brojimo
const nova_godina = new Date(2021, 0, 1, 00, 00, 00).getTime();

function izracunajRazliku(){
    // Uzimamo trenutno vreme
    let trenutno_vreme = new Date().getTime();
    let razmak_do_nove_godine = nova_godina - trenutno_vreme;
    // console.log(razmak_do_nove_godine);

    // Dosli smo do nove godine
    if(razmak_do_nove_godine <= 0){
        clearInterval(do_nove_godine_interval);
        // Pocinju konfete na 1min
        confetti.stop();
        confetti.mode = 2;
        confetti.start(60000, 150, 300);

        div_timer.innerHTML = "SREĆNA NOVA 2021. GODINA!";
        return;
    }

    // Racunamo vreme do nove godine
    let dani = Math.floor(razmak_do_nove_godine / (1000 * 60 * 60 * 24));
    let sati = Math.floor((razmak_do_nove_godine % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); 
    let minuti = Math.floor((razmak_do_nove_godine % (1000 * 60 * 60)) / (1000 * 60));
    let sekunde = Math.floor((razmak_do_nove_godine % (1000 * 60)) / (1000));
    // console.log("dani: " + dani + "\nsati: " + sati + "\nminuti: " + minuti + "\nsekunde: " + sekunde);

    div_timer.innerHTML = dani + "d " + sati + "h " + minuti + "m " + sekunde + "s";
}


izracunajRazliku();1
var do_nove_godine_interval = setInterval(izracunajRazliku, 1000);

