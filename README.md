# Simple Prisma CRUD Operation

This is a simple CRUD operation in MySQL database using Prisma

## Goals

- Understanding Prisma
- Understanding basic CRUD operation in Prisma

## Feature

- Rest API
- Fully functional CRUD operation

## Lacking

- Authentication
- User input / request body validation

## Available scripts

| Script          | Description                                                               |
| --------------- | ------------------------------------------------------------------------- |
| `npm run dev`   | Starts development server                                                 |
| `npm run build` | Transpile TypeScript file into JavaScript and put it in the `dist` folder |
| `npm start`     | Runs server from `dist` folder                                            |

## Available routes

| Method   | URL                                 |
| -------- | ----------------------------------- |
| `POST`   | http://localhost:5000/api/todos     |
| `GET`    | http://localhost:5000/api/todos     |
| `GET`    | http://localhost:5000/api/todos/:id |
| `PUT`    | http://localhost:5000/api/todos/:id |
| `DELETE` | http://localhost:5000/api/todos/:id |
