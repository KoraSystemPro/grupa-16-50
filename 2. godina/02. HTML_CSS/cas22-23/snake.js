const cvs = document.getElementById("snake");	// Uzima id od canvasa
const ctx = cvs.getContext("2d");				// Pravi 2d context za canvas, u kome se nalaze metode za upravljanje canvas-om

const box = 32;		// Jedinica mere naseg polja igre, svaka kutija je 32x32 px 
let score = 0;		// Broj pojedenih jabuka

// Ucitavanje slika
const ground = new Image();
ground.src = "ground.png";

const foodImg = new Image();
foodImg.src = "food.png";

// Napravili hranu
let food = {
	x: Math.floor(Math.random()*17+1) * box,
	y: Math.floor(Math.random()*15+3) * box
};

// Napravili glavu zmije
let snake = [];
snake[0] = {
	x: 9 * box,
	y: 10 * box
};

// Upravljanje zmimijicom
let d;
document.addEventListener("keydown", direction);

function direction(event){
	let key = event.keyCode;
	
	if(key == 37 && d != "RIGHT"){
		d = "LEFT";
		// console.log("LEFT");
	} else if (key == 38 && d != "DOWN") {
		d = "UP";
		// console.log("UP");
	} else if (key == 39 && d != "LEFT") {
		d = "RIGHT";
		// console.log("RIGHT");
	} else if (key == 40 && d != "UP") {
		d = "DOWN";
		// console.log("DOWN");
	}
}

// Provera da li je zmija udarila glavom u neki deo tela
function collision(glava, niz){
	for(let i = 0; i < niz.length; i++){
		if(glava.x == niz[i].x && glava.y == niz[i].y){
			return true;
		}
	}
	return false;
}

// Funkcija draw iscrtava jednu trenutnu sliku 
function draw(){
	// Postavlja pozadinu
	ctx.drawImage(ground, 0, 0);
	
	// Farba glavu zmije u zelenu i telo u belo
	for(let i = 0; i < snake.length; i++){
		if(i == 0){
			ctx.fillStyle = "green";
		} else {
			ctx.fillStyle = "white";
		}
		ctx.fillRect(snake[i].x, snake[i].y, box, box);
		
		// Uokviruje svaki deo zmije sa crvenom bojom
		ctx.strokeStyle = "red";
		ctx.strokeRect(snake[i].x, snake[i].y, box, box);

	}
	
	// Crta sliku jabuke
	ctx.drawImage(foodImg, food.x, food.y);
	
	// Stara pozicija glave
	let glavaX = snake[0].x;
	let glavaY = snake[0].y;
	
	// Vrsi pomeraj glave u odnosu na promenljivu d, cija vrednost je napravljena 
	// u funkciji direction
	if (d == "LEFT"){
		glavaX = glavaX - box;
		console.log("Glava X " + glavaX + " Glava Y " + glavaY);
	}
	if (d == "UP"){
		glavaY = glavaY - box;
		console.log("Glava X " + glavaX + " Glava Y " + glavaY);
	}
	if (d == "RIGHT"){
		glavaX = glavaX + box;
		console.log("Glava X " + glavaX + " Glava Y " + glavaY);
	}
	if (d == "DOWN"){
		glavaY = glavaY + box;
		console.log("Glava X " + glavaX + " Glava Y " + glavaY);
	}
	
	// Provera da li zmija jede jabuku
	if(glavaX == food.x && glavaY == food.y){
		// Ne skida rep jedanput ako je glava zmije na jabuci
		score++;
		food = {
				x: Math.floor(Math.random()*17+1) * box,
				y: Math.floor(Math.random()*15+3) * box
		};
		// Proverava da li se hrana pojavila na telu zmije, ako jeste generise novu poziciju
		// sve dok se hrana ne pojavi na praznom polju
		while(collision(food, snake)){
			food = {
				x: Math.floor(Math.random()*17+1) * box,
				y: Math.floor(Math.random()*15+3) * box
			};
			console.log(food.x + " " + food.y);
		}		
	} else {
		// Skida poslednji deo repa zmije u slucaju da zmija nije pojela jabuku
		snake.pop();
	}
	
	let novaGlava = {
		x : glavaX,
		y : glavaY
	};
	
	// Game over
	if(glavaX < box || glavaX > 17*box || glavaY < 3*box || glavaY > 17*box || collision(novaGlava, snake)){
		// Igra je zavrsena ako pomerena glava zmije na poziciji jednog od zidova ili ako postoji kolizija izmedju 
		// glave i tela zmije

		// Prekida igru, tako sto prekida ponovno izvrsavanje funkcije draw()
		clearInterval(game);
	}
	
	// Pomera glavu ako prethodni uslov nije bio ispunjen
	snake.unshift(novaGlava);
	
	
	// Postavljamo skor
	ctx.fillStyle = "white";
	ctx.font = "45px Changa One";
	ctx.fillText(score, 2*box, 1.5*box);
}

// Tera funkciju draw() da se izvrsava na svakih 100ms (milisekundi) 
let game = setInterval(draw, 100);