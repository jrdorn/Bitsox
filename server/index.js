//init node express app
const path = require("path");
const express = require("express");
let PORT = process.env.PORT;
if (PORT === null || PORT === undefined || PORT === "") {
  PORT = 8000;
}
const app = express();

//Node serve files for built React app
app.use(express.static(path.resolve(__dirname, "../bitsox/build")));

//create api endpoint and handle GET requests to the /api route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from the server!" });
});

//all other GET requests return the React app
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../bitsox/build", "index.html"));
});

//listen at specified port
app.listen(PORT, () => {
  console.log(`Server listening at ${PORT}...`);
});
