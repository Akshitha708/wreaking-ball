class Ball {
    constructor(x,y,r){

       this.ball= Bodies.circle(x,y,r) 

       World.add(myWorld, this.ball)
       this.r = r
    }

    
display(){
     
    push()
    ellipseMode(RADIUS)
    fill("red")
    ellipse(this.ball.position.x, this.ball.position.y, this.r, this.r)
    pop()
}
}