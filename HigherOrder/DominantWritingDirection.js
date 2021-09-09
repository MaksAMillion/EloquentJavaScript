function dominantDirection(text) {
  // Your code here.
  let scripts = countByMAX(text, char => {
      let script = characterScript(char.codePointAt(0));
      return script ? script : "none";
  }).filter(({name}) => name != "none");
  
  let countedScript = scripts.reduce((a, b) =>
      a.count > b.count ? a : b, 0);
  return countedScript.direction;
}

function countByMAX(items, groupName) {
let counts = [];
for (let item of items) {
  let script = groupName(item);
  let known = counts.findIndex(c => c.name == script.name);
  if (known == -1) {
    counts.push({name: script.name, direction: script.direction, count: 1});
  } else {
    counts[known].count++;
  }
}
return counts;
}

// count characters by a criterion based on characterscript
// then filter out the part of the result that refers to uninteresting
// (scriptless) characters
console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl