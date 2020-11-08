import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export default function AuthMiddleware(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const header = req.headers['authorization'];
    const parts = header.split(' ');

    if (parts.length !== 2) {
        res.status(401).send({
            error: 'Invalid token',
        });
    }

    const [, token] = parts;

    jwt.verify(token, 'JWTSECRET', (err, decoded) => {
        if (err) {
            res.status(401).send({
                error: 'Invalid token',
            });
        }

        res.locals['user'] = decoded;
        next();
    });
}