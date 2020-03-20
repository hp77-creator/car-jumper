let car;
let cImg;
let bImg;
let tImg;
let obs = [];

function preload(){
  cImg = loadImage('car.jpg');
  bImg = loadImage('bg.jpg');
  tImg = loadImage('obstacle.jpg');
}
  

function setup() {
  createCanvas(800, 450);
  car = new Car;
}

function keyPressed(){
  if(key == ' '){
  car.jump();
  }
}



function draw() {
  if(random(1)<0.01){
    obs.push(new Obs());
  }
    
  background(bImg);
  car.show();
  car.move();
  for(let o of obs){
    o.move();
    o.show();
    if(car.hits(o)){
      console.log('game over');
      noLoop();
  }
  }
  

}