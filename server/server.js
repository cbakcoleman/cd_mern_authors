const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8000;
const DB = "cd_authors_db";

// MIDDLEWARE
app.use(cors());
app.use(express.json(), express.urlencoded({extended: true}));

// START THE SERVER
app.listen(PORT, () => console.log(`Server is up on port: ${PORT}`))