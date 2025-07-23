function validatePhoneNumber(str) {
  // Quick length check: 10 digits or 12 chars if including 2 separators
  if (str.length !== 10 && str.length !== 12) {
    return false;
  }

  // Allowed separators
  const separators = ['-', ' ', '_'];

  // Check chars
  for (let i = 0; i < str.length; i++) {
    const ch = str.charAt(i);

    // Check for digits anywhere
    if (ch >= '0' && ch <= '9') {
      continue; // cool, keep going
    }

    // Check for separators only at pos 3 or 7
    else if ((i === 3 || i === 7) && separators.includes(ch)) {
      continue; // also cool
    } else {
      return false; // invalid char or separator in wrong place
    }
  }

  // Count digits - must be exactly 10
  let digitsCount = 0;
  for (let ch of str) {
    if (ch >= '0' && ch <= '9') digitsCount++;
  }

  return digitsCount === 10;
}

console.log(validatePhoneNumber("1234567890"));      // true
console.log(validatePhoneNumber("123-456-7890"));    // true
console.log(validatePhoneNumber("123 456 7890"));    // true
console.log(validatePhoneNumber("123_456_7890"));    // true (if you want _ allowed)
console.log(validatePhoneNumber("12-3456-7890"));    // false (wrong separator pos)
console.log(validatePhoneNumber("123456789"));       // false (too short)
console.log(validatePhoneNumber("12345678901"));     // false (too long)
console.log(validatePhoneNumber("12345--67890"));    
