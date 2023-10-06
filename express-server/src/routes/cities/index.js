const express = require('express');
const router = express.Router();

const cities = [
    {
        id: 0,
        name: "New York",
    },
    {
        id: 1,
        name: "Berlin",
    },
    {
        id: 2,
        name: "London",
    },
];

router.get("/", (req, res) => {
    res.json(cities);
});

router.get("/:id", (req, res) => {
    const id = req.params.id;
    const city = cities[id];

    if (city != undefined) {
        res.status(200).json(city);
    }
    else {
        res.status(404).json({ Msg: "city doesn't exist"});
    }
});

module.exports = router;
