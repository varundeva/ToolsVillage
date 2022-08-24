const express = require("express");
const { getDriveDownloadLink } = require("../controller/googleDriveToolsController");

const gDriveRoutes = express.Router();

gDriveRoutes.post("/direct-download", getDriveDownloadLink);

module.exports = gDriveRoutes;
