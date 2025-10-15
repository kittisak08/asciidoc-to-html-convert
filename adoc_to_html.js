const fs = require('fs');
const path = require('path');
const readline = require('readline');
const asciidoctor = require('asciidoctor')();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask for the source file name
rl.question('Enter the AsciiDoc file name (with extension): ', (inputFile) => {
  // Get the base name without extension and use it for the output file
  const outputFile = path.basename(inputFile, path.extname(inputFile)) + '.html';

  // Read the input AsciiDoc file
  fs.readFile(inputFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      rl.close();
      return;
    }

    // Convert AsciiDoc to HTML
    const result = asciidoctor.convert(data, { safe: 'safe', backend: 'html5' });

    // Write the HTML to the output file
    fs.writeFile(outputFile, result, (err) => {
      if (err) {
        console.error('Error writing file:', err);
      } else {
        console.log(`Successfully converted to ${outputFile}`);
      }
      rl.close();
    });
  });
});