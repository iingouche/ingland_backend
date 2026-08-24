const express = require('express');
const app = express();

const wordRoutes = require('./src/routes/word_route');

app.use('/api', wordRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the Ingland API');
});

const PORT = process.env.APP_PORT;
const HOST = process.env.APP_HOST;

app.listen(HOST, PORT, () => {
    console.log(`Server is running on port http://${HOST}:${PORT}`);
});

app.use(express.json());