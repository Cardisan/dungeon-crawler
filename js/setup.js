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
	staircase = new mapEntity('staircase', staircaseImg, 'nextLevel', false, false, null);

	//Initiating enemies
	snake = new mapEntity('snake', snakeImg, 'startFight', false, true, new Snake());
	redSnake = new mapEntity('redSnake', redSnakeImg, 'startFight', false, true, new RedSnake());
	fireSnake = new mapEntity('fireSnake', fireSnakeImg, 'startFight', false, true, new FireSnake());
	sheep = new mapEntity('sheep', sheepImg, 'startFight', false, true, new Sheep());
	rat = new mapEntity('rat', ratImg, 'startFight', false, true, new Rat());
	madRat = new mapEntity('madRat', madRatImg, 'startFight', false, true, new MadRat());
	bear = new mapEntity('bear', bearImg, 'startFight', false, true, new Bear());
	blueBear = new mapEntity('blueBear', blueBearImg, 'startFight', false, true, new BlueBear());
	wolf = new mapEntity('wolf', wolfImg, 'startFight', false, true, new Wolf());
	brownWolf = new mapEntity('brownWolf', brownWolfImg, 'startFight', false, true, new BrownWolf());
	darkWolf = new mapEntity('darkWolf', darkWolfImg, 'startFight', false, true, new DarkWolf());
	necroWolf = new mapEntity('necroWolf', necroWolfImg, 'startFight', false, true, new NecroWolf());

	console.log('Finished setup');
}