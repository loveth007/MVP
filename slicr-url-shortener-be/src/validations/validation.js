const Joi = require('joi');

const linkSchemaValidator = (link) => {
    const schema = Joi.object({
        long: Joi.string().required(),
        custom: Joi.string(),
    }).unknown();
        return schema.validate(link);
    }




module.exports= linkSchemaValidator