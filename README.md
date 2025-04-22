# Challenge19-CypressTesting

[![License: MPL 2.0](https://img.shields.io/badge/license-MIT-blue)](https://opensource.org/licenses/MPL-2.0)

## Description

this challenge uses Cypress to test a 

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Contributing](#contributing)
4. [Tests](#tests)
5. [License](#license)
6. [Questions](#questions)

## Installation

Run the application locally by doing the following in your terminal:

1. Clone the repository to your local computer.  
    `https://github.com/tlesner/Challenge20-CICD`
2. Check that node.js is installed.  
   `node -v`
3. Install dependencies.  
   `npm i`

## Usage

To run the application locally, open an instance of the application in your terminal. 
Run the following:
1. `npm run build`.
2. `npm run seed`.
3. `npm run start:dev`. 
4. Open the application in your browser at (http://127.0.0.1:3001/)[http://127.0.0.1:3001/]. 
  

To run the Cypress tests, open 2 terminals at the root of your application.  
Terminal 1:
1. `npm run build`.
2. `npm run seed`.
3. `npm run start:dev`.

Terminal 2:
1. `npm run cypress`. This command allows you to run the Cypress test.
2. Component Testing:  
    a. In the Cypress window, choose **Component Testing**.  
    b. Select **Electron** as your browser. Press 'Start Component Testing in Electron'.  
    c. Click on the **Quiz.cy.jsx** component test file.  
    d. All component tests should pass.  
3. End-to-End Testing:  
    a. Click the icon in the top left corner of the component testing screen so that the window 'Choose a testing type' appears. Select **E2E Testing**.  
    b. Click on the **quiz.cy.js** e2e test file.  
    c. All end-to-end tests should pass.  

You can also find a video walkthrough at [this](https://drive.google.com/drive/folders/1acnWUClQVwEzNzSsh4OuDLcHhQ-0bPu6) link.

## Contributing

This application was developed by Thomas Lesner. Here are some guidelines on ways to contribute:

# Report a bug fix.

1. Create a new Issue in the GitHub repository.

# Make local changes to push up.

1. Create a new branch (`git checkout -b <your-feature-branch-name>`)
2. Make your changes locally
3. Push the code back to the GitHub repo (`git push origin <your-feature-branch-name>`)
4. Create a pull request to merge your changes

## Tests

The application is working correctly if all tests pass based on the steps above.

## License

The application is covered under [MIT License](https://mit-license.org/#:~:text=The%20MIT%20License%20(MIT)&text=Permission%20is%20hereby%20granted%2C%20free,OTHER%20DEALINGS%20IN%20THE%20SOFTWARE.).  


## Questions

-   GitHub username: [tlesner](https://github.com/tlesner).
-   Reach me at [tjlesner@gmail.com](tjlesner@gmail.com)
