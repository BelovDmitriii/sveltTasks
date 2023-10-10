import {encoded, translations} from './data.js';

function decoded(array, translations) {
  const decodedArray = [];
  const idSet = new Set(); 
  for (let i = 0; i < array.length; i++) {
    const decodedObject = {};
    for (let key in array[i]) {
      if (key.includes("Id") && array[i][key] !== null && key !== 'groupId') {
        decodedObject[key] = translations[array[i][key]];
        idSet.add(array[i][key]);
      } else {
        decodedObject[key] = array[i][key];
      }
    }
    decodedArray.push(decodedObject);
  }

  console.log("Уникальные id:", [...idSet].sort((a,b) => a - b));
  return decodedArray;
}

console.log(decoded(encoded, translations));
