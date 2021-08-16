const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, "public")));

app.get("/*", (req, res) => {
  console.log(req.url);
  switch (req.url) {
    case "/":
      res.sendFile(path.join(__dirname, "index.html"));
      console.log(__dirname);
      break;
    case "/about":
      res.sendFile(path.join(__dirname, "about.html"));
      console.log(req.url);
      break;
    case "/contact-me":
      res.sendFile(path.join(__dirname, "contact-me.html"));
      console.log(__dirname, req.url);
      break;
    default:
      res.sendFile(path.join(__dirname, "404.html"));
  }
});
app.listen(PORT, console.log(`Server started on port ${PORT}`));
