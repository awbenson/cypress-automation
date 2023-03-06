# cypress-automation
This project is a generic Cypress framework with Typescript to quickly scaffold an end-to-end coverage on multiple sites.  This allows for end-to-end testing from an external source for for easy automation on filling out forms for submission or pulling in APIs to perform an ad-hoc intergation testing by asserting against the api results directly.  

You will forfeit Cypress's component testing abilities as you will not be able to mount specific components as this is no longer in the same repo as your source code.  You will also not be able to generate code-coverage reports for the same reason.  Usually for projects, it's better to add Cypress to the project itself to gain a number of abilities for that site.

There are times when you are implementing end-to-end testing for the use of "smoke" testing which is when you run general testing for functionality of the site to ensure that nothing broke during upgrades, code pushes, or environmental changes. This is where this project is targeting to resolve in a quick and easy to setup fashion; the ability to run tests to verify in a general way that your sites (with a focus of several) sites and apis are indeed running as intended.

To meet these goals, a basic setup will show the running of the code to a couple simple sites then against the apis themselves. A series of helper classes will be made that can be imported into your cy.ts files to help with common tasks.  An opininated, folder structure and implementation guideline of a multi-page flows and how certain structure can be coded to allow for mock data or real data. 

Furthermore, Faker-js is implemented here to quickly add fake data to be used for filling out forms. This is used to fill out a "template" object then that is used across multiple tests with consistent data.  While possible to use the seed functionality of Faker-js this can give an object that can be saved against.

Since the code runs on it's own domain, it is possible to share data across tests through the use of localStorage or sessionStorage.  This is how a "summary" report of API testing can be created by making a list in localstorage, testing and adding to this list then when all the tests run, report that into the browser's console or even write it to the screen if you add an HTML file to utilize as the "page" while API calls are being made.
