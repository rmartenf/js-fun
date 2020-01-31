# JS-Basics

Contains data structures, controls, etc.

## Comments

Two was to create inline comments in the code, always add comments
```
// this is a comment, it's only on one line

/**
    This is a multi-line comment
    it can span as many lines as 
    needed.
**/
```
## Data structures

Variables, remember JS is considered a loosely typed languages which means variables can hold different types of data (strings, numbers, booleans, arrays, maps, etc)

Simple declaration using var. This is the old school way of declaring and assigning a variable.

```
var name = 'john'
```

The "new" JS was to do that is with the 'let' keyword.  Variables created this way can be mutated.  For example: 
```
let name = 'john'
name = 'joe'
```

name was originally set to 'john' and then set to 'joe'.

You can create constants which cannot be mutated using the keyword 'const'.  If you try to update const you'll get an error
```
const domain = 'google.com'
```

## Arrays

Arrays are basic data structures which contain values addressable by index.  They are created using let/const.

```
let todo = ['clean house', 'pay bills', 'walk dog']
```

In this example todo[0] is equal to 'clean house'

You can walk over lists (i.e., iterate) in a couple of different ways:

The traditional for loop
```
let family = ['dad', 'mom', 'lizzie', 'ryan']
for (let i = 0; i < family.length; i++) {
    console.log(family[i])
}        
```

Another way is the 'forEach'

```
family.forEach(function(member){
    console.log(memeber)
})
```

There are different operations that can be done to Arrays, pop, push, shift and unshift.

* pop: will remove the last element of the array and return that value
* push: will add an element to the end of the array
* shift: will remove the first element of the array and return that value
* unshift: will add a value as the first element of the array 

```
let list = [1,2,3,4]
let v = list.pop() 

//list is now 1,2,3
//v is 4
```

```
let list = [1,2,3,4]
let v = list.push(5) 

//list is now 1,2,3,4,5
//v is 5
```

```
let list = [1,2,3,4]
let v = list.shift() 

//list is now 2,3,4
//v is 1
```

```
let list = [1,2,3,4]
let v = list.unshift(0) 

//list is now 0,1,2,3,4
//v is 0
```

## Objects / Maps

In JavaScript objects and maps are very similar, generally they are simply key / value pairs, like a dictionary.  Again use let/const to declare them.

```
let familyMember = {
    name: 'dad',
    gender: 'male',
    age: 40
}
```

There are a couple of different ways to work with Objects.  You can reference their attributes this way.

```
familyMember.name // which would be 'dad'

//or 

familyMember['name'] // which is still 'dad', use this format when they key has weird characters in it like a space, or if it's a variable.

```

Walking Objects, there are two ways, by keys or by values. 

```
    Object.keys(familyMember).forEach(function(key){
        console.log(key, familyMember[key])
    })
```

```
    Object.values(familyMember).forEach(function(value){
        console.log(value)
    })
```

Creating more complex data structures you can combine arrays and objects to create more interesting representations or real world things.


```
let car1 = {
    make: 'honda',
    model: 'civic',
    passengers: '5',
    mpg: '27'
}
let car2 = {
    make: 'tesla',
    model: 'model y',
    passengers: '5',
    mpg: '99'
}
let car3 = {
    make: 'corvette',
    model: 'c8',
    passengers: '2',
    mpg: '19'
}

let fleet = [car1, car2, car3]

fleet.forEach(function(car){
    console.log(car.mpg)
})

// Returns... 
// 27
// 99
// 19
```


## Functions

Functions are the way to encapsulate functionality for reuse or to keep your code clean.  In javascript functions are first class citizens meaning that they can be treated just like any other variable.

Simple function takes two arguments (a and b), returns their sum

```
function add(a,b){
    return a+b
}

let sum = add(1,1)

//sum is 2
```

You can also assign the function it self to a variable. In this example this is actually an unnamed function which is assigned to a variable.

```
var add = function(a,b){
    return a+b
}

let sum = add(1,1)

//sum is 2
```

## Async nature of JS

The code you write JavaScript run on a single thread, which means if you are doing something that takes a long them the entire program stops until the operation completes and then the program resumes. That would be really bad for the UX of web application so JavaScript uses a lot of asynchronous methods to make JS responsive. Async operations take a function as input, do the slow expensive operation and then when done call the function. These functions are usually referred to as callback functions.

Simple Async example
```
console.log('here 1')

setTimeout(function(){
    console.log('here 2')
}, 1000)

console.log('here 3')
```

setTimeout is a timing function which delays execution and uses callbacks (it takes time in milliseconds as in put, in this case 1000).  This time out is an example of something that takes a long time, this could be a service call, db call, long running calculation, etc. 

If this were a Synchronous operation you would expect the following

```
here 1
// a 1 second delay
here 2
here 3
```

But because this is an Asynchronous function you get this
```
here 1
here 3
// a 1 second delay
here 2
```

The function which we passed to setTimeout is an anonymous function and could have been passed in as a variable.

```
let callback = function(){
    console.log('here 2')
}

setTimeout(callback, 1000)
```

Anonymous functions are very common in apps, so new versions of Javascript created a shorthand way of expressing them using an arrow operator. 

```
let callback = () => console.log('here 2')

setTimeout(callback, 1000)
```


## How do you run all this stuff?

JavaScript is the most popular language in the world and literally runs on everything, browsers, workstation operating systems, embedded systems, mainframes, etc.  To run JS on your computer you can use your browser's developer tools or you can to the terminal and type node.  This initialize an interactive javascript prompt known as REPL (read evaluate print loop). 