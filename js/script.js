console.log('Started script.js');

class Field{
	constructor(){
		this.edges = random([0, 0, 0, 0, 1]).toString().concat(random([0, 0, 0, 0, 1]).toString(), random([0, 0, 0, 0, 1]).toString(), random([0, 0, 0, 0, 1]).toString());
		this.image;
		this.content = [];
	}
}


function nextLevel(){
	alert(`You go to the next level!`);
}

let resolution = 320;
let dimensions = 10;
let matrix = [];
let playerCoords = new Point();
let frameCounter = 0;
let playerSpeed = 1;
let playerPos = [resolution/dimensions/2, resolution/dimensions/2];


function spawnRandomly(mapEntity){
	matrix[floor(random(0, 10))][floor(random(0, 10))].content.push(mapEntity);
}
function makeDoubleWalls(){
	for (let i = 0; i < matrix.length; i++){
		for (let j = 0; j < matrix[i].length; j++){
			for (let k = 0; k < 4; k++){
				if (matrix[i][j].edges[k] == 1){
					let neighbour = getNeighbour([i, j], k);
					if (neighbour != null){
						let oldString = matrix[neighbour[0][0]][neighbour[0][1]].edges;
						let newString = oldString.slice(0, neighbour[1]) + '1' + oldString.slice(neighbour[1] + 1);
						matrix[neighbour[0][0]][neighbour[0][1]].edges = newString;
					}
				}
			}
		}
	}
}
function refresh20(){
	if (keyIsDown(LEFT_ARROW)){
		move('left');
	}
	if (keyIsDown(UP_ARROW)){
		move('up');
	}
	if (keyIsDown(RIGHT_ARROW)){
		move('right');
	}
	if (keyIsDown(DOWN_ARROW)){
		move('down');
	}
}
function refresh5(){
	
}
function move(direction){
	if (direction == 'left' && playerPos[1] > 0){
		if (playerPos[1] % (resolution/dimensions) <= 5){
			if (playerCoords.y >= 1){
				if (matrix[playerCoords.x][playerCoords.y].edges[0] == 0 && matrix[playerCoords.x][playerCoords.y - 1].edges[2] == 0){
					playerPos[1] -= playerSpeed;
				}
			}
		}
		else{
			playerPos[1] -= playerSpeed;
		}
	}
	if (direction == 'up' && playerPos[0] > 0){
		if (playerPos[0] % (resolution/dimensions) <= 5){
			if (playerCoords.x >= 1){
				if (matrix[playerCoords.x][playerCoords.y].edges[1] == 0 && matrix[playerCoords.x - 1][playerCoords.y].edges[3] == 0){
					playerPos[0] -= playerSpeed;
				}
			}
		}
		else{
			playerPos[0] -= playerSpeed;
		}
	}
	if (direction == 'right' && playerPos[1] < resolution - 5){
		if (playerPos[1] % (resolution/dimensions) >= resolution/dimensions - 5){
			if (playerCoords.y < dimensions){
				if (matrix[playerCoords.x][playerCoords.y].edges[2] == 0 && matrix[playerCoords.x][playerCoords.y + 1].edges[0] == 0){
					playerPos[1] += playerSpeed;
				}
			}
		}
		else{
			playerPos[1] += playerSpeed;
		}
	}
	if (direction == 'down' && playerPos[0] < resolution - 5){
		if (playerPos[0] % (resolution/dimensions) >= resolution/dimensions - 5){
			if (playerCoords.x < dimensions){
				if(matrix[playerCoords.x][playerCoords.y].edges[3] == 0 && matrix[playerCoords.x + 1][playerCoords.y].edges[1] == 0){
					playerPos[0] += playerSpeed;
				}
			}
		}
		else{
			playerPos[0] += playerSpeed;
		}
	}
	updatePlayerCoords();
}
function updatePlayerCoords(){
	playerCoords.x = floor(playerPos[0]/32);
	playerCoords.y = floor(playerPos[1]/32);
}
function keyPressed(){
	if (keyCode == LEFT_ARROW){ //LEFT
		move('left');
	}
	if (keyCode == UP_ARROW){ //UP
		move('up');
	}
	if (keyCode == RIGHT_ARROW){ //RIGHT
		move('right');
	}
	if (keyCode == DOWN_ARROW){ //DOWN
		move('down');
	}
}

//DEBUG !!!
const DEBUG_MODE = true;
const DEBUG_MODE_FightClass = true;

// player creation
player = new Player("Stefan", 100, 100, new Point(1,1));
player.equipment.addItemToEquipment(new Weapon("Super awesome sword", 5, 15, undefined));
player.equipment.addItemToEquipment(new Weapon("God sword", 45, 60, 9500));
player.equipment.equipWeapon(0);

// enemy creation
enemy1 = new Enemy("Jakis Wiesniak", 100, 100, new Point(2,1), new Weapon("Shit sword", 3, 6, 5));

// Fight
fight = new Fight(player, enemy1, undefined);
while(fight.isFinished == false){
	fight.hitAction();
}



console.log('Finished script.js');