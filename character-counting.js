// counts and returns unique characters in a string
function countLetters(myString){
  // remove spaces
  noSpace = myString.split(" ").join('');
  // create a-z Object - key: a-z, value: 0
  aZObject = {a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0, h: 0, i: 0, j: 0, k: 0, l: 0, m: 0, n: 0, o: 0, p: 0, q: 0, r: 0, s: 0, t: 0, u: 0, v: 0, w: 0, x: 0, y: 0, z: 0}
  // each a-z key compare with each char in myString
  for (var i in aZObject) {
    for (var j in noSpace) {
      if (i == noSpace[j]) {
        aZObject[i]++;
      }
    }
  }

  // return only keys with value > 0
  var aZObjectNoZeros = {};
  for (var i in aZObject) {
    if (aZObject[i] > 0) {
      aZObjectNoZeros[i] = aZObject[i];
    }
  }

  return aZObjectNoZeros;
}

console.log(countLetters('lighthouse in the house'));
