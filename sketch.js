let zombies = [];
function setup() {
  createCanvas(400, 400);

  for (let i = 0; i < 25; i++) {
    zombies.push(new Mover());
  }
}

function draw() {
  background(300,100,0);
  
  for (let i = 0; i < zombies.length; i++) {
    zombies[i].gerakCuy();
    zombies[i].tampil();
    zombies[i].cekBatas();
  }
}


class Mover {
  constructor(){
    this.location = createVector(random(width/4),random(height/4));
    
    this.velocity = createVector(0,0);
    this.acceleration = createVector(-0.01,0.01);
    this.panjanglebar = random(0, 20);
    
  }
  
  tampil(){
    stroke(0);
    fill(255,255,0);
    arc(this.location.x, this.location.y,50,50,radians(360),radians(random(200-340)))
    line(this.location.x, this.location.y,20,20)
  }
  
  gerakCuy(){
    var mouse = createVector(mouseX, mouseY);
    var w = p5.Vector.sub(mouse,CENTER);
    noStroke()
    fill('blue')
    ellipse(mouse.x, mouse.y, 20,20)
    
    var arahMouse = p5.Vector.sub(mouse, this.location);
    var topSpeed = (0, 6);
    
    arahMouse.normalize();
    arahMouse.mult(0.3); 
  
    
    this.velocity.add(this.acceleration);
    this.velocity.add(arahMouse);
    this.velocity.limit(topSpeed);
    this.location.add(this.velocity);
  }
  
  cekUjung(){
    if ( this.location.x > windowWidth ) {
      this.location.x = 0;
    }
    else if (this.location.x < 0){
      this.locationX.x = windowWidth;
    }
  
    if ( this.location.y > windowHeight ) {
      this.locationY.y = 0;
    }
    else if (this.location.y < 0){
      this.locationY.y = windowHeight;
    }
  }
  
  cekBatas(){
    if (this.location.x < 0 || this.location.x > width){
      this.velocity.x = -1*this.velocity.x
    }
    else if (this.location.y < 0 || this.location.y > height){
      this.velocity.y = -1*this.velocity.y
    }
  }
}