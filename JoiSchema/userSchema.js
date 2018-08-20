var Joi = require('joi');

module.exports = Joi.object().keys({
    // username: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    profilePicture: Joi.any(),
});