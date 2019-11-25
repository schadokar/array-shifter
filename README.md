# Array Shifter  

Insert the data into a fixed array and shift the array to right or left.  
While inserting it removes the first data with respect to the shifting operation.   

## Installation  
```
npm install array-shifter --save
```

## Methods   

#### arrayLength   
Returns the length of the fixed array length.  

#### arr  
Returns the array.  

#### shiftRight(data)  
Shift array to right. Whenever a data is inserted in the array,  
it will move the array to right and remove the first in data in the array,  
while keeping the array of fixed length  

#### shiftLeft(data)  
Shift array to left. Whenever a data is inserted in the array  
it will move the array to left and remove the first in data in the array,  
while keeping the array of fixed length
 
## Example   
```
const ArrayShifter = require("array-shifter");  

// Create a dummy array
const arr = [1, 2, 3, 4, 5, 6, 7, 8];  

// create an object of the arrayshifter  
// initialize the arrayshifter with 5. 5 is the length of the fixed array.  
// The array will always of length 5  

const shiftR = new ArrayShifter(5);

arr.forEach(e => {  
  // push the data into the array  
  shiftR.shiftRight(e);  
  // print the array  
  console.log(shiftR)  
});  

/*
Output  
  ArrayShifter { arrayLength: 5, arr: [ 1 ] }
  ArrayShifter { arrayLength: 5, arr: [ 2, 1 ] }
  ArrayShifter { arrayLength: 5, arr: [ 3, 2, 1 ] }
  ArrayShifter { arrayLength: 5, arr: [ 4, 3, 2, 1 ] }
  ArrayShifter { arrayLength: 5, arr: [ 5, 4, 3, 2, 1 ] }
  ArrayShifter { arrayLength: 5, arr: [ 6, 5, 4, 3, 2 ] }
  ArrayShifter { arrayLength: 5, arr: [ 7, 6, 5, 4, 3 ] }
  ArrayShifter { arrayLength: 5, arr: [ 8, 7, 6, 5, 4 ] }
 */

const shiftL = new ArrayShifter(5);

arr.forEach(e => {
  // push the data into the array  
  shiftL.shiftRight(e);  
  // print the array  
  console.log(shiftL)  
});

/*  
Output  
  ArrayShifter { arrayLength: 5, arr: [ 1 ] }
  ArrayShifter { arrayLength: 5, arr: [ 1, 2 ] }
  ArrayShifter { arrayLength: 5, arr: [ 1, 2, 3 ] }
  ArrayShifter { arrayLength: 5, arr: [ 1, 2, 3, 4 ] }
  ArrayShifter { arrayLength: 5, arr: [ 1, 2, 3, 4, 5 ] }
  ArrayShifter { arrayLength: 5, arr: [ 2, 3, 4, 5, 6 ] }
  ArrayShifter { arrayLength: 5, arr: [ 3, 4, 5, 6, 7 ] }
  ArrayShifter { arrayLength: 5, arr: [ 4, 5, 6, 7, 8 ] }
*/  

// print the array length and content
console.log(shift.arrayLength);
console.log(shift.arr);

```
