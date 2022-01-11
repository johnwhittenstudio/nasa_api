# NASA API Photo of the Day Search

## by _**John Whitten**_

### _January 11, 2022_

#### _This is a web-based application wherein the user can enter a date between Jun 16, 1995 and Jan 11, 2022 and view that date's Photo of the Day._

## Technologies Used
- _Babel 7.6.4_
- _Bootstrap 5.1.3_
- _CSS_
- _css-loader 3.2.0_
- _eslint 6.3.0_
- _eslint-loader 3.0.0_
- _file-loader 1.1.6_
- _html-loader 0.5.5_
- _HTML_
- _package-json_
- _Javascript_
- _Jest 24.9.0_
- _JQuery 3.6.0_
- _Node.js_
- _Node Package Manager 6.14.9_
- _popper.js 1.16.1_
- _style-loader 1.0.0_
- _webpack 4.39.3_
- _webpack-cli 3.3.8_
- _webpack-dev-server 3.8.0_

## Project Title: NASA API Photo of the Day Search

## API Key Procurement:
This application uses the NASA-API. You will need to make an account and get an API key if you wish to recreate the project environment on your local computer. You do not need to authenticate in order to explore the NASA data. However, if you will be intensively using the APIs to, say, support a mobile application, then you should sign up for a NASA developer key.

Limits are placed on the number of API requests you may make using your API key. Rate limits may vary by service, but the defaults are:

- Hourly Limit: 1,000 requests per hour

For each API key, these limits are applied across all api.nasa.gov API requests. Exceeding these limits will lead to your API key being temporarily blocked from making further requests. The block will automatically be lifted by waiting an hour. 

Visit the [NASA APIs](https://api.nasa.gov/) site.

In the ```* Required Fields``` enter your first name and last name and email.

Click the ```"Signup"``` button.

## Project Setup/Installation Instructions:
- _Open the terminal on your local computer._

- _Navigate to the parent directory of your preference._

- _Clone this project using ```$ git clone https://github.com/johnwhittenstudio/nasa_api```_

- _Navigate to the top level of the directory with the command ```$ cd nasa_api```_

- _Make sure you have installed [Node js](https://nodejs.org/en/)_

- _Run command ``` $ npm install``` to install all dependencies._

- _Create file for storing environmental variables you want to keep secret (such as an API key) ``` $ touch .env```_

- _Add the following line of code to the .env file ```API_KEY=insert-your-API-key-here``` where you substitute the API key you got by following the instructions above for the "insert-your-API-key-here". The following is an example using a fake API key: ```API_KEY=1234567890```_

- _Run the command ```$ npm run build```_

- _Run the command ```$ npm run test``` to check the test pass._

- _Run the command ```$ npm run start``` to launch on a browser._

## Additional Setup/Installation Note for Windows Users
- _This environment was created on a Mac. For it to work properly in your local environment make the following change:_

- _Update package.json, line 8 to: "start": "npm run build & webpack-dev-server --open --mode development"_

## Known Bugs
- _Unable to get nasa-service.js line 5 url to connect to apikey in .env_
- _Videos of the day unable to display in browser_

## License
[MIT License](https://opensource.org/licenses/MIT) Published _**2022**_ _**John Whitten**_

## Contact Information
_If you encounter any issues with this site, please contact John Whitten at [johnwhitten.studio@gmail.com](mailto:johnwhitten.studio@gmail.com)_
