// export default function two_crystal_balls(breaks: boolean[]): number {
//   const jumpAmpunt;
// }

function two_crystal_balls(breaks) {
  const jumpAmount = Math.floor(Math.sqrt(breaks.length));

  // 1. jumping based on the O(log N)
  let i = jumpAmount; // if logOf N becomes 100 each loop we will add 100 to the i

  for (; i < breaks.length; i += jumpAmount) {
    console.log(i, "logging i", breaks[i], "breaks at that i");
    // if it is true at that index
    if (breaks[i]) {
      break; // will not continue the loop
    }
  }

  // we have stored i outside the loop so to have access the value
  i -= jumpAmount; // for example i is 2500 so we minus 100 from it ==> 2400

  // j should be smaller than 100 - why not j<= jumpAmount
  // because jumpAmount is the exact first ball break so not useful to count it we want the previous point until jumpAmount no itself
  for (let j = 0; j < jumpAmount && i < breaks.length; j++, i++) {
    console.log(j, "log j", i, "log i", breaks[i], "breaks at i");
    if (breaks[i]) return i; // will return i the first break of ball index
  }

  return -1;
}

let idx = Math.floor(Math.random() * 10000);
const data = new Array(10000).fill(false);

for (let i = idx; i < 10000; ++i) {
  data[i] = true;
}
console.log(two_crystal_balls(data));
console.log(two_crystal_balls(new Array(821).fill(false)));
