const rateLimit = require("express-rate-limit");

// 500 Request Limit per 15 Minutes.
const gdriveApiLimitter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 500, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
    message: {
        status: "failed",
        error: "Too Many Requests",
        message: "You can only make 500 requests for every 15 minutes.",
    },
});

module.exports = { gdriveApiLimitter };
