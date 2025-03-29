const fs = require("fs");
const say = require("say");

// parsing
const wordList = fs.readFileSync("./input.txt", { encoding: "utf-8" });
const currentEncounter = fs.readFileSync("./repeated.txt", { encoding: "utf-8" });
const wordListArray = wordList.split('\n');
const currentEncounterArray = currentEncounter.split('\n');

// picking
let rand = Math.floor(Math.random() * wordListArray.length);
let randomWord = wordListArray[rand];

while (currentEncounterArray.includes(randomWord)) {;
	rand = Math.floor(Math.random() * wordListArray.length);
	randomWord = wordListArray[rand];
}

// parsing
say.getInstalledVoices((err, h) => {
	console.log(h);
});
console.log(randomWord);
/*
say.export(`Your next word is... ${randomWord}`, "Microsoft David Desktop", 0.85, "test.wav", err => {
	if (err) console.error(err);
});
*/
say.speak(`Your next word is... ${randomWord}`, "Microsoft David Desktop", 0.85);

// reinsert
currentEncounterArray.push(randomWord);
fs.writeFileSync("./repeated.txt", currentEncounterArray.join('\n'));