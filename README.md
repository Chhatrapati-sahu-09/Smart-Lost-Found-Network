"# Smart Lost & Found Network

A full-stack web application connecting people who have lost items with those who found them. Built with **React** + **Express.js** + **MongoDB**.

## ✨ Features

- **User Authentication** - Secure register/login with JWT tokens
- **Password Hashing** - bcryptjs for secure password storage
- **Protected Routes** - Auth middleware for secured endpoints
- **CORS Enabled** - Cross-origin requests supported
- **Responsive UI** - Modern frontend with React and Vite

## 🛠️ Tech Stack

### Backend

- Node.js + Express.js
- MongoDB + Mongoose
- JWT Authentication
- bcryptjs for password hashing

### Frontend

- React 18
- Vite (build tool)
- React Router for navigation
- Axios for HTTP requests

## 📚 Quick Links

- [Setup Guide](./SETUP.md) - Detailed installation and configuration
- [API Documentation](./SETUP.md#-api-endpoints) - Available endpoints
- [Testing Guide](./SETUP.md#-testing) - How to test the application

## 🚀 Getting Started

### Prerequisites

- Node.js v14+
- MongoDB
- npm or yarn

### Installation

**Backend:**

```bash
cd server
npm install
cp .env.example .env
npm run dev
```

**Frontend:**

```bash
cd client
npm install
npm run dev
```

The application will be available at `http://localhost:5173`

## 📋 Current Implementation

✅ User registration and login  
✅ JWT token-based authentication  
✅ Protected API routes  
✅ Basic frontend pages (Login/Register)  
✅ MongoDB integration  
✅ Error handling and validation

## 🔄 Next Steps (Optional Features)

- Create Lost/Found item listings
- Add search and filter functionality
- Implement notifications
- Add user profiles
- Create messaging system
- Add image uploads
- Implement reviews/ratings

## 📄 Project Structure

```
Smart_Lost_&_Found_Network/
├── server/           # Backend API
│   ├── config/      # Configuration files
│   ├── models/      # Mongoose schemas
│   ├── controllers/ # Business logic
│   ├── routes/      # API routes
│   ├── middleware/  # Custom middleware
│   └── server.js    # Entry point
├── client/          # React frontend
│   ├── src/
│   │   ├── pages/  # Page components
│   │   ├── App.jsx # Main component
│   │   └── main.jsx # Entry point
│   └── index.html
├── SETUP.md         # Setup guide
└── README.md        # This file
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 📧 Support

For support, email support@smartlostfound.com or open an issue in the repository.

---

**Made with ❤️ for connecting lost items with their owners**"
