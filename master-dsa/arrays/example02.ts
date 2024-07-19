class SampleArray {
  private data: any = {};
  private _length: number = 0;

  constructor() {}

  getIndex(index: number): any | undefined {
    return this.data[index];
  }

  push(item: any): void {
    this.data[this._length] = item;
    this._length++;
  }

  pop() {
    const latItem = this.data[this._length - 1];
    delete this.data[this._length - 1];
    this._length--;
  }

  delete(index: number): any {
    const item = this.data[index];
    this.shiftItem(index);
    return item;
  }

  shiftItem(index: number): any {
    for (let i = index; i < this._length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this._length - 1];
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
