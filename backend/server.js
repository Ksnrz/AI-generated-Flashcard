const express = require("express");
const app = express();
const cors = require("cors");
const corsOptions = {
  origin: ["https://localhost:5173"],
};
const PORT = 5000;

app.use(cors(corsOptions));

app.listen(PORT, () => {
  console.log(`Server Running on http://localhost:${PORT}`);
});

app.get("/api", (req, res) => {
  res.send("Hello Express");
});
