
// users can see how many of each resource they have
// users can see the amount a modification provides

let globalStarCount = 1000
let starImage = 'https://66.media.tumblr.com/tumblr_ma10sbRx8L1rfjowdo1_500.gif'
let modifier = 0
let totalMultiplier = 1
let collectionInterval = 1000

let autoStars = {
    buyAuto:{
        price: 1000,
        quantity: 0,
        multiplier: 100,
    }
}

let clickUpgrades = {
    redStar:{
        price: 50,
        quantity:0,
        multiplier: 2,
    },
    blueStar:{
        price: 200,
        quantity: 0,
        multiplier: 5,
    },
    yellowStar:{
        price: 600,
        quantity: 0,
        multiplier: 20,
    },
    superStar:{
        price: 1000,
        quantity: 0,
        multiplier: 50,
    }
};


function draw(){
document.getElementById("star-number").innerText = globalStarCount.toString()
// RED STAR Price & Multipler
document.getElementById("redStarPrice").innerText = "Star Price: " + clickUpgrades.redStar.price.toString() + " Stars"
document.getElementById("redStarMultiplier").innerText = "+" + clickUpgrades.redStar.multiplier.toString() + " Stars/Click"
// BLUE STAR Price & Multiplier
document.getElementById("blueStarPrice").innerText = "Star Price: " + clickUpgrades.blueStar.price.toString() + " Stars"
document.getElementById("blueStarMultiplier").innerText = "+" + clickUpgrades.blueStar.multiplier.toString() + " Stars/Click"
// YELLOW STAR Price & Multiplier
document.getElementById("yellowStarPrice").innerText = "Star Price: " + clickUpgrades.yellowStar.price.toString() + " Stars"
document.getElementById("yellowStarMultiplier").innerText = "+" + clickUpgrades.yellowStar.multiplier.toString() + " Stars/Click"
// SUPER STAR Price and Multiplier
document.getElementById("superStarPrice").innerText = "Star Price: " + clickUpgrades.superStar.price.toString() + " Stars"
document.getElementById("superStarMultiplier").innerText = "+" + clickUpgrades.superStar.multiplier.toString() + " Stars/Click"
// AUTOMATIC STARS
document.getElementById("autoStars").innerHTML = autoStars.buyAuto.quantity

}


function starClick(){
    globalStarCount += totalMultiplier

    draw()
}

function buyRedStar(){
   if (clickUpgrades.redStar.price <= globalStarCount){
   globalStarCount -= clickUpgrades.redStar.price
   clickUpgrades.redStar.price = clickUpgrades.redStar.price + clickUpgrades.redStar.multiplier *10
   totalMultiplier = clickUpgrades.redStar.multiplier +=2
   

}
draw()
}

function buyBlueStar(){
    if (clickUpgrades.blueStar.price <= globalStarCount){
        // decreases star count to price
        globalStarCount -= clickUpgrades.blueStar.price
        // price is increased by modifier*100
   clickUpgrades.blueStar.price = clickUpgrades.blueStar.price + clickUpgrades.blueStar.multiplier *100
        //Quantity is added each time purchased by the multiplier   
        totalMultiplier = clickUpgrades.blueStar.multiplier +=5
  
    }
    draw()
}

function buyYellowStar(){
    if (clickUpgrades.yellowStar.price <= globalStarCount){
        globalStarCount -= clickUpgrades.yellowStar.price
   clickUpgrades.yellowStar.price = clickUpgrades.yellowStar.price + clickUpgrades.yellowStar.multiplier *2
   totalMultiplier = clickUpgrades.yellowStar.multiplier +=20
    }
    draw()
}

function buySuperStar(){
    if (clickUpgrades.superStar.price <= globalStarCount){
        globalStarCount -= clickUpgrades.superStar.price
   clickUpgrades.superStar.price = clickUpgrades.superStar.price + clickUpgrades.superStar.multiplier *2
   totalMultiplier = clickUpgrades.superStar.multiplier +=50
}
    draw()
}

// item quantity * item multiplier 
// // then add to total resource collection
// function automatedStars(){
//     if (autoStars.buyAuto.price <= globalStarCount){
//     globalStarCount -= autoStars.buyAuto.price
//     autoStars.buyAuto.price = autoStars.buyAuto.price + autoStars.buyAuto.multiplier *1000
//     globalStarCount += autoStars.buyAuto.quantity * autoStars.buyAuto.multiplier
// }
//     draw()
// }
function buyAuto(){
    autoStars.buyAuto.quantity++
    draw()
}

function automatedStars(){
    globalStarCount += autoStars.buyAuto.quantity * autoStars.buyAuto.multiplier
    draw()
}

    function startInterval() {
        // collectAutoUpgrades is the function for auto upgrades
        // Need interval to add automated stars every 3 seconds
        collectionInterval = setInterval(automatedStars, 3000);
        
      }

startInterval()
draw()

