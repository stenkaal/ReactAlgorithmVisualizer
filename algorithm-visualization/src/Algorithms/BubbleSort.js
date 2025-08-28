import theArray from "./RandomArray";

export default function BubbleSort() {
  //Note to self: i++ is not the same as i + 1, one increments while the other is an index

  function BubbleSortAlgorithm(array) {
    // For every element in the array... (- 1 since the last element will be sorted already)
    for (let i = 0; i < array.length - 1; i++) {
      // A check to see if array is sorted. Swapped is true only when if statement runs, meaning something swapped.
      // Else nothing swapped, thus meaning the array is sorted.
      let Swapped = false;

      //... go through every element in the array except last one.
      for (let j = 0; j < array.length - i - 1; j++) {
        // If current value is bigger than the next, swap them.
        if (array[j] >= array[j + 1]) {
          [array[j + 1], array[j]] = [array[j], array[j + 1]];
          Swapped = true;
        }
      }
      if (!Swapped) {
        break;
      }
    }
    return array;
  }

  return console.log(BubbleSortAlgorithm(theArray));
}
