
const fs = require("fs");
const csv = require("csvtojson");

function convert(file){
  csv().fromFile(file).then((jsonObj)=> {
    console.log("Converting " + file);

    result = JSON.stringify(jsonObj); //Converts file to string
    fs.writeFileSync("bobon.json", result, "utf-8"); //Write string to file

  })

}

convert(process.argv[2]);
