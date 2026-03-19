# Smart Lost & Found Network

A full-stack MERN application that connects people who have lost items with those who have found them, enabling efficient recovery through a centralized digital platform.

---

## Live Demo

(Add your deployed link here)

---

## Problem Statement

Every day, many items are lost without an efficient system to reconnect owners and finders. Existing solutions are often fragmented, manual, or limited in scope.

---

## Solution

The Smart Lost & Found Network provides:
- A centralized platform to report lost and found items
- Secure user authentication
- Scalable backend architecture
- A foundation for real-time communication and future enhancements

---

## Features

### Authentication and Security
- JWT-based authentication
- Password hashing using bcrypt
- Protected API routes using middleware

### Backend
- RESTful API design
- Input validation and error handling
- MongoDB integration using Mongoose

### Frontend
- Responsive UI built with React and Vite
- Client-side routing using React Router
- API communication using Axios

---

## Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Tokens (JWT)
- bcryptjs

### Frontend
- React 18
- Vite
- React Router
- Axios

---

## System Architecture

```mermaid
flowchart LR
    U[User] --> C[React Client]
    C -->|API Calls| S[Express Server]
    S -->|ODM| D[(MongoDB)]
    S -->|Authentication| A[JWT Middleware]
