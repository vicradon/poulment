const express = require("express");
const mongoose = require("mongoose");
const app = express();
const authRouter = require("./routes/auth");
const adminRouter = require("./routes/admin");
const farmRouter = require("./routes/farms");
const birdRouter = require("./routes/birds");
const dailyRecordRouter = require("./routes/daily-record");
const daysRouter = require("./routes/days");
const medicsRouter = require("./routes/medics");
const handleError = require("./middleware/error_handler");
const allowIfLoggedIn = require("./middleware/allowIfLoggedIn");
const init = require("./init");
require("dotenv").config();

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    init()
      .then(() => console.log("connected to mongo"))
      .catch((err) => console.error(err));
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * The order of these middleswares are important
 * The auth route is public
 */
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/admin", adminRouter);

app.use(allowIfLoggedIn);

/**
 * Add all other routes here
 */
app.use("/api/v1/farms", farmRouter);
app.use("/api/v1/birds", birdRouter);
app.use("/api/v1/daily-record", dailyRecordRouter);
app.use("/api/v1/days", daysRouter);
app.use("/api/v1/medics", medicsRouter);

app.use(handleError);
app.listen(process.env.PORT, () => {
  console.log(`Server running at http://localhost:${process.env.PORT}/`);
});
