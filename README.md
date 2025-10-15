# AsciiDoc to HTML Converter

A simple Node.js script to convert AsciiDoc files (.adoc) into HTML.

## Requirements

- Node.js v18+ 
- npm

## Installation

Clone the repository:

```bash
git clone https://github.com/<your-username>/asciidoc-to-html-convert.git
cd asciidoc-to-html-convert
```

Install dependencies:

```bash
npm install
```

## Usage

1. Place the script `adoc-to-html.js` in the folder with your `.adoc` file.  
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
