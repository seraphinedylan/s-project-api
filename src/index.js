const express = require('express');
const cors = require('cors');
const jokeRoute = require('./routes/joke');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

// routes
app.use('/api/jokes', jokeRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
