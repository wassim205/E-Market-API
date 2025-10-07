# E-Market API (Part 1)

A minimal, modular backend (Express + MongoDB/Mongoose) that provides the foundations for an e-commerce platform.  
This sprint implements the basic server, a MongoDB connection, and REST endpoints for **Products** and **Users** (CRUD for products; create + read for users with unique email check). Swagger docs are included at `/api-docs`. This repository covers **only Part 1** (backend foundations); authentication, frontend, orders and advanced features come in later sprints.

## Features (this sprint)
- Express server with modular structure (routes, controllers, models, middlewares)
- MongoDB connection via Mongoose (local or Atlas)
- Product model & CRUD routes: `GET /products`, `GET /products/:id`, `POST /products`, `PUT /products/:id`, `DELETE /products/:id`
- User model & routes: `GET /users`, `GET /users/:id`, `POST /users` (email uniqueness)
- Global middlewares: logger, notFound (404), errorHandler
- Swagger/OpenAPI documentation at `/api-docs`

## Tech
Node.js · Express · MongoDB · Mongoose · dotenv · swagger-jsdoc · swagger-ui-express

## Quick start (local)
1. Install deps: `npm install`  
2. Create `.env` with `PORT` and `MONGO_URI` (e.g. `mongodb://localhost:27017/e-market`)  
3. Run MongoDB (`mongod`) and start server: `npm run dev`

## Notes
- Passwords are stored plain for this sprint (will be hashed in the authentication brief).  
- This repo is intentionally small and focused: it forms the foundation for later features (auth, orders, categories, file uploads, etc.).

