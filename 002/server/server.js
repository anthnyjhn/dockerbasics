const express = require('express');
const app = express();
const cors = require('cors')

app.use(cors());

app.get("/status", (req, res) => {
    res.json({ status: true }).status(200);
})

app.listen(3000, () => {
    console.log("listening to port: http://localhost:3000");
})