import { celebrate, Joi, Segments } from "celebrate";

export const CustomersCreateValidation = celebrate({
    [Segments.BODY]: Joi.object().keys({
        customer_id: Joi.number().required(),
        email: Joi.string().required(),
        store_id: Joi.number().required(),
        first_name: Joi.string().required(),
        last_name: Joi.string().required(),
        address_id: Joi.number().required(),
    })
})

export const CustomersUpdateValidation = celebrate({
    [Segments.BODY]: Joi.object().keys({
        customer_id: Joi.number(),
        email: Joi.string(),
        store_id: Joi.number(),
        first_name: Joi.string(),
        last_name: Joi.string(),
        address_id: Joi.number(),
    })
})

