const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var world,engine;
var l,l1,l2,l3,l4;
var umbrela;
var maxDrops = 100;
var Drops = [];
var thunderFrame = 0;
function preload(){
    l1 = loadImage("images/1.png");
    l2 = loadImage("images/2.png");
    l3 = loadImage("images/3.png");
    l4 = loadImage("images/4.png");
    
}

function setup(){
   var canvas = createCanvas(500,500)
    engine = Engine.create();
    world = engine.world;
    umbrela = new Umbrella(250,380);
    if(frameCount%200===0){
        for(var i = 0;i<maxDrops;i++){
            Drops.push(new Drop(random(0,500),random(0,400)));

        }
    }
    
}

function draw(){
    background(0);
    Engine.update(engine);
    var rand = Math.round(random(1,4));
    if(frameCount%100===0){
        thunderFrame=frameCount
        l = createSprite(random(10,450),random(10,30),20,20);
        switch(rand){
            case 1:l.addImage(l1);
            break;
            case 2:l.addImage(l2);
            break;
            case 3:l.addImage(l3);
            break;  
            case 4:l.addImage(l4);
            break;
            default:break;
        }
        l.scale = random(0.3,0.7);
    }
    if(thunderFrame+10===frameCount && l){
        l.destroy();
    }
    umbrela.display();
    for(var i = 0;i<maxDrops;i++){
        Drops[i].display();
        Drops[i].update();
    }
    drawSprites();
    
    
}   