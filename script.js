var game = new Phaser.Game(1920, 1080, Phaser.AUTO, '', {preload: preload, create: create});


function preload() {
	game.load.image('back', 'assets/back.png');
	

}

function create() {

	game.add.sprite(0,0, 'back');
	
	
}

