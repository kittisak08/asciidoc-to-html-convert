# AsciiDoc to HTML Converter

A simple Node.js script to convert AsciiDoc files (.adoc) into HTML.

## Requirements

- Node.js v18+ 
- npm

## Installation

1. Download `adoc-to-html.js` from this repository.  
2. Place it in the folder with your `.adoc` file.  
3. Open a terminal in that folder and run:

```bash
npm install asciidoctor
```

## Usage

1. Open a terminal in the folder with your `.adoc` file and the script.  
2. Run the script:

```bash
node adoc-to-html.js
```

3. When prompted, enter the name of the AsciiDoc file to convert (with extension).  

The script will generate an HTML file with the same name in the same folder.

Example:

```text
Enter the AsciiDoc file name (with extension): example.adoc
Successfully converted to example.html
```

## Notes

- Make sure the input file exists in the current directory.
- Output file will have the same name but with `.html` extension.
- The script uses the [Asciidoctor.js](https://github.com/asciidoctor/asciidoctor.js) library for conversion.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
