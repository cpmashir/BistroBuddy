// server.js
const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());

let users = [];

// Endpoint to register a user
app.post('/register', (req, res) => {
    const user = req.body;
    users.push(user);
    res.send({ message: 'User registered successfully!', user });
});

// Endpoint to find a food partner
app.get('/match', (req, res) => {
    const { foodPreference, location } = req.query;
    const match = users.find(user => user.foodPreference === foodPreference && user.location === location);
    res.send(match ? { match } : { message: 'No match found.' });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
