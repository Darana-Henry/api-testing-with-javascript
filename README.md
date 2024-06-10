[![SVG Banners](https://svg-banners.vercel.app/api?type=glitch&text1=API%20Testing%20w%20JS&width=1000&height=200)](https://github.com/Darana-Henry)

# 💻 Tech Stack:

### Frameworks and Libraries:

| SuperTest                                                                                     | Mocha                                                                                        | Chai                                                                                         | Reporting                                                                                                                         | JavaScript                                                                                                                    | Babel                                                                                         | Faker JS                                                                                       | DotEnv                                                                                                   |
| --------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| <img src="https://avatars.githubusercontent.com/u/30959108?s=48&v=4" width="55" height="55"/> | <img src="https://avatars.githubusercontent.com/u/8770005?s=48&v=4" width="55" height="55"/> | <img src="https://avatars.githubusercontent.com/u/1515293?s=48&v=4" width="55" height="55"/> | <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRFPrub8_Y-yTn2XDNnEzFDQgnc78ygJITsQ&s"  width="55" height="55"/> | <img src="https://github.com/devicons/devicon/blob/master/icons/javascript/javascript-original.svg"  width="55" height="55"/> | <img src="https://avatars.githubusercontent.com/u/9637642?s=48&v=4"  width="55" height="55"/> | <img src="https://avatars.githubusercontent.com/u/97165289?s=48&v=4"  width="55" height="55"/> | <img src="https://raw.githubusercontent.com/motdotla/dotenv/master/dotenv.svg"  width="55" height="55"/> |

## Getting Started

### Prerequisites

Make sure you have the following installed:<br>
![](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)

### Installation

Welcome! To get started with this project, follow these steps:

1. **Clone the Repository**
   ```sh
   git clone https://github.com/Darana-Henry/api-testing-with-javascript.git   

2. **Install Dependencies**
   ```sh
   npm i
   ```

3. **Obtain API Token**
   - Go to the [GoRest Website](https://gorest.co.in/).
   - Create a login account.
   - Once logged in, get the generated API token.

4. **Create a .env File**
   - In the root directory, create a file named `.env`.
   - Add the following property to the `.env` file:
     ```dotenv
     USER_TOKEN=your_generated_api_token
     ```

<img src="https://user-images.githubusercontent.com/74038190/212284087-bbe7e430-757e-4901-90bf-4cd2ce3e1852.gif" align="left" width="20"/> <span style="color: red;"> Note:You only get the token after you log in. Do not share this token.</span>

## How to Run Tests

You have two options to run the tests for this project:

1. **Console Output Only**
   - Run the following command to see the test results in your console:
     ```sh
     npm test
     ```
   - ![Console Output](./images/mocha%20npm%20test.gif)

2. **Console Output with HTML Report**
   - Run the following command to see the test results in your console and generate an HTML report:
     ```sh
     npm run test-with-report
     ```
   - ![HTML Report](./images/mocha-awesome%20reporter.gif)

3. **JUnit Report for Jenkins**
   - If you run with Jenkins, and use JUnit Report to publish your reports, you can run:
     ```sh
     npm run test-with-junit
     ```
   - This will run the tests and output a file named test-results.xml in the root folder.
   - **Note**: This won't output anything on the console. So it might feel like the test is stuck, but actually it's running in the background.

   - <img src="./images/mocha-junit-report.png" alt="HTML Report" height="100" width="500">

### Example Usage

**Console Output Only**
```sh
$ npm test
