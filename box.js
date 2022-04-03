class Box {

    constructor(x,y,width,height){
        this.width=width;
        this.height=height;
        var option={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,this.width,this.height,option);
        World.add(world,this.body)

    }

    display()
    {
        rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y,this.width,this.height)
    }




}