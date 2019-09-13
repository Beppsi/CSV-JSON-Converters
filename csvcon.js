const csvjson = require('csvjson');
const fs = require('fs')
const path = require("path");

function convertToCSV(file) {

  console.log('converting...');

  var data = fs.readFileSync(file, {encoding: 'utf8'});

  var nilsMamma = {
    delimiter: ",",
    wrap: false
  }

  csv = csvjson.toCSV(data , nilsMamma);

  var fileName = path.basename(file, ".json");
  fs.writeFileSync(fileName + ".csv", csv, 'utf-8');

  console.log('Success!');
}

convertToCSV(process.argv[2]);
