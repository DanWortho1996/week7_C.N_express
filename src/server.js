const express = require("express");

const app = express();

//https://localhost:5000/beetlejuice
//https://mywebsite/beetlejuice

app.use("/beetlejuice", express.static("beetlejuice"));

app.listen(5000, () => {
    console.log("Server is listening on port 5000");
});
