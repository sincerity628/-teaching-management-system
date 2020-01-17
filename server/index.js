const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

// body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// authentication api
app.use("/signin", require('./route/authentication'));
// student api
app.use("/students", require('./route/student'));
// staff api
app.use("/staffs", require('./route/staff'));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log('the server is running on port 8080.'));
