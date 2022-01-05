const Joi = require('joi');

const Contact = Joi.object({
    email: Joi.string().email().required(),
    phoneNumber: Joi.number().required(),
    birthday: Joi.string().required(),
    weight: Joi.number().required(),
});

module.exports = { Contact };