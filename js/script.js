function preload(){}
function setup(){
	createCanvas(resolution, resolution + 200);
}
function draw(){
	background(235);
}

let resolution = 1000;





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

