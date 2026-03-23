const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    // Remove legacy index left from older schema versions.
    // It can cause duplicate key errors on register because username is no longer used.
    try {
      const usersCollection = mongoose.connection.collection("users");
      const indexes = await usersCollection.indexes();
      const hasLegacyUsernameIndex = indexes.some(
        (index) => index.name === "username_1",
      );

      if (hasLegacyUsernameIndex) {
        await usersCollection.dropIndex("username_1");
        console.log("Removed legacy users.username_1 index");
      }
    } catch (indexErr) {
      console.warn(
        "Could not verify/drop legacy user indexes:",
        indexErr.message,
      );
    }

    console.log("MongoDB Connected");
  } catch (err) {
    console.log("Database Connection Error:", err);
    process.exit(1);
  }
};

module.exports = connectDB;
