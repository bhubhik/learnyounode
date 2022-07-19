const hero = require('./heroes');
const fs = require('fs');
const myLog = 'console.log("This is appended text")';
fs.writeFileSync('text.txt', 'console.log("working")');
fs.appendFileSync('text.txt', myLog);
fs.appendFileSync('text.txt', hero.name.age);
fs.appendFileSync('text.txt', hero.name.hero);
