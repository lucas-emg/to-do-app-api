require("dotenv").config();
const cors = require("cors");
const express = require("express");
const connectDB = require("./config/db.config");
const app = express();

//Connect to DB
connectDB();

// Content-Type and Cors config
app.use(express.json());
app.use(cors());

// Auth and Middleware
app.use("/auth", require("./routes/auth.routes"));
app.use(require("./middlewares/auth.middleware"));

// Common routes
app.use("/user", require("./routes/user.routes"));
app.use("/todo", require("./routes/todo.routes"));
app.use("/todolists", require("./routes/todolist.routes"));

// Exposing app
app.listen(
  process.env.PORT,
  console.log(`App is loading on port: ${process.env.PORT}`),
);
