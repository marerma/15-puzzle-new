const numbers = []

for(let i = 0; i < 16; i++) {
  numbers.push(i)
}

function sortNumbers (array) {
  let tmp, rnd
   for (let i = array.length-1; i > 0; i--) {
    tmp = array[i]
    rnd = Math.floor(Math.random()*(i + 1))
    array[i] = array[rnd];
    array[rnd] = tmp;
  }
    return array;
   }

export {numbers, sortNumbers}