const colors: string[] = ["red", "green", "blue", "yellow"]; // 4*4 = 16 bytes of storage

// push
colors.push("purple"); // O(1)

// pop
colors.pop();
colors.pop(); // O(1)

// unshift
colors.unshift("orange"); // O(n)

// splice: add element to the middle of the array
colors.splice(2, 0, "pink"); // O(n)

console.log(colors);
