var game = new Phaser.Game(1920, 1080, Phaser.AUTO, '', {preload: preload, create: create});


function preload() {
	game.load.image('back', 'assets/back.png');
	game.load.image('drum', 'assets/drum.png');
	game.load.image('maracas', 'assets/maracas.png');
	game.load.image('guide', 'assets/guide.png');
	
	game.load.spritesheet('maracasui','assets/maracasui.png');
	game.load.spritesheet('brain','assets/brain.png');
	game.load.spritesheet('grain','assets/grain.png');

	game.load.spritesheet('orain','assets/orain.png');
	game.load.spritesheet('pot','assets/pot.png');

	game.load.spritesheet('sprout','assets/sprout.png');
	

}

function create() {

	game.add.sprite(0,0, 'back');
	game.add.sprite(0,0, 'drum');
	game.add.sprite(1722,30, 'maracas');
	game.add.sprite(1722,30, 'guide');
	game.add.sprite(1722,30, 'maracasui');
	game.add.sprite(1722,30, 'grain');
	game.add.sprite(1722,30, 'brain');
	game.add.sprite(1722,30, 'orain');
	game.add.sprite(1722,30, 'pot');
	game.add.sprite(1722,30, 'sprout');
	
	
}

