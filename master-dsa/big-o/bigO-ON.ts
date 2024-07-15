const colorName1: string[] = ["red"];
const everyColors1: string[] = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "violet",
  "purple",
  "pink",
  "brown",
  "black",
  "white",
  "gray",
  "cyan",
  "magenta",
];

const big: string[] = new Array(10000).fill("red");

function color(colors: string[]) {
  // Loop through each element in the array
  for (let c = 0; c < colors.length; c++) {
    // Check if the current color name is "red"
    if (colors[c] === "red") {
      //
      // If "red", log a message indicating it was found
      console.log(`Found color name ${colors[c]}`);
    }
  }
  const endTimer = performance.now();
}

// color(colorName1); // O(1) (constant time complexity).
color(everyColors1); // O(n) (Linear time complexity)
color(big); // O(n) (Linear time complexity)

/*
Explanation:

Constant Time (O(1)): When an array always has the same number of elements (like colorName1 with 1 element), 
the function runs in constant time. It does a fixed number of operations no matter the array's size.
----------------
Linear Time (O(n)): When the array size grows (like everyColors1 and big), the function takes longer as the
array gets bigger. It does one operation for each element. O(n).
*/
