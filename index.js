const express = require("express");
const app = express();

app.get("/user", (req, res) => {
    const username = req.query.username;

    const query = "SELECT * FROM users WHERE name = '" + username + "'";

    db.query(query, (err, result) => {
        res.send(result);
    });
});
