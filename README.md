# CrumbBlog

- CrumbBlog is a full-stack web application built with the MERN stack
- Backend: Express (Node.js); Frontend: React; Database: MongoDB

# Download

Please download by forking then cloning this repository:

```
git clone https://github.com/<your-github-username>/crumbblog-mern.git
```

# Installation & Development Environment

## Configuration

The api built by Express.js is configured through the `api/.env` file.

Here is an example of how the `.env` file should be set:

```
MONGO_URL = mongodb+srv://<username>:<password>@<mongo-url>/<database-name>?retryWrites=true&w=majority
JWT_ACCESS_TOKEN_SECRET = <the JWT access token secret>
JWT_REFRESH_TOKEN_SECRET = <the JWT refresh token secret>
```

## Backend

To install the backend and run a developement server on your local environment:

```bash
cd api
yarn install
yarn start
```

The api server will be running on http://localhost:5000.

## Frontend

To install the frontend and run a development React server:

```bash
cd frontend
yarn install
yarn start
```

The React client will be running on http://localhost:3000.
