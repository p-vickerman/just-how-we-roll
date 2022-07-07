/**********
 * DATA *
 **********/

let sixes = [];
let doubleSixes = [];
let twelves = [];
let twenties = [];

/********************
 * HELPER FUNCTIONS *
********************/

const getRandomNumber = function(max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);
    return result;
}

/*******************
 * YOUR CODE BELOW *
 *******************/

/*******************
 * QUERY SELECTORS *
 *******************/

let buttond6 = document.querySelector("#d6-button")
let image_d6 = document.querySelector("#d6-roll")
let resetButton = document.querySelector("#reset-button")
let mean_d6 = document.querySelector("#d6-rolls-mean")

let buttonDoubleD6 = document.querySelector("#double-d6-buttons")
let image_DoubleD6_1 = document.querySelector("#double-d6-roll-1")
let image_DoubleD6_2 = document.querySelector("#double-d6-roll-2")
let mean_DoubleD6 = document.querySelector("#double-d6-rolls-mean")

let buttond12 = document.querySelector("#d12-button")
let image_d12 = document.querySelector("#d12-roll")
let mean_d12 = document.querySelector("#d12-rolls-mean")

let buttond20 = document.querySelector("#d20-button")
let image_d20 = document.querySelector("#d20-roll")
let mean_d20 = document.querySelector("#d20-rolls-mean")

let doubleDice = document.querySelector("#double-d6-buttons")

let medianD6 = document.querySelector("#d6-rolls-median")

/*******************
 * EVENT LISTENERS *
 *******************/
image_d6.addEventListener('click', d6RollFunction)
resetButton.addEventListener('click', resetFunction)
image_d12.addEventListener('click', d12RollFunction)
image_d20.addEventListener('click', d20RollFunction)
doubleDice.addEventListener('click', double6RollFunction)

// resetButton.addEventListener('click', function(){
//     console.log("Reset Button clicked!")

//     sixes = [];
//     doubleSixes = [];
//     twelves = [];
//     twenties = [];

//     image_d6.src = "./images/start/d6.png"

//     mean_d6.innerText = "N/A"
// })


/******************
 * RESET FUNCTION *
 ******************/
resetFunction();

 function resetFunction(){
   
    sixes = [];
    doubleSixes = [];
    twelves = [];
    twenties = [];

    image_d6.src = "./images/start/d6.png"
    image_DoubleD6_1.src = "./images/start/d6.png"
    image_DoubleD6_2.src = "./images/start/d6.png"
    image_d12.src = "./images/start/d12.jpeg"
    image_d20.src = "./images/start/d20.jpg"


    mean_d6.innerText = "N/A"
    mean_DoubleD6.innerText = "N/A"
    mean_d12.innerText = "N/A"
    mean_d20.innerText = "N/A"

    medianD6.innerText = "N/A"
}


/****************************
 * CLICK HANDLING FUNCTIONS *
****************************/
function d6RollFunction(){
    let result = getRandomNumber(6)
    console.log(result)
    let mean6 = average(sixes)
    function average(array){
        let i = 0
        let sum = 0
        let arrayLength = array.length
        while (i < arrayLength){
            sum = sum + array[i++];
        }  
        return sum / array.length
    }
    
    if(result === 1){
        image_d6.src = "./images/d6/1.png"
    } else if(result === 2){
        image_d6.src = "./images/d6/2.png"
    } else if(result === 3){
        image_d6.src = "./images/d6/3.png"
    } else if(result === 4){
        image_d6.src = "./images/d6/4.png"
    } else if(result === 5){
        image_d6.src = "./images/d6/5.png"
    } else if(result === 6){
        image_d6.src = "./images/d6/6.png"
    }

    sixes.push(result)
    console.log(sixes)
    mean_d6.innerText = (mean6)
    // medianD6.innerText = median
}

function double6RollFunction(){
    let roll1 = getRandomNumber(6)
    let roll2 = getRandomNumber(6)
    let total = roll1 + roll2
    let meanDouble6 = doubleSixes.reduce((a, b) => a + b, 0) / doubleSixes.length
    

    if(roll1 === 1){
        image_DoubleD6_1.src = "./images/d6/1.png"
    } else if(roll1 === 2){
        image_DoubleD6_1.src = "./images/d6/2.png"
    } else if(roll1 === 3){
        image_DoubleD6_1.src = "./images/d6/3.png"
    } else if(roll1 === 4){
        image_DoubleD6_1.src = "./images/d6/4.png"
    } else if(roll1 === 5){
        image_DoubleD6_1.src = "./images/d6/5.png"
    } else if(roll1 === 6){
        image_DoubleD6_1.src = "./images/d6/6.png"
    }
    if(roll2 === 1){
        image_DoubleD6_2.src = "./images/d6/1.png"
    } else if(roll2 === 2){
        image_DoubleD6_2.src = "./images/d6/2.png"
    } else if(roll2 === 3){
        image_DoubleD6_2.src = "./images/d6/3.png"
    } else if(roll2 === 4){
        image_DoubleD6_2.src = "./images/d6/4.png"
    } else if(roll2 === 5){
        image_DoubleD6_2.src = "./images/d6/5.png"
    } else if(roll2 === 6){
        image_DoubleD6_2.src = "./images/d6/6.png"
    }

    doubleSixes.push(total)
    console.log(doubleSixes)
    mean_DoubleD6.innerText = (meanDouble6)
}

