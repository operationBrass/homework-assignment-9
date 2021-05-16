// TODO: Create a function that returns the license 
// If there is no license, return an empty string
function renderLicense(license) {
  let licenseIcon; 

    switch (license){
    case "MIT":
    licenseIcon = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    break;
    case "Apache 2.0 License":
      licenseIcon ="[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    break;
    case "Creative Commons license family":
      licenseIcon = "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)"
    break;
    case "IBM Public License Version 1.0":
      licenseIcon = "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"
    break;
    case "GNU General Public License family":
      licenseIcon ="[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
    break;
    case "Do What The F*ck You Want To Public License":
      licenseIcon = "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)"
    break;
    default: "";
    }
    
    return licenseIcon;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  let licenseBadge = "";

  if(license != "")
  {
    licenseBadge = renderLicense(license);
  }

  return licenseBadge;

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  const license = renderLicenseSection(data.license);

  return `# ${data.title}

  ${license}
          
## Description ${data.intro}

## Table of Contents
* [Technologies Used](#tech)
* [Install Instructions](#Installing)
* [Usage Guide](#usage)
* [Contributions](#contribute)
* [Tests](#tests)
* [Questions](#questions)

## Technologies Used 

${data.tech}

## Installation 

${data.install}

## Usage Guide 

${data.usage}

## Contributions 

${data.contributors}

## Tests 

${data.test}

## Questions 

If you have any questions you can follow me on github ${data.username} or email me at ${data.email}
`;

}

module.exports = generateMarkdown;
