const express = require('express');
const cors = require('cors');
const path = require('path');

const PORT = process.env.PORT || 5000;

const app = express();


// Enable cors for front
app.use(cors({origin: '*'}));


app.use('/cities', require('./src/routes/cities'));

// npm run dev will print that
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


//app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/index.html'))); // serves the html, but not the css associated
app.use(express.static("public")); // serves the folder, containing index.html AND index.css. Should not contain non-static files.