function setup(){
	console.log('Started setup')
	createCanvas(resolution + 200, resolution);
	matrix.length = dimensions;
	for (let i = 0; i < dimensions; i++){
		matrix[i] = [];
		for (let j = 0; j < dimensions; j++){
			matrix[i][j] = new Field;
		}
	}
	staircase = new mapEntity('staircase', staircaseImg, 'nextLevel', false, false);

	//Initiating enemies
	snake = new mapEntity('snake', snakeImg, 'attack', false, true);
	redSnake = new mapEntity('redSnake', redSnakeImg, 'attack', false, true);
	fireSnake = new mapEntity('fireSnake', fireSnakeImg, 'attack', false, true);
	sheep = new mapEntity('sheep', sheepImg, 'attack', false, true);
	rat = new mapEntity('rat', ratImg, 'attack', false, true);
	madRat = new mapEntity('madRat', madRatImg, 'attack', false, true);
	bear = new mapEntity('bear', bearImg, 'attack', false, true);
	blueBear = new mapEntity('blueBear', blueBearImg, 'attack', false, true);
	wolf = new mapEntity('wolf', wolfImg, 'attack', false, true);
	brownWolf = new mapEntity('brownWolf', brownWolfImg, 'attack', false, true);
	darkWolf = new mapEntity('darkWolf', darkWolfImg, 'attack', false, true);
	necroWolf = new mapEntity('necroWolf', necroWolfImg, 'attack', false, true);

	console.log('Finished setup');
}