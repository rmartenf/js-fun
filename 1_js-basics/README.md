# JS-Basics

Contains data structures, controls, etc.

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

There are differnet operations that can be done to Arrays, pop, push, shift and unshift.

* pop: will remove the last element of the array and return that value
* push: will add an element to the end of the array
* shift: will remove the first element of the array and return that value
* unshift: will add a value as the first element of the array 





