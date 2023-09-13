# A simple REST API capable of CRUD operations on a "person" resource.

This repository provides a simple REST API for managing a person's records, allowing you to perform CRUD (Create, Read, Update, Delete) operations. This README.md file contains detailed instructions on setting up, running, and utilizing the API.

> LIVE API Endpoint is https://wendy-hng-backend-two.onrender.com/
>
> For the documentation go to [DOCUMENTATION.md](DOCUMENTATION.md)
>Routes can be found at [server.js](server.js)

## Table of Contents
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [1. Clone the Repository](#1-clone-the-repository)
  - [2. Install Dependencies](#2-install-dependencies)
  - [3. Run the API Locally](#3-run-the-api-locally)
- [API Endpoints](#api-endpoints)
- [Request/Response Formats](#requestresponse-formats)
- [Sample API Usage](#sample-api-usage)

---
## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed.
- Git installed (for cloning the repository).
- A code editor or IDE of your choice.

---

## Getting Started

Follow these steps to set up and run the API locally.

### 1. Clone the Repository

Clone this repository to your system:

```bash
https://github.com/wendy-wej/Hng-backend-tasks.git
cd task-two
```

### 2. Install Dependencies

Install the required Python dependencies using `npm`:

```bash
npm install
```

This will install Express.js, Mongodb, Mongoose, Body-parser and other neccessary packages.

### 3. Run the API Locally

To run the API locally, use the following command:

```bash
npm run start
```

This will start the API server, and it will be available at [127.0.0.1:3000](http://127.0.0.1:3000/).

---
## API Endpoints

The API provides the following endpoints for CRUD operations on the "Person" resource:

- **Create a Person**:
  - **POST /api/**
  - Add a new person to the database.

- **Read a Person**:
  - **GET /api/{_id}**
  - Retrieve details of a person by name.

- **Update a Person**:
  - **PUT /api/{_id}**
  - Modify details of an existing person by name.

- **Delete a Person**:
  - **DELETE /api/{_id}**
  - Remove a person from the database by name.

---

## Request/Response Formats

### Create a Person (POST /api/)
```bash
https://wendy-hng-backend-two.onrender.com/api/
```

**Request Format:**

```json
{
    "name": "Chinwendu",
    "age": 23,
    "track":"backend"
}
```

**Response Format (Success - 200):**

```json
{
    "age": 23,
    "_id": "65023665d3f7ee0035cc5660",
    "name": "Chinwendu",
    "track": "backend",
    "createdAt": "2023-09-13T22:23:33.506Z",
    "updatedAt": "2023-09-13T22:23:33.506Z",
    "__v": 0
}
```

### Read a Person (GET /api/:name)
```bash
https://wendy-hng-backend-two.onrender.com/api/Chinwendu/
```

**Response Format (Success - 200):**

```json
{
    "age": 23,
    "_id": "65023665d3f7ee0035cc5660",
    "name": "Chinwendu",
    "track": "backend",
    "createdAt": "2023-09-13T22:23:33.506Z",
    "updatedAt": "2023-09-13T22:23:33.506Z",
    "__v": 0
}
```

**Response Format (Not Found - 404):**

```json
{
    "message": "Person with name Jumia not found"
}
```

### Update a Person (PUT /api/:name)
```bash
https://wendy-hng-backend-two.onrender.com/api/Chinwendu/
```
**Request Format:**

```json
{
    "track": "fullstack"
}
```

**Response Format (Success - 200):**

```json
{
    "age": 23,
    "_id": "65023665d3f7ee0035cc5660",
    "name": "Chinwendu",
    "track": "fullstack",
    "createdAt": "2023-09-13T22:23:33.506Z",
    "updatedAt": "2023-09-13T22:28:31.524Z",
    "__v": 0
}
```

### Delete a Person (DELETE /api/{_id})
```bash
https://wendy-hng-backend-two.onrender.com/api/Chinwendu/
```

**Response Format (Success - 200):**


```json
{
    "message": "Person with name Chinwendu has been deleted!"
}
```

**Response Format (Not Found - 404):**

```json
{
    "message": "Person with name Chinwendu not found"
}
```



