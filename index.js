const express = require("express");
const app = express();
const port = process.env.port || 5000;

app.get("/", (req, res) => {
    res.send("API running");
});



app.listen(port, () => {
    console.log("server running on port", port);
})