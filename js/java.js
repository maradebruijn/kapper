console.log("test project");


var kleuren = ["img/klantVerf.png", "img/klantVerf1.png", "img/klantVerf2.png", "img/klantVerf3.png"];
//de array for de Math.random van de haarkleuren

var girl2 = document.querySelector(".girl2");
var tekst = document.querySelector(".tekst");
var knop = document.querySelector(".help");
var knopKlaar = document.querySelector(".klaar");
//het begin scherm + knoppen

var girl = document.querySelector(".girl");

var droogImg = document.querySelector(".hairdryer");
var knipImg = document.querySelector(".schaar");
var natImg = document.querySelector(".douche");
var verfImg = document.querySelector(".kwast");
//de images

var todo = document.querySelector(".todo");
var natTxt = document.querySelector(".was");
var knipTxt = document.querySelector(".knip");
var droogTxt = document.querySelector(".droog");
var verfTxt = document.querySelector(".verf");
//de to do lijst

var nat = 'nee'
var droog ='nee'
var knip ='nee'
var verf = 'nee'
//zodat ik een volgorde kan toepassen

var natAu = new Audio("audio/douchegeluid.wav");
var droogAu = new Audio("audio/fohngeluid.wav");
var knipAu = new Audio("audio/schaargeluid.wav");
var verfAu = new Audio("audio/verfgeluid.wav");
//de soundeffects

function begin(){
    knop.classList.add('hide');
    girl2.classList.add('hide');
    girl.classList.remove('hide');
    todo.classList.remove('hide');
    droogImg.classList.remove('hide');
    knipImg.classList.remove('hide');
    natImg.classList.remove('hide');
    verfImg.classList.remove('hide');
}

knop.addEventListener("click", begin);

//deze functie zorgt ervoor dat dingen verdwijnen en verschijnen, dmv de class .hide

function haarNat(parameter){
    console.log(nat)

    if (nat == 'nee'){
        girl.src = "img/klantNat.png"
        natAu.play();    
        natTxt.classList.add('strike');
        }
    
    nat ='ja'
    };

natImg.addEventListener("click", haarNat);

function haarKort(parameter){
    console.log(knip)

    if (nat == 'ja' && knip == 'nee'){
        girl.src = "img/klantGeknipt.png"
        knip ='ja'
        knipAu.play();    
        knipTxt.classList.add('strike')
    }
    else if(nat == 'nee'){
        girl.src = "img/klantBeginF.png"
    }

    };

knipImg.addEventListener("click", haarKort);


function haarDroog(parameter){
    console.log(droog)

    if (knip == 'ja' && droog == 'nee'){
        girl.src = "img/klantDroog.png"
        droog ='ja'
        droogAu.play();    
        droogTxt.classList.add('strike')
    }
    else if (knip == 'nee' && nat == 'nee'){
        girl.src = "img/klantBeginF.png"
    }
    else if (knip == 'nee'){
        girl.src = "img/klantNatf.png"
    }
    
};

droogImg.addEventListener("click", haarDroog);

//al deze functies zorgen ervoor dat de plaatjes in een bepaalde volgorde aangepast
//worden, en dat je ze niet terug kunt veranderen

function haarVerf(parameter){
    console.log(verf)

    if (droog == 'ja'){
        verfTxt.classList.add('strike');
        knopKlaar.classList.remove('hide');
        var randomKleur = Math.random()*4;
        randomKleur = Math.floor(randomKleur);
        girl.src = kleuren[randomKleur];
        verfAu.play();    
        verf = 'ja'
    }
    else if (nat == 'nee'){
        girl.src = "img/klantBeginF.png"
    }
    else if (knip == 'nee'){
        girl.src = "img/klantnatf.png"
    }
    else if (droog == 'nee'){
        girl.src = "img/klantGekniptf.png"
    }

    
};

verfImg.addEventListener("click", haarVerf);

//hetzelfde als de andere functies + een math.random om een random haarkleur te kiezen

function einde(parameter){

    todo.classList.add('hide');
    droogImg.classList.add('hide');
    knipImg.classList.add('hide');
    natImg.classList.add('hide');
    verfImg.classList.add('hide');
    knopKlaar.classList.add('hide');
    girl.classList.add('hide');
    girl2.classList.remove('hide');
    tekst.classList.remove('hide');

    if (girl.src.match("../img/klantVerf.png")){
        console.log("slayed")
        girl2.src = "img/klantEind.png"
    }
    else if (girl.src.match("../img/klantVerf1.png")){
        console.log("1")
        girl2.src = "img/klantEind1.png"
    }
    else if (girl.src.match("../img/klantVerf2.png")){
        console.log("2")
        girl2.src = "img/klantEind2.png"
    }
    else if (girl.src.match("../img/klantVerf3.png")){
        console.log("3")
        girl2.src = "img/klantEind3.png"
    }
};

// bron: https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_state_if_else2

knopKlaar.addEventListener("click", einde);

//deze functie zorgt ervoor dat het eindresultaat ook matched met de gekozen kleur,
//en dat je het eindscherm te zien krijgt

function reset(){
    girl2.src = "img/klantBegin.png"
    girl.src = "img/klantStart.png"
    tekst.classList.add('hide');
    knop.classList.remove('hide');
    nat = 'nee'
    droog ='nee'
    knip ='nee'
    verf = 'nee'
}

tekst.addEventListener("click", reset);

//deze functie stuurt je terug naar het beginscherm

//bronnen plaatjes:
//girl = ik zelf
//fohn = https://www.clipartmax.com/middle/m2i8N4m2d3d3b1H7_hair-dryer-transparent-images-png-hair-dryer/
//schaar = https://commons.wikimedia.org/wiki/File:Scissors.png
//douche = https://www.pngkey.com/maxpic/u2t4o0o0e6i1u2u2/
//verfkwast = https://www.pngarts.com/explore/91546
//achtergrond = https://www.saltyhairsalonobx.com/

//bronnen audio
//douche = https://freesound.org/people/Rickplayer/sounds/530780/
//fohn = https://freesound.org/people/mariadrrs/sounds/431397/
//schaar = https://freesound.org/people/Breviceps/sounds/445965/
//kwast = https://freesound.org/people/tgerginov/sounds/671175/
//instructies = https://www.w3schools.com/html/html5_audio.asp
