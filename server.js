const express = require("express");

const app = express();

// middleware
app.use(express.json());

// serve static frontend files
app.use(express.static("public"));

// fake checkout endpoint
app.post("/checkout", (req, res) => {
  console.log("Order received:", req.body);

  res.json({
    success: true,
    message: "Order confirmed!"
  });
});

// port
const PORT = process.env.PORT || 8080;

// start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});