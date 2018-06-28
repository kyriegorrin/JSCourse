//Class that represents a player
class Player{
    //Class constructor
    constructor(ctx,id,username, x, y){
        this.ctx = ctx
        this.id = id
        this.username = username
        
        this.height = 50
        this.width = 10
        this.x = x
        this.y = y
        this.vy = 0

        this.dead = false
    }

    //Setters
    setVy(amount){
        this.vy = amount
    }

    //Utilities
    applyMovement(){
        this.y += this.vy
    }

    //Area movement limit checker
    //Remember that Y axis is inverted
    isBounded(top, bottom){
        if(this.y >= bottom || this.y <= top){
            return false
        }
        else return true
    }

    //Rendering
    render(){
        var aux = ctx.fillStyle
        switch(this.id){
            case 1:
                ctx.fillStyle = "red"
                break

            case 2:
                ctx.fillStyle = "blue"
                break

            case 3:
                ctx.fillStyle = "green"
                break

            case 4:
                ctx.fillStyle = "yellow"
                break
        }
        ctx.fillRect(this.x, this.y, this.width, this.height)
        ctx.fillStyle = aux
    }        
}