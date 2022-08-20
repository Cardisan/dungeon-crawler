console.log('Started helpers.js');

function binToDec(binaryString){ //Turns 4-bit binary String into a decimal Number 
	let result = 0;
	if (binaryString[0] == 1){
		result = result + 8
	}
	if (binaryString[1] == 1){
		result = result + 4
	}
	if (binaryString[2] == 1){
		result = result + 2
	}
	if (binaryString[3] == 1){
		result = result + 1
	}
	return result;
}
function getNeighbour(coords, edge){ //Accepts edge coords and returns neighbouring edge coords
	let neighbourCoords = [];
	let neighbourEdge;
	if (edge == 0){
		neighbourCoords = [coords[0], coords[1] - 1];
		neighbourEdge = 2;
	}
	if (edge == 1){
		neighbourCoords = [coords[0] - 1, coords[1]];
		neighbourEdge = 3;
	}
	if (edge == 2){
		neighbourCoords = [coords[0], coords[1] + 1];
		neighbourEdge = 0;
	}
	if (edge == 3){
		neighbourCoords = [coords[0] + 1, coords[1]];
		neighbourEdge = 1;
	}
	if (neighbourCoords[0] < 0 || neighbourCoords[0] >= dimensions || neighbourCoords[1] < 0 || neighbourCoords[1] >= dimensions){
		return null;
	}
	console.log(`getNeighbour(): Neighbour coords are at ${neighbourCoords} and its neighbouring edge is ${neighbourEdge}`);
	return [neighbourCoords, neighbourEdge];
}
function spawnEachEnemy(){ //Spawns one of each enemy for debugging 
	spawnRandomly(snake);
	spawnRandomly(redSnake);
	spawnRandomly(fireSnake);
	spawnRandomly(rat);
	spawnRandomly(madRat);
	spawnRandomly(sheep);
	spawnRandomly(bear);
	spawnRandomly(blueBear);
	spawnRandomly(wolf);
	spawnRandomly(brownWolf);
	spawnRandomly(darkWolf);
	spawnRandomly(necroWolf);
}
console.log('Finished helpers.js');