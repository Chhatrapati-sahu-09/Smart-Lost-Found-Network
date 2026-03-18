const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);
const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const badRequest = (res, msg) => res.status(400).json({ msg });
const serverError = (res) => res.status(500).json({ msg: "Server error" });

/**
 * REGISTER - Creates a new user account with hashed password
 * POST /api/auth/register
 * @param {string} name - User's full name
 * @param {string} email - Unique email address
 * @param {string} password - Plain password (will be hashed)
 * Returns: Success message or error
 */
exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const cleanName = typeof name === "string" ? name.trim() : null;
    const cleanEmail = typeof email === "string" ? email.trim().toLowerCase() : null;

    if (!cleanName || !cleanEmail || !password) {
      return badRequest(res, "Name, email and password are required");
    }

    if (!isValidEmail(cleanEmail)) {
      return badRequest(res, "Please enter a valid email");
    }

    if (password.length < 6) {
      return badRequest(res, "Password must be at least 6 characters");
    }

    // Check if user exists (case-insensitive email lookup)
    const userExists = await User.findOne({
      email: new RegExp(`^${escapeRegex(cleanEmail)}$`, "i"),
    });
    if (userExists) {
      return badRequest(res, "User already exists");
    }

    // Hash password
    const hashed = await bcrypt.hash(password, 10);

    // Create user
    await User.create({
      name: cleanName,
      email: cleanEmail,
      password: hashed,
    });

    res.status(201).json({ msg: "User registered successfully" });
  } catch (err) {
    serverError(res);
  }
};

/**
 * LOGIN - Authenticates user and returns JWT token
 * POST /api/auth/login
 * @param {string} email - User's email address
 * @param {string} password - User's password (compared with hash)
 * Returns: JWT token (expires in 7 days) and user data
 */
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const cleanEmail = typeof email === "string" ? email.trim().toLowerCase() : null;

    if (!cleanEmail || !password) {
      return badRequest(res, "Email and password are required");
    }

    if (!isValidEmail(cleanEmail)) {
      return badRequest(res, "Please enter a valid email");
    }

    // Find user (case-insensitive email lookup)
    const user = await User.findOne({
      email: new RegExp(`^${escapeRegex(cleanEmail)}$`, "i"),
    });
    if (!user) {
      return badRequest(res, "Invalid email or password");
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return badRequest(res, "Invalid email or password");
    }

    // Generate token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.json({
      token,
      user: { id: user._id, name: user.name, email: user.email },
    });
  } catch (err) {
    serverError(res);
  }
};
