class Ball{
    constructor(ctx, x, y){
        this.ctx = ctx
        this.radius = 7
        //Position
        this.x = x
        this.y = y
        //Velocity
        this.vx = 0
        this.vy = 0
        //Acceleration
        this.ax = 0
        this.ay = 0
    }

    //Rendering function
    render(){
        var aux = ctx.fillStyle
        ctx.fillStyle = "white"
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI)
        ctx.fill()
        ctx.fillStyle = aux
    }

    //Setters
    setVelocity(vx, vy){
        this.vx = vx
        this.vy = vy
    }

    //Collisions and bounding
    isBounded(top, bottom, left, right){
        return (this.x >= top && this.x <= bottom && this.y >= left && this.y <= right)
    }

    whichBoundary(top, bottom, left, right){
        if(this.y >= bottom) return "bottom"
        else if(this.y <= top) return "top"
        else if(this.x <= left) return "left"
        else if(this.x >= right) return "right"
    }

    isColliding(player){
        if(Math.abs(this.x - player.x) < (this.radius+(player.width/2)) 
            && Math.abs(this.y - player.y) < (this.radius+(player.height/2)))
            return true
        else return false
    }

    //Utilities
    applyMovement(){
        this.x += this.vx
        this.y += this.vy
    }

    reverseVx(){
        this.vx *= -1
    }

    reverseVy(){
        this.vy *= -1
    }
}