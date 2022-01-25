//init node express app
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

//create api endpoint
app.get("/api", (req, res) => {
  res.json({ message: "Hello from the server!" });
});

//listen at specified port
app.listen(PORT, () => {
  console.log(`Server listening at ${PORT}...`);
});
