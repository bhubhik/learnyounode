const fs = require('fs');
const myLog = 'console.log("This is appended text")';
fs.writeFileSync('text.js', 'console.log("working")');
fs.appendFileSync('text.js', myLog);
