const fs = require('fs');
const util = require('util');


const readFile = util.promisify(fs.readFile);
/**
 
   write data to the JSON file with destination and  content
   @param {string} destination File written to
   @param {object} content Content written to file
   @returns {void} 
 */

const writeFile = (destination, content) =>
  fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
    err ? console.error(err) : console.info(`\nData written to ${destination}`)
  );

/**
   read data from a file and append content
   @param {object} content content to append to the file
   @param {string} file path to the file 
   @returns {void} 
 */

const readAppend = (content, file) => {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      const parsedData = JSON.parse(data);
      parsedData.push(content);
      writeFile(file, parsedData);
    }
  });
};

module.exports = { readFile, writeFile, readAppend };