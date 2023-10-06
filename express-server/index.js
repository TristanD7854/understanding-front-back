const express = require('express');

const PORT = process.env.PORT || 5000;

const app = express();

app.use('/cities', require('./src/routes/cities'));

// npm run dev will print that
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.get('/', (req, res) => res.send('Hello World!'));