import { InvalidTokenError, MissingTokenError } from "@/shared/errors"
import { NextFunction, Request, Response } from "express"
import jwt from "jsonwebtoken"
import { AUTH_SECRET } from "@/config/auth"

export const ensureIsAuthenticated = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization
    if(!token) {
        throw new MissingTokenError
    }

    try {
        jwt.verify(token,AUTH_SECRET)
    } catch (error) {
        throw new InvalidTokenError
    }
    
    next()
}