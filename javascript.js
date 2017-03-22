let boy= document.querySelector("#boy")
let jumping= document.querySelector("#jumping");
let moving= document.querySelector("#moving");

console.log("Ready to demonstrate");

jumping.addEventListener(`click`,jump);

function jump(){
    console.log("jump");
    boy.classList.add("jumpingboy");

}



moving.addEventListener(`click`,move);
function move (){
    console.log("move");
    boy.classList.add("movingboy");

}

moveto.addEventListener('click',moveto30);
function moveto30(){
    console.log("moveto30");
    boy.classList.add("movingboyTo");

}

movefrom.addEventListener('click',movefrom30);
function movefrom30(){
    console.log("movefrom30");
    boy.classList.add("movingboyFrom");
}

onejump.addEventListener(`click`,onejumpz);
function onejumpz (){
    console.log("onejumpz");
    boy.classList.add("onejump");
}


fadeinout.addEventListener(`click`,fadein);
function fadein (){
    console.log("fadein");
    boy.classList.add("fading");
}

glow.addEventListener(`click`,glowing);
function glowing (){
    console.log("glowing");
    boy.classList.add("glowingboy");
}

fallingdown.addEventListener(`click`,falling);
function falling (){
    console.log("falling");
    boy.classList.add("fallingboy");

}

shake.addEventListener(`click`,shaking);
function shaking (){
    console.log("shaking");
    boy.classList.add("shakingboy");

}

roling.addEventListener(`click`,rolingout);
function rolingout (){
    console.log("rolingout");
    boy.classList.add("rollingboy");

}
