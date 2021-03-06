import { Request, Response } from 'express';
import User from '../models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

class AuthController {
    public async login(req: Request, res: Response): Promise<Response> {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).send();
        }

        const user = await User.findOne({
            email,
        }).select('+password');

        if (!user) {
            return res.status(404).send();
        }

        bcrypt.compare(password, user.password, (err, success) => {
            if (err) {
                return res.status(400).send();
            }

            if (success) {
                const token = jwt.sign(
                    {
                        id: user._id,
                    },
                    process.env['JWT_SECRET']
                );

                user.password = undefined;

                return res.json({
                    token,
                    user,
                });
            }

            return res.status(401).json({ error: 'Senha não coincide' });
        });
    }

    public async logout(req: Request, res: Response): Promise<Response> {
        return;
    }
}

export default new AuthController();
