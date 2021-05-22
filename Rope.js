class Rope{
    constructor(body,point){
        var  options = {
            bodyA: body,
            pointB: point,
            length: 250,
            stiffness: 0.02
          }
        this.rope = Constraint.create(options)
        World.add(myWorld, this.rope)
        
    }
    display(){
        push()
        strokeWeight(7)
        stroke("blue")
       line(this.rope.bodyA.position.x, this.rope.bodyA.position.y,this.rope.pointB.x,this.rope.pointB.y)
       pop()

    }

    
}