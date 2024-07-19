function printArray(arr: any[]): void {
    for (let i = 0; i < arr.length; i++) {
        console.log("Hello");
    }
}

printArray([1, 2, 3]); // Space complexity of O(1)


function printArray1(arr: any[]): any[] {
    let nameArr: any[] = [];
    for (let i = 0; i < arr.length; i++) {
        nameArr[i] = 'John'; 
    }
    return nameArr;
}

const result = printArray1([1, 2, 3, 4, 5]);
console.log(result); // Space complexity of O(n), where n is the number of elements in the input array arr.