//   use Express
const express = require("express");
const app = express();

//  listen default on port (3000)
app.listen(3000);

// Reset viwe Engine

app.set("view engine", "ejs");
app.set("views", "pages");

// set Routing
app.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/blogs", (req, res) => {
  res.render("blogs", { title: "Blogs" });
});

app.get("/blogs/create-blog", (req, res) => {
  res.render("createblogs", { title: "Create Blogs" });
});

app.use((req, res) => {
  res.render("404", { title: "404" });
});
