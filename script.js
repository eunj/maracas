var game = new Phaser.Game(1920, 1080, Phaser.AUTO, '', {preload: preload, create: create});


function preload() {
	game.load.image('back', 'image/back.png');
	game.load.image('drum', 'image/drum.png');
	game.load.image('maracas', 'image/maracas.png');
	game.load.image('guide', 'image/guide.png');
	game.load.image('glue', 'image/glue.png');
	
	game.load.spritesheet('maracasui','image/maracasui.png');
	game.load.spritesheet('brain','image/brain.png');
	game.load.spritesheet('grain','image/grain.png');

	game.load.spritesheet('orain','image/orain.png');
	game.load.spritesheet('pot','image/pot.png');

	game.load.spritesheet('sprout','image/sprout.png');
	

}

function create() {

	game.add.sprite(0,0, 'back');
	game.add.sprite(0,0, 'drum');
	game.add.sprite(0,0, 'glue');
	game.add.sprite(1722,30, 'maracas');
	game.add.sprite(1722,30, 'guide');
	game.add.sprite(1722,30, 'maracasui');
	game.add.sprite(1722,30, 'grain');
	game.add.sprite(1722,30, 'brain');
	game.add.sprite(1722,30, 'orain');
	game.add.sprite(1722,30, 'pot');
	game.add.sprite(1722,30, 'sprout');
	
	
}

