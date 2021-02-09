var vremeBudjenja = 7;
var podne = 12;
var vremeRucka = 13;
var vremeSpavanja = vremeRucka + 2;
var vece = 18;
var partytime;

console.log(Date());

var prikaziTrenutnoVreme = function(){
	var clock = document.getElementById("clock");
	
	var trenutnoVreme = new Date();
	
	var sati = trenutnoVreme.getHours();
	var minuti = trenutnoVreme.getMinutes();
	var sekunde = trenutnoVreme.getSeconds();
	var meridian = "AM";
	
	if(sati >= podne){
		meridian = "PM";
	}
	if(sati > podne){
		sati = sati - 12;
	}
	
	if(minuti < 10){
		minuti = "0" + minuti; // Dodaje 0 za jednocnifrene minute
	}
	if(sekunde < 10){
		sekunde = "0" + sekunde;
	}
	
	// Spajamo string	hh:mm:ss AM!
	var clockVreme = sati + ":" + minuti + ":" + sekunde + " " + meridian + "!";
	clock.innerText = clockVreme;
};

// Tera sat da se inkrementira, menja sliku, menja tekst
var updateClock = function(){
	var vreme = new Date().getHours();
	var porukaText;
	var slikaAddr = "media/img/lolcat/spavanjac.jpg"; 	// FIX: DOBAR DAN SLIKA!
	
	var block = document.getElementById("porukaBlock");
	var slika = document.getElementById("slikaBlock");
	
	if(vreme == vremeBudjenja){
		slikaAddr = "media/img/lolcat/budjenje.jpg"; 
		slika.style.maxWidth = '30em';
		porukaText = "Buđenje! WAKIE WAKIE";
	}
	else if(vreme == vremeRucka){
		slikaAddr = "media/img/lolcat/rucak.jpg";
		slika.style.maxWidth = '30em';
		porukaText = "Ajmo na ručak! grrrr";
	}
	else if(vreme == vremeSpavanja){	
		slikaAddr = "media/img/lolcat/spavanje.jpeg";
		slika.style.maxWidth = '30em'; 
		porukaText = "Spavanjac! ZZzzz";
	}
	else if(vreme < podne){
		slikaAddr = "media/img/lolcat/spavanjac.jpg";
		slika.style.maxWidth = '30em'; 
		porukaText = "Dobro jutro!";
	}
	else if(vreme >= vece){
		slikaAddr = "media/img/lolcat/dobro_vece.jpg";
		slika.style.maxWidth = '30em'; 
		porukaText = "Dobro veče!";
	}
	else if(vreme == partytime){
		slikaAddr = "media/img/lolcat/party.jpg";
		slika.style.maxWidth = '30em'; 
		porukaText = "Vreme je za žurku!";	
	}
	else {//((vreme >= podne) && (vreme < vece)){
		slikaAddr = "media/img/lolcat/vece.jpg";
		slika.style.maxWidth = '30em'; 
		porukaText = "Dobar dan!";
	}
	
	console.log(porukaText);
	
	block.innerText = porukaText;
	slika.src = slikaAddr;
	
	prikaziTrenutnoVreme();
};

setInterval(updateClock, 1000);

// Aktiviramo select box za vreme budjenja
var vremeBudjenjaSelektorJS = document.getElementById("vremeBudjenjaSelektor");
var vremeBudjenjaEvent = function(){
	vremeBudjenja = vremeBudjenjaSelektorJS.value;
};
vremeBudjenjaSelektorJS.addEventListener("change", vremeBudjenjaEvent);

// Aktiviramo select box za vreme rucka
var vremeRuckaSelektorJS = document.getElementById("vremeRuckaSelektor");
var vremeRuckaEvent = function(){
	vremeRucka = vremeRuckaSelektorJS.value;
};
vremeRuckaSelektorJS.addEventListener("change", vremeRuckaEvent);

// Aktiviramo select box za vreme spavanja
var vremeSpavanjaSelektorJS = document.getElementById("vremeSpavanjaSelektor");
var vremeSpavanjaEvent = function(){
	vremeSpavanja = vremeSpavanjaSelektorJS.value;
	};
vremeSpavanjaSelektorJS.addEventListener("change", vremeSpavanjaEvent);


// Party dugme
var partyDugme = document.getElementById("party-dugme");
var music = new Audio("media/start-it.mp3");
var partyEvent = function(){
	if(partytime < 0) {
		partytime = new Date().getHours();
		partyDugme.innerText = "Party Over!";
		partyDugme.style.backgroundColor = "lightblue";
		music.play();
	} else {
		music.pause();
		music.currentTime = 0;
		partyDugme.innerText = "Party Time!";
		partyDugme.style.backgroundColor = "#222";
		partytime = -1;
	}
};

partyDugme.addEventListener("click", partyEvent);
partyEvent();



