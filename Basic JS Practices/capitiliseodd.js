//write a function thaT capitalises the letters at odd indices in a string
function capitalizeOdd(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (i % 2 !== 0) {
            result += str[i].toUpperCase();
        } else {
            result += str[i];
        }
    }
    return result;
}
console.log()