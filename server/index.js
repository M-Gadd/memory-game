// Express App Setup
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());

// Set "Access-Control-Allow-Origin" header
app.use(
  cors({
    origin: (origin, cb) => {
      cb(null, origin && origin.startsWith("http://localhost:"));
    },
    optionsSuccessStatus: 200,
    credentials: true,
  }),
);

app.use(express.static(path.join(__dirname, "../client/build")));

app.post("/api/numbers", (req, res, next) => {
  console.log(req.body);
  const { number } = req.body;
  console.log("NUMBER: ", number);

  let numbers = [];

  for (let i = 0; i < number; i++) {
    let newNumber = Math.floor(Math.random() * 100);
    if (!numbers.includes(newNumber)) {
      numbers.push(newNumber);
    } else {
      i--;
    }
  }
  console.log("NUMBERS: ", numbers);
  res.json({ numbers });
});

app.use("/api/*", (req, res, next) => {
  let err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// For any other routes, redirect to the index.html file of React
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.listen(process.env.PORT || 5000, (err) => {
  console.log("Listening");
});
