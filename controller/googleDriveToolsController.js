const { is_url } = require("../utils/isUrlValid");

const getDriveDownloadLink = (req, res) => {
    const { driveLink } = req.body;
    const regX = /\/file\/d\/(.+)\/(.+)/;
    if (is_url(driveLink)) {
        const directLink = driveLink.replace(regX, "/uc?export=download&id=$1");
        return res.status(200).send({
            status: "success",
            data: directLink,
        });
    } else {
        return res.status(400).send({
            status: "failed",
            message: `Entered Url ${driveLink} is not Valid`,
        });
    }
};

module.exports = { getDriveDownloadLink };
