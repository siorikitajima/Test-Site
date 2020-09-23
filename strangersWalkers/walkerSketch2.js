var spriteframeData, sprSht;
var playListR = []; var playListL = [];
var pauseSwitch = true;
var infoSwitch = false;
var colorSwitch = 7;

// Group Names = Each Row
var topRowR, topRowL, secondRowR, secondRowL, thirdRowR, thirdRowL, fourthRowR, fourthRowL, fifthRowR, fifthRowL;

// Sprite Names
var charactorList = ["tyny", "peter", "jon"];

// Data for each Charactor
var tinyListR = [
  {'id':0, 'name':'tinyR_pink'},
  {'id':1, 'name':'tinyR_green'},
  {'id':2, 'name':'tinyR_yellow'},
  {'id':3, 'name':'tinyR_purple'},
  {'id':4, 'name':'tinyR_orange'},
  {'id':5, 'name':'tinyR_teal'},
  {'id':6, 'name':'tinyR_red'},
  {'id':7, 'name':'tinyR_gray'}
];
var tinyListL = [
  {'id':0, 'name':'tinyL_pink'},
  {'id':1, 'name':'tinyL_green'},
  {'id':2, 'name':'tinyL_yellow'},
  {'id':3, 'name':'tinyL_purple'},
  {'id':4, 'name':'tinyL_orange'},
  {'id':5, 'name':'tinyL_teal'},
  {'id':6, 'name':'tinyL_red'},
  {'id':7, 'name':'tinyL_gray'}
];
// Color Array : Total 400
var colorList = [
    {'id':0, 'name':'_pink', 'number':21, 'r':255, 'g': 53, 'b':98},
    {'id':1, 'name':'_green', 'number':5, 'r':30, 'g': 85, 'b':92},
    {'id':2, 'name':'_yellow', 'number':5, 'r':239, 'g': 160, 'b':11},
    {'id':3, 'name':'_purple', 'number':11, 'r':49, 'g': 10, 'b':49},
    {'id':4, 'name':'_orange', 'number':11, 'r':220, 'g': 96, 'b':46},
    {'id':5, 'name':'_teal', 'number':2, 'r':0, 'g': 175, 'b':185},
    {'id':6, 'name':'_red', 'number':4, 'r':145, 'g': 39, 'b':55},
    {'id':7, 'name':'_gray', 'number':341, 'r':55, 'g': 55, 'b':55}];

var colorArray = [];

function preload() {
    //Push 400 colors into the array
    for(var c=0; c<colorList.length;c++){
      for(var cn=0; cn<colorList[c].number;cn++){
        colorArray.push(colorList[c].id);
    }}
    //Prepare all charactor animations x 8 Colors each Right
    for(var a=0; a<tinyListR.length;a++){
      var animName = tinyListR[a].name + '_anim';
      var animImg = 'walkers/' + tinyListR[a].name + '.png';
      animName = loadSpriteSheet(animImg, 200, 300, 6);
      tinyListR[a].name = loadAnimation(animName);
    }
    //Prepare all charactor animations x 8 Colors each Left
    for(var a=0; a<tinyListL.length;a++){
      var animName = tinyListL[a].name + '_anim';
      var animImg = 'walkers/' + tinyListL[a].name + '.png';
      animName = loadSpriteSheet(animImg, 200, 300, 6);
      tinyListL[a].name = loadAnimation(animName);
    }
};

