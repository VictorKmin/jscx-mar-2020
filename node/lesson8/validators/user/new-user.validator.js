const Joi = require('joi');

const { EMAIL } = require('../../configs/regexp.enum');

module.exports = Joi.object().keys({
    name: Joi.string().trim().alphanum().min(2).max(50).required(),
    email: Joi.string().regex(EMAIL).max(50).required(),
    password: Joi.string().trim().min(8).required(),
    // isHandsome: Joi.boolean().optional(),
    // girls: Joi.array().items(
    //     Joi.object().keys({
    //         name: Joi.string().optional()
    //     })
    // )
    //     .optional()
    //     .when('isHandsome', { is: true, then: Joi.required() })
})
