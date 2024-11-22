function insertion(array) {
  // Start from the second element (index 1), and iterate through each unsorted element
  for (let index = 1; index < array.length; index++) {
    // Store the current element to be inserted
    let currentElement = array[index];
    // position will point to the last index of the sorted portion
    let position = index;
    // Compare the current element with the previous elements
    while (position > 0 && array[position - 1] > currentElement) {
      // If the current element is smaller than the previous element, shift the previous element to the right
      array[position] = array[position - 1];
      // Move to the previous element
      position = position - 1;
    }
    // Insert the current element at the correct position
    array[position] = currentElement;
  }
  return array;
}

const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
const sortedArray = insertion(unsortedArray);
console.log(sortedArray);
