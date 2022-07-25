import { InvalidTokenError, MissedTokenError } from "@/shared/errors"
import { NextFunction, Request, Response } from "express"
import jwt from "jsonwebtoken"
import { AUTH_SECRET } from "@/config/auth"

export const ensureIsAuthenticated = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization
    if(!token) {
        throw new MissedTokenError
    }

    try {
        jwt.verify(token,AUTH_SECRET)
    } catch (error) {
        throw new InvalidTokenError
    }
    
    next()
}