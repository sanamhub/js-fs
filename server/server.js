require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");

const databaseUrl = process.env.DATABASE_URL;
const port = process.env.PORT || 8080;

// db stuff
mongoose.connect(databaseUrl);
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

// middleware
app.use(express.json());

const subscribersRoutes = require("./routes/subscribers");
app.use("/subscribers", subscribersRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
