const express = require("express");
const path = require("path");
const erorrHandler = require("./middleware/erorrHandler");
const dotenv = require("dotenv").config();
const app = express();
const connectDB = require("./config/dbConnection");
const router=require("./router/userRouter")
const cors = require("cors");

const port = process.env.PORT|| 3500;
connectDB();
app.use(express.json());
app.use(cors());
app.use("/api/contacts",require("./router/contactRouter"))
app.use("/api/users",router)
app.use(erorrHandler);




app.listen(port, () => {
    console.log(`Server running in port ${port}`)
})