function d12RollFunction(){
    let result = getRandomNumber(12)
    console.log(result)
    let mean12 = twelves.reduce((a, b) => a + b, 0) / twelves.length

    if(result === 1){
        image_d12.src = "./images/numbers/1.png"
    } else if(result === 2){
        image_d12.src = "./images/numbers/2.png"
    } else if(result === 3){
        image_d12.src = "./images/numbers/3.png"
    } else if(result === 4){
        image_d12.src = "./images/numbers/4.png"
    } else if(result === 5){
        image_d12.src = "./images/numbers/5.png"
    } else if(result === 6){
        image_d12.src = "./images/numbers/6.png"
    } else if(result === 7){
        image_d12.src = "./images/numbers/7.png"
    } else if(result === 8){
        image_d12.src = "./images/numbers/8.png"
    } else if(result === 9){
        image_d12.src = "./images/numbers/9.png"
    } else if(result === 10){
        image_d12.src = "./images/numbers/10.png"
    } else if(result === 11){
        image_d12.src = "./images/numbers/11.png"
    } else if(result === 12){
        image_d12.src = "./images/numbers/12.png"
    }

    twelves.push(result)
    console.log(twelves)
    mean_d12.innerText = (mean12)
}

function d20RollFunction(){
    let result = getRandomNumber(20)
    console.log(result)
    let mean20 = twenties.reduce((a, b) => a + b, 0) / twenties.length
    

    if(result === 1){
        image_d20.src = "./images/numbers/1.png"
    } else if(result === 2){
        image_d20.src = "./images/numbers/2.png"
    } else if(result === 3){
        image_d20.src = "./images/numbers/3.png"
    } else if(result === 4){
        image_d20.src = "./images/numbers/4.png"
    } else if(result === 5){
        image_d20.src = "./images/numbers/5.png"
    } else if(result === 6){
        image_d20.src = "./images/numbers/6.png"
    } else if(result === 7){
        image_d20.src = "./images/numbers/7.png"
    } else if(result === 8){
        image_d20.src = "./images/numbers/8.png"
    } else if(result === 9){
        image_d20.src = "./images/numbers/9.png"
    } else if(result === 10){
        image_d20.src = "./images/numbers/10.png"
    } else if(result === 11){
        image_d20.src = "./images/numbers/11.png"
    } else if(result === 12){
        image_d20.src = "./images/numbers/12.png"
    } else if(result === 13){
        image_d20.src = "./images/numbers/13.png"
    } else if(result === 14){
        image_d20.src = "./images/numbers/14.png"
    } else if(result === 15){
        image_d20.src = "./images/numbers/15.png"
    } else if(result === 16){
        image_d20.src = "./images/numbers/16.png"
    } else if(result === 17){
        image_d20.src = "./images/numbers/17.png"
    } else if(result === 18){
        image_d20.src = "./images/numbers/18.png"
    } else if(result === 19){
        image_d20.src = "./images/numbers/19.png"
    } else if(result === 20){
        image_d20.src = "./images/numbers/20.png"
    }

    twenties.push(result)
    console.log(twenties)
    mean_d20.innerText = (mean20)
}

/****************
 * MATH SECTION *
 ****************/
//  let mean6 = sixes.reduce((a, b) => a + b, 0) / mean6.length
//  let meanDoubleSix = doubleSixes.reduce((a, b) => a + b, 0) / meanDoubleSix.length
//  let mean12 = twelves.reduce((a, b) => a + b, 0) / mean12.length
//  let mean20 = twenties.reduce((a, b) => a + b, 0) / twenties.length

// function finding20sMean(mean) {
//     let total = 0;
//     for (let i = 0; i < mean.length; i++) {
//         total += mean[i]
//     }
//     total = total / mean.length;
//     console.log("mean");
//     console.log(total);

//     d20Mean.innerText = total;