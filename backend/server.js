const express = require("express");
const pool = require("./db");
const cors = require("cors");

const app = express();
const port = 5000; // Backend server will run on port 5000

app.use(cors()); // Enable CORS so React can access the API
app.use(express.json()); // Parse incoming JSON requests

// Define a route to fetch all users from the database
app.get("/users", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM users;");
    res.json(result.rows); // Send the data as a JSON response
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
