const express = require("express");
const router = express.Router();

router.post("/numbers", (req, res, next) => {
  const { number } = req.body;

  let numbers = [];

  for (let i = 0; i < number; i++) {
    let newNumber = Math.floor(Math.random() * 100);
    if (!numbers.includes(newNumber)) {
      numbers.push(newNumber);
    } else {
      i--;
    }
  }
  res.json({ numbers });
});

module.exports = router;
