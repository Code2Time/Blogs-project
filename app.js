//   use Express
const express = require("express");
const morgan = require("morgan");
const app = express();

//  listen default on port (3000)
app.listen(3000);
app.use(morgan("short"));

// Reset viwe Engine

app.set("view engine", "ejs");
app.set("views", "pages");

// middle ware and static Files

app.use(express.static('public'))



// set Routing
app.get("/", (req, res) => {
  const blogsData = [
    {
      title: "Next.js",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, repellat.",
    },
    {
      title: "Java script",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, repellat.",
    },
    {
      title: "Node.js",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, repellat.",
    },
  ];

  res.render("index", { title: "Home", blogsData });
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
  res.status(404).render("404", { title: "404" });
});
