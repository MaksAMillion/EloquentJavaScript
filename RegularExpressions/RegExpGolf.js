/*
    For each of the following items, write a regular expression to test 
    whether any of the given substrings occur in a string. The regular
    expression should match only strings containing one of the substrings 
    described. Do not worry about word boundaries unless explicitly 
    mentioned. When your expression works, see whether you can make it 
    any smaller.

    car and cat

    pop and prop

    ferret, ferry, and ferrari

    Any word ending in ious

    A whitespace character followed by a period, comma, colon, or semicolon

    A word longer than six letters

    A word without the letter e (or E)

*/

// Fill in the regular expressions

verify(/ca[rt]/,
       ["my car", "bad cats"],
       ["camper", "high art"]);

verify(/(pop)|(prop)/,
       ["pop culture", "mad props"],
       ["plop", "prrrop"]);

verify(/.../,
       ["ferret", "ferry", "ferrari"],
       ["ferrum", "transfer A"]);

verify(/.../,
       ["how delicious", "spacious room"],
       ["ruinous", "consciousness"]);

verify(/.../,
       ["bad punctuation ."],
       ["escape the period"]);

verify(/.../,
       ["Siebentausenddreihundertzweiundzwanzig"],
       ["no", "three small words"]);

verify(/.../,
       ["red platypus", "wobbling nest"],
       ["earth bed", "learning ape", "BEET"]);


function verify(regexp, yes, no) {
  // Ignore unfinished exercises
  if (regexp.source == "...") return;

  for (let str of yes) if (!regexp.test(str)) {
    console.log(`Failure to match '${str}'`);
  }
  for (let str of no) if (regexp.test(str)) {
    console.log(`Unexpected match for '${str}'`);
  }
}