var canvas = new fabric.Canvas('myCanvas');

playerx = 0;
playery = 0;

blockwidth = 30;
blockheight = 30;

var playerobject = "";
var blockobject = "";

function playerUpdate(){
    fabric.Image.fromURL("player.png", function(Img){
        playerobject = Img;

        playerobject.scaleToWidth(150);
        playerobject.scaleToHeight(140);
        playerobject.set({
            top:playery,
            left:playerx
        });
        canvas.add(playerobject)
    });
}

function newImage(get_block){
    fabric.Image.fromURL(get_block, function(Img){
        blockobject = Img;

        blockobject.scaleToWidth(blockwidth);
        blockobject.scaleToHeight(blockheight);
        blockobject.set({
            top:playery,
            left:playerx
        });
        canvas.add(blockobject)
    });
}

window.addEventListener("keydown", myKeydown);

function myKeydown(e){
    keypressed = e.keyCode;
    console.log(keypressed);
    if(e.shiftKey == true && keypressed == '80'){
        blockwidth = blockwidth + 10;
        blockheight = blockwidth;
        console.log("Shift + p");
        document.getElementById("currentwidth").innerHTML = blockwidth;
        document.getElementById("currentheight").innerHTML = blockheight;
    }

    if(e.shiftKey == true && keypressed == '77'){
        blockwidth = blockwidth - 10;
        blockheight = blockwidth;
        console.log("Shift + m");
        document.getElementById("currentwidth").innerHTML = blockwidth;
        document.getElementById("currentheight").innerHTML = blockheight;
    }

    if(keypressed == "38"){
        up();
        console.log("up");
    }

    if(keypressed == "40"){
        down();
        console.log("down");
    }

    if(keypressed == "37"){
        left();
        console.log("left")
    }

    if(keypressed == "39"){
        right();
        console.log("right");
    }

    if(keypressed == "66"){
        newImage("brick.jpg");
        console.log("brick / b");
    }
    
    if(keypressed == "75"){
        newImage("dark_green.png");
        console.log("grass? / k");
    }
    
    if(keypressed == "76"){
        newImage("glowstone.png");
        console.log("glowstone / l");
    }
    
    if(keypressed == "71"){
        newImage("grass_block.png");
        console.log("grass block / g");
    }
    
    if(keypressed == "90"){
        newImage("grass.png");
        console.log("grass top / z");
    }
    
    if(keypressed == "78"){
        newImage("netherrack.jpg");
        console.log("netherrack / n");
    }
    
    if(keypressed == "89"){
        newImage("no_clue.png");
        console.log("yellow brick? / y");
    }
    
    if(keypressed == "79"){
        newImage("oak_log.jpg");
        console.log("oak log / o");
    }
    
    if(keypressed == "83"){
        newImage("stone.jpg");
        console.log("stone / s");
    }

    if(keypressed == "69"){
        newImage("glass.png");
        console.log("glass / e");
    }

    if(keypressed == "68"){
        newImage("diamond.jpg");
        console.log("diamond / d");
    }
    
    if(keypressed == "82"){
        newImage("gold.jpg");
        console.log("gold / r");
    }
    
    if(keypressed == "73"){
        newImage("iron.jpg");
        console.log("iron / i");
    }
    
    if(keypressed == "72"){
        newImage("leaves.jpg");
        console.log("leaves / h");
    }
    
    if(keypressed == "84"){
        newImage("tnt.jpg");
        console.log("tnt / t");
    }
    
    if(keypressed == "70"){
        newImage("plank.jpg");
        console.log("plank / f");
    }

    if(keypressed == "74"){
        newImage("dirt.jpg")
        console.log("dirt / j")
    }
}

function up(){
    if(playery >= -50){
        playery = playery - blockheight;
        console.log("x position = " + playerx + ", y position = " + playery);
        console.log("blockheight and blockwidth = " + blockwidth);
        canvas.remove(playerobject);
        playerUpdate()
    }
}

function down(){
    if(playery <= 550){
        playery = playery + blockheight;
        console.log("x position = " + playerx + ", y position = " + playery);
        console.log("blockheight and blockwidth = " + blockwidth);
        canvas.remove(playerobject);
        playerUpdate()
    }
}

function left(){
    if(playerx >= -50){
        playerx = playerx - blockheight;
        console.log("x position = " + playerx + ", y position = " + playery);
        console.log("blockheight and blockwidth = " + blockwidth);
        canvas.remove(playerobject);
        playerUpdate()
    }
}

function right(){
    if(playerx <= 950){
        playerx = playerx + blockheight;
        console.log("x position = " + playerx + ", y position = " + playery);
        console.log("blockheight and blockwidth = " + blockwidth);
        canvas.remove(playerobject);
        playerUpdate()
    }
}