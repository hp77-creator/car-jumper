class Car{
 constructor(){
  this.r = 100; 
  this.x = this.r;
  this.y = height - this.r;
  this.vy = 0;
  this.gravity = 1.5;
   
 
 }
  hits(obs){
  return collideRectRect(this.x,this.y,this.r,this.r,obs.x, obs.y, obs.r, obs.r);
  }
  
  jump(){
    if(this.y == height - this.r){
  this.vy = -25;
    }
  }
  move(){
    this.y += this.vy;
    this.vy += this.gravity;
    this.y = constrain(this.y, 0, height-this.r); 
  }
  
  
  show(){
  fill(255, 50);  
  image(cImg, this.x, this.y, this.r, this.r);
    
  } 
  
  

}
