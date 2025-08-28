import theArray from "./RandomArray";

export default function SelectionSort() {
  function SelectionSortAlgorithm(array) {
    // For every element in the array... (- 1 since the last element will be sorted already)
    for (let i = 0; i < array.length - 1; i++) {
      let min_index = i;

      // ... look through every element starting from i + 1 and change min_index to current index
      // if min_index is bigger than current index
      for (let j = i + 1; j < array.length; j++) {
        if (array[min_index] > array[j]) {
          min_index = j;
        }
      }
      // Deconstructing, meaning array[i] gets assigned array[min_index] and vice versa, resulting in a swap
      [array[i], array[min_index]] = [array[min_index], array[i]];
    }
    return array;
  }

  return console.log(SelectionSortAlgorithm(theArray));
}
