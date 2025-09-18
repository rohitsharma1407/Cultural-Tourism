const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");


const authRoutes = require("./routes/authRoutes");


const adventureRoutes = require("./routes/adventureRoutes");
const discoverRoutes = require("./routes/discoverRoutes");
const ecoRoutes = require("./routes/ecoRoutes");
const heritageRoutes = require("./routes/heritageRoutes");
const damsLakesRoutes = require("./routes/damsLakesRoutes");
const religiousRoutes = require("./routes/religiousRoutes");
const spiritualRoutes = require("./routes/spiritualRoutes");
const museumRoutes = require("./routes/museumRoutes");
const artCultureRoutes = require("./routes/artCultureRoutes");
const ruralRoutes = require("./routes/ruralRoutes");

const app = express();
app.use(cors());
app.use(express.json());


mongoose.connect("mongodb://localhost:27017/jharkhandTourism", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/adventure", adventureRoutes);
app.use("/api/discover", discoverRoutes);
app.use("/api/eco", ecoRoutes);
app.use("/api/heritage", heritageRoutes);
app.use("/api/dams", damsLakesRoutes);
app.use("/api/religious", religiousRoutes);
app.use("/api/spiritual", spiritualRoutes);
app.use("/api/museum", museumRoutes);
app.use("/api/artculture", artCultureRoutes);
app.use("/api/rural", ruralRoutes);


app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});
