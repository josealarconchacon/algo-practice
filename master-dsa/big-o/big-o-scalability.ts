const colorName: string[] = ["red"];
const everyColors: string[] = [
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

const bigArray: string[] = new Array(10000).fill("red");

function color(colors: string[]) {
  // Measure the start time before executing the loop
  const startTimer = performance.now();
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
  console.log(`Time taken: ${endTimer - startTimer} ms`);
}

// color(everyColors);
color(bigArray);
