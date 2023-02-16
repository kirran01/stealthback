require("dotenv/config");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRouter = require("./routes/auth.routes");
const ticketRouter = require("./routes/ticket.routes");
const responseRouter = require("./routes/response.routes");

const app = express();
const PORT = process.env.PORT;

app.use(cors());

app.use(express.json());
app.use("/auth", authRouter);
app.use("/tickets", ticketRouter);
app.use("/response", responseRouter);

app.get("/", (req, res) => {
  res.send("Stealth server up");
});

mongoose
  .connect(process.env.MONGODB_URI)
  .then((res) => {
    console.log("//////////////// Ghibli /////////////");
    console.log("connected to --->", res.connections[0].name);
    app.listen(PORT, () => {
      console.log("Stealth backend up on-->", +PORT);
    });
  })
  .catch((err) => {
    console.log(err, "err - server");
  });
