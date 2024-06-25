const express = require('express');
const jokeRoute = require('./routes/joke');

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/joke', jokeRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
