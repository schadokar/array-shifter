declare module 'array-shifter' {
  export default class ArrayShifter {
    /**
     * Create an empty pre-defined length of array.
     */
    constructor(length: number);

    /**
     * Shift array to right whenever a data is inserted in the array -- it will move the array to right and remove the first in data while keeping the array of fixed length.
     */
    shiftRight<T>(data: T): void;

    /**
     * Shift array to left whenever a data is inserted in the array -- it will move the array to left and remove the first in data while keeping the array of fixed length.
     */
    shiftLeft<T>(data: T): void;
  }
}