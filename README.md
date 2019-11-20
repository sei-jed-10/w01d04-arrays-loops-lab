# Js-arrays-loops-lab

## Easy Going
1. Write a for loop that will log the numbers 1 through 20.

---
## Get Even
1. Write a for loop that will log only the even numbers in 0 through 200.
>Hint: Think about the increment expression.


---
## Wild Wild Life
Use the following arrays to answer the questions below (name,species ,age, hometown):
You should be modifying the elements by accessing them. It is up to you which methods to use. 

```js
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]
```
1. Plantee just had her birthday; change Plantee's array to reflect her being a year older.

2. Change Wolfy's hometown from "Yukon Territory" to "Gotham City".

3. Give D'Art a second hometown by adding "Hawkins"

4. Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the `wolfy` array and replace it with "Gameboy".

---

## Yell at the Ninja Turtles
1. Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)

2. Use a `for of loop` (not a typo - try it out! Try a `for of` loop) to call `toUpperCase()` on each of them and print out the result.

As a developer, you'll be a lifelong learner and constantly encountering new things. We'll give you little stretches like this to get you used to looking at documentation and figuring some things out on your own. You've got this!

---

```
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
```

- Console log:  the index of `Titanic`

- Do the following and console.log the final results (I have included some *thought* questions, you don't have to write out an answer for those marked as such):

Note: if you have to add to the array, feel free to add any movie you'd like
    
 1. use the `.sort` method Thought question: what did this do to the array? Did it permanently alter it? 
 1. Use the method `pop`
 1. `push` "Guardians of the Galaxy" 
 1. Reverse the array
 1. Use the `shift` method
 1. `unshift` - what does it return?
 1. `splice` "Django Unchained" and add "Avatar" (try finding the index of "Django Unchained", instead of counting it yourself) Thought question: did this permanently alter our array?
 1. `slice` the last half of the array (challenge yourself and try to programatically determine the middle of the array  rather than counting it and hard coding it) - Thought question: did this permanently alter our array? 
 1. store the value of your `slice` in a variable, console.log it - Thought question: what is going on here?
 1. console.log your final results

- After running the above tasks, console.log the index of "Fast and Furious" 
-We removed it from the array, what value do we get when we look for the index of something that is not in the array?

- Thought question: that we declared the variable `favMovies` with `const`, and yet, we were allowed to change the array. Weird? Should we have used `let`? 

---

## Where is Waldo

* With the following multi-dimensional array

```js
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];
```
* Remove Eggbert (hint look at the slice/splice method(s))
* Change "Neff" to "No One"
* Access and console.log "Waldo"

---
## Excited Kitten
1. Write code that logs "Love me, pet me! HSSSSSS!" 20 times.

2. For every **even** number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random.



<details><summary>Hint 1</summary>
    
 Make an array of the kitten's talking points
 
</details>

<details><summary>Hint 2</summary>
    
 Use bracket notation to access each talking point 
  `kittyTalk[1];`
  
</details>

<details><summary>Hint 3</summary>
 Rather than hard-coding the array position number set a variable
    
  ``` 
    let meow = 0; 
    kittyTalk[meow]
  ```
    
</details>

<details><summary>Hint 4</summary>
    
You will need to use Math.random() in order to choose a random number and assign this random number to the variable you created (rather than have the variable equal 0)

</details>

<details><summary>Hint 5</summary>
    
 Math.random() will return a number between 0 and 1. Array positions are integers. You will need to multiply the    Math.random() number so that the range is between 0 and the length of the array 
 
</details>

<details><summary>Hint 6</summary>
    
 Then round the number by using another Math method like `Math.floor()` or `Math.ceil()` or `Math.round()`
 
</details>

![Image of cat with funny quote about dot](https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRETGsssSXu2AS15GpQIBhuSgkhP2q_4JZcPopN4dFP-v85mAePGA)

---

## Find the Median
- Find the median number in the following `nums` array, then console.log that number.
-  _hint_ if you check the length of the array / 2, you might get not get a whole number. In which case, look into `Math.floor( // something )`

```
const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];

Expected output:
=> 15
```
---

Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript. Use this data to answer the following questions.

```javascript
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
```

### Alien Attire
1. Kristyn's left shoe has traveled through time and space and turned up in Thom's accessories drawer! Remove Kristyn's shoe from the array and save it to the variable `kristynsShoe`. Use that variable to add Kristyn's lost shoe to Thom's accessories array.

### Dress Us Up
1. Modify your code to put together **3 separate outfits** for Kristyn and Thom. Put the output in a sentence to tell us what we'll be wearing. Mix and match!



### Dirty Laundry
Continue looking at the closet arrays:
1. Time to do laundry - loop through Kristyn's closet and log the sentence "WHIRR: Now washing (item)" for each item in the array.

### Inventory
2. Thom wants to do inventory on his closet. Using **bracket notation**, log the arrays containing all of Thom's shirts, pants, and accessories.

---
