const logger = require('../utils/logger');

function logMiddleware(req, res, next) {
    logger.info(`${req.method} request for ${req.url}`);
    next();
}


module.exports = logMiddleware;