const express = require("express");
const router = express.Router();
const cheerio = require("cheerio");
const axios = require("axios");
const Stack = require("../util/Stack");

let urlStack = Stack();

axios.get("https://www.awwwards.com/websites/clean/").then(response => {
  let $ = cheerio.load(response.data);

  $("figure.rollover").each((i, element) => {
    const imageUrl = $(element)
      .find("img")
      .attr("data-srcset")
      .split(",")[1]
      .split(" ")[1];

    urlStack.push(imageUrl);
  });
});

router.get("/pop", (req, res) => {
  res.send(urlStack.pop());
});

router.get("/peek", (req, res) => {
  res.send(urlStack.peek());
});

module.exports = router;
