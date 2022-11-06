import pkg from 'joi';
const Joi = pkg;

export const validatorSchema = Joi.object({
    username: Joi.string().min(6).required(),
});