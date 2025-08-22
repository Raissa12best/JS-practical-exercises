function reverseWordsInPlace(str) {
  return str
    .split(' ')           
    .map(word => word.split('').reverse().join('')) 
    .join(' ');              
}

console.log(reverseWordsInPlace("I am the good boy"));
