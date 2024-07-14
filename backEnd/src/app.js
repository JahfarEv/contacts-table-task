const express = require('express');
const app = express();
const cors = require('cors');
const authRouter = require('./routes/authRouter');
const contactRouter = require('./routes/contactRouter');

app.use(cors())
app.use(express.json())

app.use("/api/user",authRouter)
app.use("/api",contactRouter)


module.exports = app