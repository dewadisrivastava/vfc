const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var engine,world
var ground
var ball,ball3,ball4,ball5,ball6,ball7,ball8,ball9
var ball2=[];
var rod=[]

function setup(){
    createCanvas(700,400)
    engine=Engine.create()
    world=engine.world

    for(var k=0;k<=width-10;k=k+60){
        ball2.push(new Ball2(k,30,10))
    }

  for(var j=0;j<=width-10;j=j+60){
      ball2.push(new Ball2(j,50,10))
  }

  for(var i=0;i<=width-10;i=i+60){
    ball2.push(new Ball2(i,70,10))
}

for(var r=0;r<width-10;r=r+50){
    rod.push(new Rod(r,280,10,240))
}

ground=new Ground(00,410,700,5)
    ball=new Ball(190,10,10)
    fill("green")
    ball3=new Ball(210,-320,10)
    ball4=new Ball(310,-620,10)
    ball5=new Ball(260,-920,10)
    ball6=new Ball(510,-1220,10)
    ball7=new Ball(430,-1520,10)
    ball8=new Ball(610,-1820,10)

}






function draw(){
    background("grey")
    Engine.update(engine)
    for(var k=0;k<ball2.length;k++){
        ball2[k].display()
    }


  
   for(var j=0;j<ball2.length;j++){
       ball2[j].display()
       
   }

   for(var i=0;i<ball2.length;i++){
    ball2[i].display()
}

for(var r=0;r<rod.length;r++){
    rod[r].display()
}

ground.display()
ball.display()
ball3.display()
ball4.display()
ball5.display()
ball6.display()
ball7.display()
ball8.display()

}