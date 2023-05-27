var bg, bgImg;
var player, shooterImg, shooter_shooting;
var edges;
var bullet, bulletgroup;
var enemy,enemygroup;

function preload() {

  shooterImg = loadImage("soldier.png")
  shooter_shooting = loadImage("assets/shooter_3.png")

  bgImg = loadImage("assets/bg.jpeg")

}

function setup() {


  createCanvas(800, windowHeight);
  edges = createEdgeSprites()

  //adding the background image
  bg = createSprite(displayWidth / 2 - 20, displayHeight / 2 - 40, 20, 20)
  bg.addImage(bgImg)
  bg.scale = 1.1


  //creating the player sprite
  player = createSprite(displayWidth - 1150, displayHeight - 200, 50, 50);
  player.addImage(shooterImg)
  player.scale = 1
  player.debug = true
  player.setCollider("rectangle", 0, 0, 150, 150)

  //bullerts
  bulletgroup = new Group();
  //enemy
  enemygroup = new Group();

}

function draw() {
  background(0);
  player.collide(edges[0]);
  player.collide(edges[1]);



  //moving the player up and down and making the game mobile compatible using touches
  if (keyDown("LEFT_ARROW") || touches.length > 0) {
    player.x = player.x - 30
  }
  if (keyDown("RIGHT_ARROW") || touches.length > 0) {
    player.x = player.x + 30
  }
  if (keyWentDown("space")) {
    bullet = createSprite(player.x, player.y, 10, 10);
    bullet.velocityY = -10;
    bulletgroup.add(bullet)
  }
  dinosaurs();
  drawSprites();

}

function dinosaurs()
{
   if(frameCount%90==0){
   enemy=createSprite(30,-10,20,20);
   enemy.velocityY=5;
   enemy.x=random(20,780);
   enemygroup.add(enemy);
   }
}