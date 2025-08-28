import theArray from "./RandomArray";

export default function ArrayFindLowest() {
  function findLowest(array) {
    let Lowest = array[0];
    let Recursions = 0;

    let Total = `Lowest number is ${Lowest} and was in the array ${Recursions} times.`;

    for (let i = 0; i < array.length; i++) {
      if (Lowest > array[i]) {
        Lowest = array[i];
      }
      if (Lowest === array[i]) {
        Recursions++;
      }
    }
    return Total;
  }

  return console.log(findLowest(theArray));
}
