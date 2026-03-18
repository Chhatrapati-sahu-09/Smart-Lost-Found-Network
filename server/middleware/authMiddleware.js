const jwt = require("jsonwebtoken");

/**
 * Authentication Middleware
 * Verifies JWT token from Authorization header
 * Protects routes that require authentication
 *
 * Header format: Authorization: <token> or Authorization: Bearer <token>
 * Extracts user ID from token and adds to req.user
 */
module.exports = function (req, res, next) {
  // Extract token from Authorization header
  const token = req.headers.authorization;

  // Check if token exists
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  try {
    // Remove "Bearer " prefix if present
    const tokenToVerify = token.startsWith("Bearer ") ? token.slice(7) : token;

    const decoded = jwt.verify(tokenToVerify, process.env.JWT_SECRET);
    req.user = decoded.id;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Invalid or expired token" });
  }
};
