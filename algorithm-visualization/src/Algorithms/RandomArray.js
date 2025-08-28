// Random array function so I dont repeat code

let theArray = [];

for (let i = 0; i < 10; i++) {
  theArray.push(Math.round(Math.random() * (100 - 0) + 0));
}
console.log(theArray);

export default theArray;
