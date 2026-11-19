import type { Request, Response } from 'express'
import { AppDataSource } from '../config/data-source.ts'

interface UserData {
    firstName: string
    lastName: string
    email: string
    password: string
}
interface RegisterUserRequest extends Request {
    body: UserData
}
export class AuthController {
    async register(req: RegisterUserRequest, res: Response) {
        const { firstName, lastName, email, password } = req.body

        const userRepository = AppDataSource.getRepository('User')
        await userRepository.save({
            firstName,
            lastName,
            email,
            password,
        })
        res.status(201).json({
            message: 'User registered successfully',
            // user: req.body,
        })
    }
}
