const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

// body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// authentication api
app.use("/signin", require('./route/authentication'));


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log('the server is running on port 8080.'));
