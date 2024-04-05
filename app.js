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

const blogsData=[
  {title : 'blog 1' , desc : '1 lorem impsun ....'},
  {title : 'blog 2' , desc : '2 lorem impsun ....'},
  {title : 'blog 3' , desc : '3 lorem impsun ....'}
]

  res.render("index", { title: "Home"  , blogsData});
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




