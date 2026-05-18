const express = require("express");
const app = express();

const memos = [
    {
        text: "買い物",
        selectedDate: "2026-5-18"
    }
];

app.get("/tasks", (req, res) => {
    res.json(memos);
});

app.listen(3000, () => {
    console.log("server start");
});