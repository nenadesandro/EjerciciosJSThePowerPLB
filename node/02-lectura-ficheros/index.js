const fs = require(`fs/promises`);
const path = require(`path`)
const FILENAME = "color amarillo.txt"
const PATHNAME = path.join(__dirname, `./${FILENAME});


const main = async () => {
const fileContent = await fs.readFile(PATHNAME);
const fileString = fileContent.toString();
console.log(fileString);
};

main();