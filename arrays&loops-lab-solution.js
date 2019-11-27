// Write a for loop that will log the numbers 1 through 20.
for (let i = 0 ; i <= 20 ; i++)
{
  console.log( i );
}

// Write a for loop that will log only the even numbers in 0 through 200.
for (let i = 0 ; i <= 200 ; i +=2)
{
  console.log( i );
}


// Use the following arrays to answer the questions below (name,species ,age, hometown): You should be modifying the elements by accessing them. It is up to you which methods to use.

const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
const sharky = ["Sharky", "shark", 20, "Left Coast"];
const plantee = ["Plantee", "plant",  5000 , "Mordor"];
const porgee = ["Porgee", "Porg", 186, "Ahch-To"];
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"];

// Plantee just had her birthday; change Plantee's array to reflect her being a year older.
plantee[2] += 1 ;
console.log (plantee);
// Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
wolfy.pop();
wolfy.push("Gotham City");
console.log(wolfy);
// Give D'Art a second hometown by adding "Hawkins"
dart.push("Hawkins");
console.log(dart);
// Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfy array and replace it with "Gameboy".
wolfy.splice(0,1,"Gameboy");
console.log(wolfy);



// Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)

// Use a for of loop (not a typo - try it out! Try a for of loop) to call toUpperCase() on each of them and print out the result.

const ninja = ["Donatello","Leonardo","Raphael","Michaelangelo"];

for (const member of ninja)
  {
    console.log (member.toUpperCase());
     }



const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

//Console log: the index of Titanic

console.log (favMovies.indexOf("Titanic"));

//use the .sort 
favMovies.sort();

//Use the method pop
favMovies.pop();

//push "Guardians of the Galaxy"
favMovies.push("Guardians of the Galaxy");

//Reverse the array
favMovies.reverse();

//Use the shift method
favMovies.shift();

//Unshift
console.log (favMovies.unshift("I am Sam"));

//splice "Django Unchained" and add "Avatar"
let index = favMovies.indexOf("Django Unchained");
favMovies.splice(index,1,"Avatar");

//slice the last half of the array (challenge yourself and try to programatically determine the middle of the array rather than counting it and hard coding it)
let lastHalf = [];
let length = favMovies.length;
lastHalf = favMovies.slice (Math.floor(length / 2),length +1); 

//store the value of your slice in a variable, console.log it -
console.log (lastHalf);

//console.log your final results
console.log (favMovies);

//You can change the elements of a constant array
//But you can NOT reassign a constant array
//When you're adding to an array or object you're not re-assigning or re-declaring the constant, it's already declared and assigned, you're just adding to the "list" that the constant points to


const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];

console.log (whereIsWaldo[0]);//[ 'Timmy', 'Frank' ]
console.log (whereIsWaldo[1]);//Eggbert
console.log (whereIsWaldo[2]);//[ 'Lucinda', 'Jacc', 'Neff', 'Snoop' ]
console.log (whereIsWaldo[3]);//[ 'Petunia', [ 'Baked Goods', 'Waldo' ] ]

//Remove Eggbert (hint look at the slice/splice method(s))
whereIsWaldo.splice(whereIsWaldo.indexOf("Eggbert"),1);

// Change "Neff" to "No One"
whereIsWaldo[1][2] = "No One";

//Access and console.log "Waldo"
console.log (whereIsWaldo[2][1][1]);







// Write code that logs "Love me, pet me! HSSSSSS!" 20 times.

// For every even number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random.

const  kittyTalk = ["...human...why you taking pictures of me?...","...the catnip made me do it...","...why does the red dot always get away..." ];
let meow = 0 ;
for (let i =0 ; i <= 20 ; i++)
{
  if (i % 2 == 0){
    meow =  Math.floor(Math.random() * 3) ;
    console.log (kittyTalk[meow]);
    }
    else 
        console.log ( "Love me, pet me! HSSSSSS!");

}



// Find the median number in the following nums array, then console.log that number.

const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];

//The median is the middle number in a sorted, ascending or descending, list of numbers and can be more descriptive of that data set than the average.

let calculateMedian = function (arr){
        arr.sort();
        let median = 0;
        let length = arr.length;
        if (length % 2 != 0 )
        median = arr[Math.floor(length / 2)]
        else 
        median = (arr[length/2]+arr[(length/2)-1]) / 2
      return median;  
      }

console.log (calculateMedian(nums))




const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];

//Kristyn's left shoe has traveled through time and space and turned up in Thom's accessories drawer! Remove Kristyn's shoe from the array and save it to the variable kristynsShoe. Use that variable to add Kristyn's lost shoe to Thom's accessories array.

let kristynsShoe = kristynsCloset.shift();
thomsCloset[2].push (kristynsShoe);

//Modify your code to put together 3 separate outfits for Kristyn and Thom. Put the output in a sentence to tell us what we'll be wearing. Mix and match!

let kristynOutfit = []
let thomOutfit = []

for (let i=0; i<3; i++) {
    let kristyRandom = Math.floor (Math.random()*6)
    kristynOutfit.push(kristynsCloset[kristyRandom]) 
}

for (let i=0; i<3; i++) {
    let thomsRandom = Math.floor(Math.random()*thomsCloset[i].length)
    thomOutfit.push(thomsCloset[i][thomsRandom]) 
}

console.log(`Kristy will wear "${kristynOutfit[0]}", "${kristynOutfit[1]}", and "${kristynOutfit[2]}"`)
console.log(`Thoms will wear "${thomOutfit[0]}", "${thomOutfit[1]}", and "${thomOutfit[2]}"`)

//Time to do laundry - loop through Kristyn's closet and log the sentence "WHIRR: Now washing (item)" for each item in the array.
for (const item of kristynsCloset) {
    console.log(`WHIRR: Now washing ${item}`);
}

//Thom wants to do inventory on his closet. Using bracket notation, log the arrays containing all of Thom's shirts, pants, and accessories.
for (let i=0; i<thomsCloset.length; i++) {
        for (let x=0; x<thomsCloset[i].length; x++) {
        console.log(`Thoms have "${thomsCloset[i][x]}" in his closet`)
        }
} 







