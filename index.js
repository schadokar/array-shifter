class ArrayShifter {
  // create an empty pre-defined length of array
  constructor(len) {
    this.arrayLength = len;
    this.arr = [];
  }

  // shift array to right
  // whenever a data is inserted in the array
  // it will move the array to right and remove the first in data
  // while keeping the array of fixed length
  shiftRight(data) {
    this.arr.unshift(data);

    if (this.arrayLength < this.arr.length) {
      this.arr.pop();
    }
  }

  // shift array to left
  // whenever a data is inserted in the array
  // it will move the array to left and remove the first in data
  // while keeping the array of fixed length
  shiftLeft(data) {
    this.arr.push(data);

    if (this.arrayLength < this.arr.length) {
      this.arr.shift();
    }
  }
}

module.exports = ArrayShifter;
