# Parashu Server

Welcome to the server-side of Parashu, the AI-powered news app! This server is built using Ruby on Rails and serves as the backend for the Parashu application. Below, you'll find essential information about the server, its setup, and how to get started.

## Table of Contents

1. [Installation](#installation)
2. [Running the Server](#running-the-server)
3. [API Endpoints](#api-endpoints)
4. [Dependencies](#dependencies)

## Installation

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/your-username/parashu.git
    ```

2. Navigate to the server directory:

    ```bash
    cd parashu/server
    ```

3. Install the dependencies:

    ```bash
    bundle install
    ```

4. Set up the database:

    ```bash
    rails db:setup
    ```

## Running the Server

Start the server with the following command:

```bash
rails server
```

The server will run on `http://localhost:3000` by default.

## API Endpoints

- **GET /api/v1/articles**: Get the list of saved atricles.


## Dependencies

- Ruby on Rails
- PostgreSQL


## Happy coding! 🚀