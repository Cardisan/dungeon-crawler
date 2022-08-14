function draw(){
	background(235);
	for (let i = 0; i < dimensions; i++){
		line (i * resolution/dimensions, 0, i * resolution/dimensions, resolution);
		line (0, i * resolution/dimensions, resolution, i * resolution/dimensions);
	}
	for (let i = 0; i < matrix.length; i++){
		for (let j = 0; j < matrix[i].length; j++){
			image(terrain[binToDec(matrix[i][j].edges)], j * resolution/dimensions, i * resolution/dimensions);
			for (let k = 0; k < matrix[i][j].content.length; k++){
				image(matrix[i][j].content[k].image, j * resolution/dimensions, i * resolution/dimensions);
			}
		}
	}
	textSize(10);
	fill(0);
	text(`Player position: ${playerPos}`, resolution + 5, 10);
	text(`Player coords: ${playerCoords}`, resolution + 5, 30);
	text(`Field contains: ${matrix[playerCoords[0]][playerCoords[1]].content}`, resolution + 5, 50);
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