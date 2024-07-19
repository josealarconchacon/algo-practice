class SampleArray {
  // Internal storage for array elements, using an object for simplicity
  private data: any = {};
  // Keeps track of the number of elements in the array
  private _length: number = 0;

  constructor() {}

  // get the element at a specific index
  getIndex(index: number): any | undefined {
    // Return the element at the specified index, or undefined if it does not exist
    return this.data[index];
  }

  // add an element to the end of the array
  push(item: any): void {
    // Add the item at the end of the array (index = _length)
    this.data[this._length] = item;
    // Increment the length of the array
    this._length++;
  }

  // remove the last element from the array
  pop() {
    // Get the last item
    const lastItem = this.data[this._length - 1];
    // Delete the last item from the internal storage
    delete this.data[this._length - 1];
    // Decrement the length of the array
    this._length--;
  }

  // remove an element at a specific index
  delete(index: number): any {
    // Get the item at the specified index
    const item = this.data[index];
    // Shift elements to fill the gap left by the deleted item
    this.shiftItem(index);
    // Return the removed item
    return item;
  }

  // Method to shift elements to the left starting from a specific index
  shiftItem(index: number): any {
    // Loop through elements starting from the given index to the second-to-last index
    for (let i = index; i < this._length - 1; i++) {
      // Move each element one position to the left
      this.data[i] = this.data[i + 1];
    }
    // Delete the now-unused last item
    delete this.data[this._length - 1];
    // Decrement the length of the array
    this._length--;
  }
}

const sampleArray = new SampleArray();
sampleArray.push(1);
sampleArray.push(2);
sampleArray.push(3);
// sampleArray.pop();
sampleArray.delete(1);
sampleArray.push("Hello");
sampleArray.push("World");
sampleArray.push("!");
sampleArray.delete(4);
console.log(sampleArray);
