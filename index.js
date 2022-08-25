// importing the dependencies
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");

// Importing Middlewares
const { rateLimitters } = require("./middlewares");

// Importing Controller
const routes = require("./routes");

// defining the Express app
const server = express();

// adding Helmet to enhance Rest API's security
server.use(helmet());

// adding morgan to log HTTP requests
server.use(morgan("combined"));

// using express JSON
server.use(express.json());
// Body limit is 10
server.use(express.json({ limit: "100kb" }));

// enabling CORS for all requests
server.use(cors());

server.get("/", (req, res) => {
    res.status(200).send("Working Fine :) ");
});

server.use("/api/google-drive", rateLimitters.gdriveApiLimitter, routes.googleDriveToolsRoutes);

server.listen(process.env.PORT || 4000, () => {
    console.log(`Server Running on Port ${process.env.PORT || 4000}`);
});
