const express = require("express");
const app = express();
const port = process.env.port || 5000;

const categories = require("./data/categories.json");
const courses = require("./data/courses.json")

app.get("/", (req, res) => {
    res.send("API running");
});

app.get("/categories", (req, res) => {
    res.send(categories);
});

app.get("/categories/:id", (req, res) => {
    const id = req.params.id;
    const category_courses = courses.filter((i) => i.category_id === id);
    res.send(category_courses);
});

app.listen(port, () => {
    console.log("server running on port", port);
});