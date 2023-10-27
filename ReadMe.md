# Good Game Theory Bookstore API

Welcome to the Bookstore API project!  

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Configuration](#configuration)
- [Running Locally](#running-locally)
- [API Endpoints](#api-endpoints)
- [Deployment](#deployment)
- [License](#license)

## Prerequisites

Before you begin, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) package manager
- [MongoDB](https://www.mongodb.com/) (if using a MongoDB database)


## Getting Started

### Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/Shrey-Raj/goodgametheory-assign
   ```

2. Navigate to the project directory:

   ```bash
   cd goodgametheory-assign
   ```

3. Install project dependencies using npm:

   ```bash
   npm install
   ```

### Configuration

- Create a `.env` file in the project root and configure your environment variables, including the MongoDB connection string, if applicable:

   ```env
   PORT=3000
   MONGO_URI=your-mongodb-connection-string
   ```
- Watch this 60 sec [video](https://www.youtube.com/shorts/pIHvoXkwmq4) to set up your MongoDB Account and create a connection String 

## Running Locally

To run the project locally:

1. Start the API server:

   ```bash
   node index.js
   ```

2. The API will be accessible at [http://localhost:3000](http://localhost:3000).

## API Endpoints

The API provides the following endpoints:

- `GET /books`: Retrieve a list of all books.
- `POST /books`: Add a new book.
- `PUT /books/:id`: Update a book by its ID.
- `DELETE /books/:id`: Delete a book by its ID.

For detailed API documentation, you can access the Swagger UI:

1. Copy the content inside of the file **Swagger-doc** in the repo:

2. Access the Swagger editor [here](https://editor.swagger.io/).

3. Paste the copied content on the left side panel of the editor

## Deployment

To deploy the API to a production environment, follow these general steps:

1. Set up a production server or cloud service.
2. Configure environment variables on the production server.
3. Deploy your project code to the server.
4. Start the API server using a process manager or service manager.
5. Secure the API using HTTPS, if needed, and configure any necessary firewall rules.


## License

This project is licensed under the [MIT License](LICENSE).
