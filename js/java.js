console.log("test project");

var kleuren = ["img/klantVerf.png", "img/klantVerf1.png", "img/klantVerf2.png", "img/klantVerf3.png"];


//de array for de Math.random en de variabelen voor de kleuren

var home = document.querySelector(".home");
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

function begin(){
    home.classList.add('hide');
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
        droogTxt.classList.add('strike')
    }
    else if (knip == 'nee' && nat == 'nee'){
        girl.src = "img/klantBeginF.png"
    }
    else if (knip == 'nee'){
        girl.src = "img/klantnatf.png"
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

    todo.textContent = "Wow wat ziet ze er leuk uit! Super bedankt voor het spelen :)"
    droogImg.classList.add('hide');
    knipImg.classList.add('hide');
    natImg.classList.add('hide');
    verfImg.classList.add('hide');
    knopKlaar.classList.add('hide');

    if (girl.src.match("../img/klantVerf.png")){
        console.log("slayed")
        girl.src = "img/klantEind.png"
    }
    else if (girl.src.match("../img/klantVerf1.png")){
        console.log("1")
        girl.src = "img/klantEind1.png"
    }
    else if (girl.src.match("../img/klantVerf2.png")){
        console.log("2")
        girl.src = "img/klantEind2.png"
    }
    else if (girl.src.match("../img/klantVerf3.png")){
        console.log("3")
        girl.src = "img/klantEind3.png"
    }
};

// bron: https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_state_if_else2

knopKlaar.addEventListener("click", einde);

//deze functie zorgt ervoor dat het eindresultaat ook matched met de gekozen kleur,
//en dat je het eindscherm te zien krijgt

//bronnen plaatjes:
//girl = ik zelf
//fohn = https://www.clipartmax.com/middle/m2i8N4m2d3d3b1H7_hair-dryer-transparent-images-png-hair-dryer/
//schaar = https://commons.wikimedia.org/wiki/File:Scissors.png
//douche = https://www.pngkey.com/maxpic/u2t4o0o0e6i1u2u2/
//verfkwast = https://www.pngarts.com/explore/91546
//achtergrond = https://www.saltyhairsalonobx.com/