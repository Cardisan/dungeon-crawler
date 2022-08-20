console.log('Started presentation.js');
function draw(){
	background(235);
	for (let i = 0; i < dimensions; i++){
		line (i * resolution/dimensions, 0, i * resolution/dimensions, resolution);
		line (0, i * resolution/dimensions, resolution, i * resolution/dimensions);
	}
	imageMode(CENTER);
	for (let i = 0; i < matrix.length; i++){
		for (let j = 0; j < matrix[i].length; j++){
			image(terrain[binToDec(matrix[i][j].edges)], (j + 0.5) * resolution/dimensions, (i + 0.5) * resolution/dimensions);
			for (let k = 0; k < matrix[i][j].content.length; k++){
				image(matrix[i][j].content[k].image, (j + 0.5) * resolution/dimensions, (i + 0.5) * resolution/dimensions);
			}
		}
	}
	imageMode(CORNER)
	textSize(10);
	fill(0);
	text(`Player position: ${playerPos}`, resolution + 5, 10);
	text(`Player coords: ${player.stageCoords.x}, ${player.stageCoords.y}`, resolution + 5, 30);
	let fieldContent = ''
	for (let i = 0; i < matrix[player.stageCoords.x][player.stageCoords.y].content.length; i++){
		fieldContent = concat(fieldContent, matrix[player.stageCoords.x][player.stageCoords.y].content[i].name, ', ');
	}
	text(`Field contains: ${fieldContent}`, resolution + 5, 50);
	textSize(32);
	text(keyCode, 15, 250);
	fill (255, 0, 0);
	//image(characterDown[0], playerPos[1], playerPos[0]);
	circle(playerPos[1], playerPos[0], resolution/dimensions*0.25);
	frameCounter++;
	if (frameCounter % 3 == 0){
		refresh20();
	}
	if (frameCounter % 12 == 0){
		refresh5();
	}
}
console.log('Finished presentation.js');