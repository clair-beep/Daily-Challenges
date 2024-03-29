// Pair of gloves
// Winter is coming, you must prepare your ski holidays. The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.

// Given an array describing the color of each glove, return the number of pairs you can constitute, assuming that only gloves of the same color can form pairs.

// Examples:
// input = ["red", "green", "red", "blue", "blue"]
// result = 2 (1 red pair + 1 blue pair)

// input = ["red", "red", "red", "red", "red", "red"]
// result = 3 (3 red pairs)
// ARRAYSPUZZLES

//Solution

function numberOfPairs(gloves) {
  let pairs = 0;
  let obj = {};
  for (let glove of gloves) {
    obj[glove] = obj[glove] + 1 || 1;
  }
  for (let number in obj) {
    let foundPairs = obj[number];
    if (obj[number] > 1) {
      pairs += Math.floor(foundPairs / 2);
    }
  }
  return pairs;
}

//Alternative

function numberOfPairs(gloves) {
  var pairs = 0,
    counts = {};

  for (var color of gloves) {
    if (!counts.hasOwnProperty(color)) counts[color] = 0;

    if (++counts[color] === 2) {
      counts[color] -= 2;
      pairs++;
    }
  }

  return pairs;
}
