const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const gDriveRoutes = require("./routes/googleDriveToolsRoutes");

const server = express();
server.use(morgan(":method :url :status :res[content-length] - :response-time ms"));

server.use(express.json());

server.use(cors());

const PORT = process.env.PORT || 4000;

server.get("/", (req, res) => {
    res.status(200).send("Working Fine :) ");
});

server.use("/api/google-drive", gDriveRoutes);

server.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`);
});
