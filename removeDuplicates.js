function removeDuplicates(arr) {
  return arr.filter((item, index, array) => array.indexOf(item) === index);
}
const input = [1, 2, 3,9, 2, 4,7,7,7,7, 5, 1];
const unique = removeDuplicates(input);

console.log(unique); 