const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true })).use(bodyParser.json());

const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.end();
  // res.send("Hello, welcome to Node js Developement");
});
mongoose
  .connect(process.env.MONGO_URI, {
    keepAlive: 1,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MOngoDB"))
  .catch((err) => console.log("Unable to connect to database"));

const userRouter = require("./src/routers/users");
app.use("/users", userRouter);

app.listen(port, () => {
  console.log("Server running Successfully in the port");
});
