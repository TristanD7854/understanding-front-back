const express = require('express');
const router = express.Router();

function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
}

const cities = [
    {
        id: 0,
        name: "New York",
    },
    {
        id: 1,
        name: "Londres",
    },
    {
        id: 2,
        name: "Paris",
    },
];

router.get("/", async (req, res) => {
    await sleep(3000);

    res.json(cities);
});

router.get("/:id", async (req, res) => {
    const id = req.params.id;
    const city = cities[id];

    await sleep(3000);

    if (city != undefined) {
        res.status(200).json(city);
    }
    else {
        res.status(404).json({ Msg: "city doesn't exist"});
    }
});

module.exports = router;
