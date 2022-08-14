let terrain = [];
let characterLeft = [];
let characterUp = [];
let characterRight = [];
let characterDown = [];
let staircaseImg;
function preload(){ 
	terrain[0] = loadImage('assets/graphics/terrain/0000.jpg');
	terrain[1] = loadImage('assets/graphics/terrain/0001.jpg');
	terrain[2] = loadImage('assets/graphics/terrain/0010.jpg');
	terrain[3] = loadImage('assets/graphics/terrain/0011.jpg');
	terrain[4] = loadImage('assets/graphics/terrain/0100.jpg');
	terrain[5] = loadImage('assets/graphics/terrain/0101.jpg');
	terrain[6] = loadImage('assets/graphics/terrain/0110.jpg');
	terrain[7] = loadImage('assets/graphics/terrain/0111.jpg');
	terrain[8] = loadImage('assets/graphics/terrain/1000.jpg');
	terrain[9] = loadImage('assets/graphics/terrain/1001.jpg');
	terrain[10] = loadImage('assets/graphics/terrain/1010.jpg');
	terrain[11] = loadImage('assets/graphics/terrain/1011.jpg');
	terrain[12] = loadImage('assets/graphics/terrain/1100.jpg');
	terrain[13] = loadImage('assets/graphics/terrain/1101.jpg');
	terrain[14] = loadImage('assets/graphics/terrain/1110.jpg');
	terrain[15] = loadImage('assets/graphics/terrain/1111.jpg');

	characterLeft[0] = loadImage('assets/graphics/character/left1.jpg');
	characterLeft[1] = loadImage('assets/graphics/character/left2.jpg');
	characterLeft[2] = loadImage('assets/graphics/character/left3.jpg');
	characterLeft[3] = loadImage('assets/graphics/character/left4.jpg');
	characterUp[0] = loadImage('assets/graphics/character/up1.jpg');
	characterUp[1] = loadImage('assets/graphics/character/up2.jpg');
	characterUp[2] = loadImage('assets/graphics/character/up3.jpg');
	characterUp[3] = loadImage('assets/graphics/character/up4.jpg');
	characterRight[0] = loadImage('assets/graphics/character/right1.jpg');
	characterRight[1] = loadImage('assets/graphics/character/right2.jpg');
	characterRight[2] = loadImage('assets/graphics/character/right3.jpg');
	characterRight[3] = loadImage('assets/graphics/character/right4.jpg');
	characterDown[0] = loadImage('assets/graphics/character/down1.jpg');
	characterDown[1] = loadImage('assets/graphics/character/down2.jpg');
	characterDown[2] = loadImage('assets/graphics/character/down3.jpg');
	characterDown[3] = loadImage('assets/graphics/character/down4.jpg');

	staircaseImg = loadImage('assets/graphics/interactive/staircase.jpg');
}