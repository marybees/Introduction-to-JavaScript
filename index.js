/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)
let votingAge = 20;

if (votingAge > 18) {
    console.log(true);
}

//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)
let i = 1;
i++;
if(i <= 5) {
    console.log(i);
}

//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method
let x = "1999";
console.log(Number(x));

//Task d: Write a function to multiply a*b 

function multiply(num1, num2) {
    return num1 * num2;
}

console.log(multiply(5,5));

/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

function dogYears(myAge) {
    return(myAge * 7);
}

console.log(dogYears(33));

/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

function dogFeeder (dogWeight, dogAge) {
    if (dogAge >= 1 && dogWeight <= 5) {
        return(.05 * dogWeight); 
    } else if (dogAge >= 1 && (dogWeight >= 6 && dogWeight <= 10)) {
        return(.04 * dogWeight);
    } else if (dogAge >= 1 && (dogWeight >= 11 && dogWeight <= 15)) {
        return(.03 * dogWeight);
    } else if (dogAge >= 1 && dogWeight > 15) {
        return(.02 * dogWeight);
    } else if (dogAge >= .2 && dogAge < .4) {
        return(.1 * dogWeight);
    } else if (dogAge >= .4 && dogAge < .7) {
        return(.05 * dogWeight);
    } else if (dogAge >= .7 && dogAge < 1) {
        return(.04 * dogWeight);
    }
}

console.log(dogFeeder(15, 1));

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
  
/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

function generateComputerHand(){
    let hands = {0:"rock", 1:"paper", 2:"scissors"};
    let randomIndex = Math.floor(Math.random() * 3); //a random index is either 0, 1 or 2
    let computerHand = hands[randomIndex]; //this will produce wither rock, paper or scissors
    return computerHand
}

function winner(me, computerHand) {
    if (me === computerHand) {
        return "Tied!";
    } else if (me === "rock" && computerHand === "scissors") {
        return "You won!";
    } else if (me === "paper" && computerHand === "rock") {
        return "You won!";
    } else if (me === "scissors" && computerHand === "paper") {
        return "You won!";
    } else {
        return "You lost!"; 
    }
}
   
    let computer = generateComputerHand();
    console.log(winner("scissors", computer))

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

function kilometerConverter(kilometers) {
    let miles = (kilometers / 1.609);
    return miles
}

console.log(kilometerConverter(5))

//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters

function centimeterConverter(feet) {
    let centimeters = (feet * 30.48);
    return centimeters
}

console.log(centimeterConverter(1))

/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`

function annoyingSong(num) {
    while(num >= 0) {
        let newNum = num-1
        if (num > 1) {
            console.log(num + " bottles of soda on the wall, " + num + " bottles of soda, take one down, pass it around, " + newNum + " bottles of soda on the wall.");
        } else if (num === 1) {
            console.log(num + " bottle of soda on the wall, " + num + " bottle of soda, take one down, pass it around, no bottles of soda on the wall.");
        } else {
            console.log("You're out of sodas!") } 
        num-- 
    }   
}

annoyingSong(3)

/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F

function gradeCalculator(grade) {
    if (grade >= 90 && grade <= 99) {
        return "A";
    } else if (grade >= 80 && grade <= 89) {
        return "B";
    } else if (grade >= 70 && grade <= 79) {
        return "C";
    } else if (grade >= 60 && grade <= 69) {
        return "D";
    } else if (grade <=59) {
        return "F";
    }
}

console.log(gradeCalculator(99))

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object