function setup() {
  createCanvas(windowWidth, windowHeight);
  topRowR = new Group(); secondRowR = new Group(); thirdRowR = new Group(); fourthRowR = new Group(); fifthRowR = new Group();
  topRowL = new Group(); secondRowL = new Group(); thirdRowL = new Group(); fourthRowL = new Group(); fifthRowL = new Group();

//   for(var a=0; a<imageListL.length;a++){
//     imageListL[a].name.frameDelay = floor(random(4,8.9));
//   }

// Setup size, speed and position of each row group
playListR = (width < 600) ? [
    {"rowID": topRowR, "x": width*4, "y":100, "scale":0.55, "speed": -2},
    {"rowID": secondRowR, "x": width*6, "y":height/5, "scale":0.72, "speed": -3},
    {"rowID": thirdRowR, "x": width*8, "y":height/3, "scale":1.08, "speed": -4},
    {"rowID": fourthRowR, "x": width*12, "y":height/2, "scale":1.5, "speed": -5},
    {"rowID": fifthRowR, "x": width*16, "y":height-100, "scale":2.08, "speed": -6}
    ]:[
    {"rowID": topRowR, "x": width*2, "y":height/7, "scale":0.52, "speed": -2},
    {"rowID": secondRowR, "x": width*3, "y":height/5, "scale":0.72, "speed": -3},
    {"rowID": thirdRowR, "x": width*4, "y":height/3, "scale":1.08, "speed": -4},
    {"rowID": fourthRowR, "x": width*5, "y":height/2, "scale":1.5, "speed": -5},
    {"rowID": fifthRowR, "x": width*7, "y":height-200, "scale":2.08, "speed": -6}
    ];
playListL = (width < 600) ? [
    {"rowID": topRowL, "x": -(width*4), "y":120, "scale":0.6, "speed": 1},
    {"rowID": secondRowL, "x": -(width*6), "y":height/5 + 15, "scale":0.76, "speed": 1.4},
    {"rowID": thirdRowL, "x": -(width*8), "y":height/3 + 20, "scale":1.12, "speed": 2.5},
    {"rowID": fourthRowL, "x": -(width*16), "y":height/2 + 25, "scale":1.54, "speed": 3.5},
    {"rowID": fifthRowL, "x": -(width*16), "y":height-100 + 30, "scale":2.12, "speed": 4.5}
    ]:[
    {"rowID": topRowL, "x": -(width*1.2), "y":height/7 + 20, "scale":0.56, "speed": 1},
    {"rowID": secondRowL, "x": -(width*2.5), "y":height/5 + 30, "scale":0.76, "speed": 1.5},
    {"rowID": thirdRowL, "x": -(width*4), "y":height/3 + 40, "scale":1.12, "speed": 2.5},
    {"rowID": fourthRowL, "x": -(width*5), "y":height/2 + 50, "scale":1.54, "speed": 3.5},
    {"rowID": fifthRowL, "x": -(width*7), "y":height-200 + 60, "scale":2.12, "speed": 4.5}
    ];

//assign sprites to Right Rows
    for(var r=0; r<playListR.length;r++){
        for(var a=0; a<tinyListR.length;a++){
        var randomColor = floor(random(0, 399.9));
        var randomX = random(0.5, 1.5);
        var coId = colorArray[randomColor];
        var animSpr = tinyListR[coId].name + '_spr';
        var animLab = str(coId);
        tinyListR[a].name.frameDelay = floor(random(5,9.9));
        animSpr = createSprite(playListR[r].x * randomX, playListR[r].y, 200, 300);
        animSpr.scale = playListR[r].scale;
        animSpr.addAnimation(animLab, tinyListR[coId].name);
        //Get color ID when clicked
        animSpr.setDefaultCollider ();
        animSpr.onMousePressed = function() {
          colorSwitch = this.getAnimationLabel();
        };
        //
        animSpr.addToGroup(playListR[r].rowID);
        }
    }
//assign sprites to Left Rows
    for(var r=0; r<playListL.length;r++){
        for(var a=0; a<tinyListL.length;a++){
        var randomColor = floor(random(0, 399.9));
        var randomX = random(0.5, 1.5);
        var coId = colorArray[randomColor];
        var animSpr = tinyListL[coId].name + '_spr';
        var animLab = str(coId);
        tinyListL[a].name.frameDelay = floor(random(5,9.9));
        animSpr = createSprite(playListL[r].x * randomX, playListL[r].y, 200, 300);
        animSpr.scale = playListL[r].scale;
        animSpr.addAnimation(animLab, tinyListL[coId].name);
        //Get color ID when clicked
        animSpr.setDefaultCollider ();
        animSpr.onMousePressed = function() {
          colorSwitch = this.getAnimationLabel();
        };
        //
        animSpr.addToGroup(playListL[r].rowID);
        }
    }
};

function draw() {
  clear();
  background(224, 224, 224);

////// Horizontal Animation from the Right
for(var row=0; row < playListR.length; row++){
    var rowID = playListR[row].rowID;
  for(var i = 0; i<rowID.length; i++) {
    var thisSpr = rowID[i];
    var cloneRow = rowID.slice();
    cloneRow.splice(i,1);
    thisSpr.velocity.x = playListR[row].speed + i/3;
    if (thisSpr.position.x < - 300) {
        thisSpr.remove();
        var randomColor = floor(random(0, 399.9));
        var coId = colorArray[randomColor];
        var animLab = str(coId);
        var newSpr = createSprite(playListR[row].x, playListR[row].y, 200, 300);
        newSpr.scale = playListR[row].scale;
        newSpr.addAnimation(animLab, tinyListR[coId].name);
        //Get color ID when clicked
        newSpr.setDefaultCollider();
        newSpr.onMousePressed = function() {
          colorSwitch = this.getAnimationLabel();
        };
        //
        newSpr.addToGroup(rowID);
        }
    }
  }

////// Horizontal Animation from the Left
for(var row=0; row < playListL.length; row++){
    var rowID = playListL[row].rowID;
  for(var i = 0; i<rowID.length; i++) {
    var thisSpr = rowID[i];
    var cloneRow = rowID.slice();
    cloneRow.splice(i,1);
    thisSpr.velocity.x = playListL[row].speed + i/3;
    if (thisSpr.position.x > width + 200) {
        thisSpr.remove();
        var randomColor = floor(random(0, 399.9));
        var coId = colorArray[randomColor];
        var animLab = str(coId);
        var newSpr = createSprite(playListL[row].x, playListL[row].y, 200, 300);
        newSpr.scale = playListL[row].scale;
        newSpr.addAnimation(animLab, tinyListL[coId].name);
        //Get color ID when clicked
        newSpr.setDefaultCollider ();
        newSpr.onMousePressed = function() {
          colorSwitch = this.getAnimationLabel();
        };
        //
        newSpr.addToGroup(rowID);
        }
  }}

// Draw sprite in the Z-index order
drawSprites(topRowR);
drawSprites(topRowL);
// fill(224,224,224,20);
// rect(0,0,width, height);
drawSprites(secondRowR);
drawSprites(secondRowL);
// rect(0,0,width, height);
drawSprites(thirdRowR);
drawSprites(thirdRowL);
// rect(0,0,width, height);
drawSprites(fourthRowR);
drawSprites(fourthRowL);
// rect(0,0,width, height);
drawSprites(fifthRowR);
drawSprites(fifthRowL);

//Showing the info popup
if(infoSwitch) {
  var c = colorSwitch;
  noStroke();
  fill(colorList[c].r, colorList[c].g, colorList[c].b);
  rect(0,0, width, 200);
}
};

function mouseClicked() {
// Paused + resumed when clicked
    if(pauseSwitch) {  
      noLoop();
    } else {
      loop();}
    pauseSwitch = !pauseSwitch;
    infoSwitch = !infoSwitch;
  };