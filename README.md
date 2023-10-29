# Small_Test_API Example

This is a simple API built using Node.js and the Express framework to provide basic functionality. You can use this API as a starting point to learn about web API development or as a practice project.

## Operation

This API is very straightforward and consists of three main routes:

- **Root Route ("/")**:
  - Accessing this route will return a simple message that says "Rubiel is a jerk."

- **User Route ("/users")**:
  - You can use this route to create a user. Send a POST request with valid JSON data, and the API will respond whether the user has been created successfully or if there was an issue.

- **Individual User Route ("/users/:user_id")**:
  - Accessing this route with a specific user ID will provide information about a fictitious user. If you want to ask additional questions about the user, you can use a query to get more information.

## Usage

To use this API, follow these steps:

1. Clone or download this repository to your local machine.

2. Make sure you have Node.js installed on your system.

3. Open a terminal and navigate to the directory where the API code is located.

4. Run the following command to install the dependencies:

```npm install```

5. Start the server with the following command:

```npm start```

The server will be available at `http://localhost:5500`.

6. You can use tools like Postman, cURL, or even a web browser to interact with the API routes.

## Examples

Here are some examples of how to interact with the API:

- **Get the main message**:
- Make a GET request to `http://localhost:5500/` to receive the message "Rubiel is a jerk."

- **Create a user**:
- Send a POST request to `http://localhost:5500/users` with valid JSON data to create a user.

- **Retrieve information about a specific user**:
- Access `http://localhost:5500/users/123` to get information about a user with the ID "123." You can also add a query to the URL, for example, `http://localhost:5500/users/123?query=question` to ask a question.

## Contribution

If you want to contribute or improve this example API, feel free to do so. Open a pull request with your changes, and I'll be happy to review them.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.





