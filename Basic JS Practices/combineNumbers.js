
function combineNumbers(array){
    const evens = [];
    const odds = [];

    for (const num of array) {
        if (num % 2 === 0) {
            evens.push(num);
        } else {
            odds.push(num);
        }
    }

    evens.sort((a, b) => a - b);
    odds.sort((a, b) => a - b);

    return [evens.join(''), odds.join('')];
}
console.log(combineNumbers([1,5,6,7,89,,3,45,6,7,8]));
