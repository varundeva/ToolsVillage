const express = require("express");
const { googleDriveToolsController } = require("../controllers/");

const gDriveRoutes = express.Router();

gDriveRoutes.post("/direct-download", googleDriveToolsController.getDriveDownloadLink);

module.exports = gDriveRoutes;
