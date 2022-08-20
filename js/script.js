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
let frameCounter = 0;
let playerSpeed = 1;
let playerPos = [resolution/dimensions/2, resolution/dimensions/2]; // IT DOESN'T EXIST
let player = new Player("Stefan", 100, 100, new Point());
player.equipment.addItemToEquipment(new Weapon("Super awesome sword", 5, 15, undefined));
player.equipment.addItemToEquipment(new Weapon("God sword", 45, 60, 9500));
player.equipment.equipWeapon(0);

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
			if (player.stageCoords.y >= 1){
				if (matrix[player.stageCoords.x][player.stageCoords.y].edges[0] == 0 && matrix[player.stageCoords.x][player.stageCoords.y - 1].edges[2] == 0){
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
			if (player.stageCoords.x >= 1){
				if (matrix[player.stageCoords.x][player.stageCoords.y].edges[1] == 0 && matrix[player.stageCoords.x - 1][player.stageCoords.y].edges[3] == 0){
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
			if (player.stageCoords.y < dimensions){
				if (matrix[player.stageCoords.x][player.stageCoords.y].edges[2] == 0 && matrix[player.stageCoords.x][player.stageCoords.y + 1].edges[0] == 0){
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
			if (player.stageCoords.x < dimensions){
				if(matrix[player.stageCoords.x][player.stageCoords.y].edges[3] == 0 && matrix[player.stageCoords.x + 1][player.stageCoords.y].edges[1] == 0){
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
	previousCoords = new Point(player.stageCoords.x, player.stageCoords.y);
	player.stageCoords.x = floor(playerPos[0]/32);
	player.stageCoords.y = floor(playerPos[1]/32);

	// if player coordinated changed, call event
	if(previousCoords.x != player.stageCoords.x || previousCoords.y != player.stageCoords.y)
		onPlayerCoordsChanged();
}
// event which should be called when played changed coordinates
function onPlayerCoordsChanged(){
	// Start fight with every Enemy in current player coordinates (if enemy are alive)
	for(var i = 0; i < matrix[player.stageCoords.x][player.stageCoords.y].content.length; i++){
		if(matrix[player.stageCoords.x][player.stageCoords.y].content[i].specialAction == "startFight"){
			if(matrix[player.stageCoords.x][player.stageCoords.y].content[i].entity.alive == true)
				startFight(player, matrix[player.stageCoords.x][player.stageCoords.y].content[i].entity, undefined);
		}
	}
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

console.log('Finished script.js');