<h1>Salon Appointment Management App</h1>
Welcome to the Salon Appointment Management App! This application helps salon owners manage appointments efficiently.

## Installation

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies using npm:

```
npm install
```

## Usage

To run the client side, use the following command:

```
npm run dev
```

To run the server side, use the following command:

```
nodemon start
```

## Configuration

Before running the application, you need to set up your environment variables. Create a `.env` file in the root directory of the project and define the following variables:

- `PORT`: Port number for the server.
- `MONGO_URL`: MongoDB connection URL.
- `JWT_SECRET_KEY`: Secret key for JSON Web Token (JWT) encryption.

Example `.env` file:

```
PORT=3000
MONGO_URL=mongodb://localhost:27017/salon_app
JWT_SECRET_KEY=mySecretKey123
```

Make sure to replace the values with your own configurations.

