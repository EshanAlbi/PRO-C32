const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg = "sunrise1.png";
var hours;

function preload() {
    getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg)
    background(backgroundImg)


    Engine.update(engine);
    textSize(30)

    // write code to display time in correct format here
    if(hours >= 12){
        text("Time :"+hours%12+" pm",50,100);

    }
    else if(hours == 0 ){
        text("Time: 12 am",100,100);
    }
    else{
        text("Time:"+hours%12+"am",50,100);

    }


}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")

    //change the data in JSON format
    var responseJson = await response.json();
    var datetime = responseJson.datetime;

    // write code slice the datetime
    hours = datetime.slice(11,13)




    // add conditions to change the background images from sunrise to sunset
    if(hours >= 04 && hours <= 06){
        bg = "sunrise1.png";
    }
    else if(hours >=06 && hours <=08){
        bg = "sunrise2.png";
    }
    else if(hours >=08 && hours <=10){
        bg = "sunrise3.png";
    }
    else if(hours >=10 && hours <=12){
        bg = "sunrise4.png";
    }
    else if(hours >=14 && hours <=16){
        bg = "sunrise5.png";
    }
    else if(hours >=16 && hours <=18){
        bg = "sunrise6.png";
    }
    else if(hours >=18 && hours <20){
        bg = "sunset7.png";
    }
    else if(hours >=20 && hours <=22){
        bg = "sunset8.png";
    }

    else if(hours >=22 && hours <=24){
        bg = "sunset9.png";
    }
    
    
    
    else if(hours >=24 && hours <=0){
        bg = "sunset10.png";

    }
    else if(hours >=0 && hours <=03){
        bg = "sunset11.png";
    }
    else{
        bg = "sunset12.png";
    }


    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg);


}
