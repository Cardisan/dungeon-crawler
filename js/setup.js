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
	snake = new mapEntity('snake', snakeImg, 'startFight', false, true,
		new Enemy("snake", 20, 20, new Point(), new Weapon("Natural weapon", 3, 6, 0)));
	redSnake = new mapEntity('redSnake', redSnakeImg, 'startFight', false, true,
		new Enemy("redSnake", 20, 20, new Point(), new Weapon("Natural weapon", 3, 6, 0)));
	fireSnake = new mapEntity('fireSnake', fireSnakeImg, 'startFight', false, true,
		new Enemy("fireSnake", 20, 20, new Point(), new Weapon("Natural weapon", 3, 6, 0)));
	sheep = new mapEntity('sheep', sheepImg, 'startFight', false, true,
		new Enemy("sheep", 20, 20, new Point(), new Weapon("Natural weapon", 3, 6, 0)));
	rat = new mapEntity('rat', ratImg, 'startFight', false, true,
		new Enemy("rat", 20, 20, new Point(), new Weapon("Natural weapon", 3, 6, 0)));
	madRat = new mapEntity('madRat', madRatImg, 'startFight', false, true,
		new Enemy("madRat", 20, 20, new Point(), new Weapon("Natural weapon", 3, 6, 0)));
	bear = new mapEntity('bear', bearImg, 'startFight', false, true,
		new Enemy("bear", 20, 20, new Point(), new Weapon("Natural weapon", 3, 6, 0)));
	blueBear = new mapEntity('blueBear', blueBearImg, 'startFight', false, true,
		new Enemy("blueBear", 20, 20, new Point(), new Weapon("Natural weapon", 3, 6, 0)));
	wolf = new mapEntity('wolf', wolfImg, 'startFight', false, true,
		new Enemy("wolf", 20, 20, new Point(), new Weapon("Natural weapon", 3, 6, 0)));
	brownWolf = new mapEntity('brownWolf', brownWolfImg, 'startFight', false, true,
		new Enemy("brownWolf", 20, 20, new Point(), new Weapon("Natural weapon", 3, 6, 0)));
	darkWolf = new mapEntity('darkWolf', darkWolfImg, 'startFight', false, true,
		new Enemy("darkWolf", 20, 20, new Point(), new Weapon("Natural weapon", 3, 6, 0)));
	necroWolf = new mapEntity('necroWolf', necroWolfImg, 'startFight', false, true,
		new Enemy("necroWolf", 20, 20, new Point(), new Weapon("Natural weapon", 3, 6, 0)));

	console.log('Finished setup');
}