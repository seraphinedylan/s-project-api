const express = require('express');
const axios = require('axios');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const response = await axios.get('https://api.chucknorris.io/jokes/random');
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error fetching joke');
    }
});

module.exports = router;
