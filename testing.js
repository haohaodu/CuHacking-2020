const csv = require('csv-parser');
const fs = require('fs');

lis = []
function f(){
stream = fs.createReadStream('data.csv')
  .pipe(csv())
  .on('data', (row) => {
    console.log(2);
    lis.push(row);
  })
};

console.log(1);
var b = f();
console.log(3);