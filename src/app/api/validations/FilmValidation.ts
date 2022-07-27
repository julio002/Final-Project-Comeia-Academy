import { celebrate, Joi, Segments } from "celebrate";

export const FilmCreateValidation = celebrate({
    [Segments.BODY]: Joi.object().keys({
        film_id: Joi.number().required(),
        title: Joi.string().required(),
        description: Joi.string().required(),
        release_year: Joi.string().required(),
        language_id: Joi.number().required(),
        rental_duration: Joi.number().required(),
        rental_rate: Joi.number().required(),
        length: Joi.number().required(),
        replacemente_cost: Joi.number(),
        rating: Joi.string().required(),
    })
})

export const FilmUpdateValidation = celebrate({
    [Segments.BODY]: Joi.object().keys({
        film_id: Joi.number(),
        title: Joi.string(),
        description: Joi.string(),
        release_year: Joi.string(),
        language_id: Joi.number(),
        rental_duration: Joi.number(),
        rental_rate: Joi.number(),
        length: Joi.number(),
        replacemente_cost: Joi.number(),
        rating: Joi.string(),
    })
})