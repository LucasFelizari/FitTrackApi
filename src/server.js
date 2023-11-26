require("express-async-errors");

const path = require("path");


const uploadConfig = require("./configs/upload");
const AppError = require("./utils/AppError");
const express = require("express");
const cors = require("cors");

const app = express();


const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));