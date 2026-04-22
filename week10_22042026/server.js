const express = require('express');
const app = express();

app.use(express.json());

// Home route
app.get('/', (req, res) => {
    res.send("Welcome to Express App");
});

// POST route
app.post('/data', (req, res) => {
    res.send({
        message: "Data received",
        data: req.body
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});