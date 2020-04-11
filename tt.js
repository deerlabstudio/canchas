function getCharSum(text) {
  let sum = 0;
  for (let position = 0; position < text.length; position++) {
    sum += parseInt(text.charCodeAt(position));
  }
  return sum;
}

function funWithAnagrams(textList) {

  let listOfWords = textList;
  const listToReturn = [];
  listOfWords.splice(0, 1);

  do {
    const listToRemove = [];
    const firstWord = listOfWords[0];
    const sumOfChar = getCharSum(firstWord);

    listToReturn.push(firstWord);

    for (let index = 1; index < listOfWords.length; index++) {
      if (sumOfChar === getCharSum(listOfWords[index])) {
        listToRemove.push(listOfWords[index]);
      }
    }

    listOfWords.splice(0, 1);

    for (let index = 0; index < listToRemove.length; index++) {
      const positionInArray = listOfWords.indexOf(listToRemove[index]);
      if (positionInArray > -1) {
        listOfWords.splice(positionInArray, 1);
      }
    }

  } while(listOfWords.length != 0);

  return listToReturn.sort();
}

console.log(funWithAnagrams(["4", "code", "aaagmnrs", "anagrams", "doce"]));
