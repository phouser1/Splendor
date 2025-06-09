const fs = require('fs');
const readline = require('readline');

async function processLineByLine() {
  const fileStream = fs.createReadStream('input.txt');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });
  // Note: we use the crlfDelay option to recognize all instances of CR LF
  // ('\r\n') in input.txt as a single line break.
  var idIndex = 87
  for await (const line of rl) {
    var splitl = line.split('');
    var jsobj = "{\n" + "\"id\": " + idIndex + ",\n" + "\"color\": blue,\n" + "\"points\": 0,\n" + "\"tier\": 3,\n" + "\"cost\": {\n" 
    //var modline = splitl[0] + ',' + splitl[1] + ',' + splitl[2] + ',' + splitl[3] + ',' + splitl[4];
    // Each line in input.txt will be successively available here as `line`.
    var modline = jsobj + "\"red\": " + splitl[0] + ",\n" +"\"blue\": " + splitl[1] + ",\n" +"\"green\": " + splitl[2] + ",\n" +"\"black\": " + splitl[3] + ",\n" +"\"white\": " + splitl[4] + "\n}\n},"
    fs.appendFileSync("output.txt",   modline + '\n')
    console.log(`Line from file: ${modline}`);
    idIndex++;
  }
}

processLineByLine();