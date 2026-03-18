# Smart Lost & Found Network - Setup Guide

## 📋 Project Structure

```
.
├── server/                    # Backend (Node.js/Express)
│   ├── config/db.js          # MongoDB connection
│   ├── models/User.js        # User schema
│   ├── controllers/           # Request handlers
│   │   └── authController.js
│   ├── routes/               # API routes
│   │   └── authRoutes.js
│   ├── middleware/           # Custom middleware
│   │   └── authMiddleware.js
│   ├── server.js             # Main server file
│   ├── package.json
│   ├── .env.example
│   └── .gitignore
└── client/                    # Frontend (React/Vite)
    ├── src/
    │   ├── pages/
    │   │   ├── Login.jsx
    │   │   └── Register.jsx
    │   ├── App.jsx
    │   ├── main.jsx
    ├── index.html
    ├── vite.config.js
    ├── package.json
    └── .gitignore
```

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Backend Setup

1. **Navigate to server directory:**

   ```bash
   cd server
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Create .env file:**

   ```bash
   # Copy from .env.example
   MONGO_URI=mongodb://localhost:27017/smart-lost-found
   JWT_SECRET=your_secure_jwt_secret_key
   PORT=5000
   ```

4. **Start MongoDB:**

   ```bash
   # Windows
   mongod

   # macOS (if installed via Homebrew)
   brew services start mongodb-community

   # Linux
   sudo systemctl start mongod
   ```

5. **Run the server:**

   ```bash
   npm run dev
   # or for production
   npm start
   ```

   Expected output:

   ```
   MongoDB Connected
   Server running on port 5000
   ```

### Frontend Setup

1. **Navigate to client directory (in a new terminal):**

   ```bash
   cd client
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start development server:**

   ```bash
   npm run dev
   ```

   Expected output:

   ```
   VITE v4.1.0  ready in 123 ms

   ➜  Local:   http://localhost:5173/
   ```

## 🧪 Testing

### Using Postman or Thunder Client

#### 1. Register a new user

- **Method:** POST
- **URL:** `http://localhost:5000/api/auth/register`
- **Headers:** `Content-Type: application/json`
- **Body:**
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
  }
  ```
- **Expected Response:** `{ "msg": "User registered successfully" }`

#### 2. Login

- **Method:** POST
- **URL:** `http://localhost:5000/api/auth/login`
- **Headers:** `Content-Type: application/json`
- **Body:**
  ```json
  {
    "email": "john@example.com",
    "password": "password123"
  }
  ```
- **Expected Response:**
  ```json
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "id": "...",
      "name": "John Doe",
      "email": "john@example.com"
    }
  }
  ```

#### 3. Test Protected Route

- **Method:** GET
- **URL:** `http://localhost:5000/api/test`
- **Headers:**
  - `Authorization: <token_from_login>`
- **Expected Response:** `"Protected route accessed"`

### Using Frontend

1. Go to `http://localhost:5173/`
2. Click "Register here" to create a new account
3. Fill in the registration form and submit
4. You'll be redirected to the login page
5. Login with your credentials
6. Success message will appear

## 📝 API Endpoints

| Method | Endpoint             | Description          | Auth Required |
| ------ | -------------------- | -------------------- | ------------- |
| POST   | `/api/auth/register` | Register new user    | No            |
| POST   | `/api/auth/login`    | Login user           | No            |
| GET    | `/api/test`          | Test protected route | Yes           |
| GET    | `/`                  | Health check         | No            |

## 🔐 Authentication

- Passwords are hashed using **bcryptjs** (salt rounds: 10)
- JWT tokens expire after **7 days**
- Tokens are stored in browser's localStorage
- Include token in `Authorization` header for protected routes

## 🛠️ Development Scripts

### Backend

```bash
npm start   # Run server
npm run dev # Run with nodemon (auto-restart on changes)
```

### Frontend

```bash
npm run dev     # Start development server
npm run build   # Build for production
npm run preview # Preview production build
```

## 📦 Dependencies

### Backend

- **express** - Web framework
- **mongoose** - MongoDB ODM
- **bcryptjs** - Password hashing
- **jsonwebtoken** - JWT token generation
- **dotenv** - Environment variables
- **cors** - Cross-origin requests

### Frontend

- **react** - UI library
- **react-router-dom** - Routing
- **axios** - HTTP client
- **vite** - Build tool

## 🐛 Common Issues

### MongoDB Connection Error

- Ensure MongoDB is running: `mongod` or `sudo systemctl start mongod`
- Check MONGO_URI in .env file
- Verify MongoDB is accessible on localhost:27017

### CORS Error

- Backend has CORS enabled for all origins
- Ensure frontend requests include proper headers
- Check that frontend URL is `http://localhost:5173` and backend is `http://localhost:5000`

### Token Expiration

- Tokens expire after 7 days
- Clear localStorage and re-login if token has expired
- Check token validity on middleware

## 📄 License

ISC

## 🤝 Contributing

Feel free to submit issues and enhancement requests!
