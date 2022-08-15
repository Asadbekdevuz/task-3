
function info(text) {
  let wordArr = text.split(" ");

  let longWordArr = wordArr[0];

  for (let i = 0; i < wordArr.length; i++) {
    if (wordArr[i].length < longWordArr.length) {
      longWordArr = wordArr[i];
    }
  }

  return longWordArr;
}

let resultInfo = info("Dunyo sani tog'angmas yo amakivachangmas");

console.log(`${resultInfo}`);
