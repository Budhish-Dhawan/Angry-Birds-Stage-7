/*


//Examples on different types of data in JavaScript

//Number
var num =  89;
console.log(num);

//String
var name = "Budhish";
console.log(name);

//Boolean - true or false
var bool = true;
console.log(bool);

//Undefined
var object;
console.log(object);

//Null
//Reassigning the value of undefined object to null
object = null;
console.log(object);

//array having values with same data type
var arr1 = [23,45,67,89];
console.log(arr1);

//array having values with different data type
var arr2 = [34.5, "hello", false, null, 56];
console.log(arr2);

//length of the array
console.log(arr1.length);
console.log(arr2.length);

//accessing the elements of the array
console.log(arr1[2]); //67
console.log(arr1[arr1.length-1]);//89
console.log(arr2[1]);

//array inside array
var arr3 = ["mango", "banana", false, [1,2,3,4,5], [6,7,8,9,10],[56,78,[34,23]]];
console.log(arr3);
console.log(arr3.length);
console.log(arr3[0]); //mango
console.log(arr3[3][3]);//4
console.log(arr3[4][1]);//7
console.log(arr3[5][2][1]);//23

//pushing elements inside array
var arr4 = ["apple", "mango", "kiwi", "guava"];
console.log(arr4);
arr4.push("orange");
arr4.push("blueberry", "apricot", "papaya");
console.log(arr4);

//pop the element out of an array
arr4.pop();
console.log(arr4);
*/

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;

var gameState = "onSling";


function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    if(gameState !== 'launched'){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
    
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(bird.body);
    }
}