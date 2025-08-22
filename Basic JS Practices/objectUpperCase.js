const inputObject = {
  firstName: "Raissa",
  lastName: "Dorren",
  age: 90,
};

function transformKeys(inputObject, transformFunction) {
  const newObj = {};

  for (let key in inputObject) {
    if (inputObject.hasOwnProperty(key)) {
      const newKey = transformFunction(key);
      newObj[newKey] = inputObject[key];
    }
  }

  return newObj;
}

const transformedObject = transformKeys(inputObject, (key) => key.toUpperCase());

console.log(transformedObject);
