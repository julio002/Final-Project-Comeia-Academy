import { celebrate, Joi, Segments } from "celebrate";

export const RentalCreateValidation = celebrate({
    [Segments.BODY]: Joi.object().keys({
        inventory_id: Joi.number().required(),
        customer_id: Joi.number().required(),
        staff_id: Joi.number().required(),
    })
})

export const RentalUpdateValidation = celebrate({
    [Segments.BODY]: Joi.object().keys({
        inventory_id: Joi.number(),
        customer_id: Joi.number(),
        staff_id: Joi.number(),
    })
})