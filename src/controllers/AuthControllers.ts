import type { Request, Response } from 'express'
import { AppDataSource } from '../config/data-source.ts'
import type { RegisterUserRequest } from '../types/index.ts'
import { UserService } from '../services/UserService.ts'

export class AuthController {
    userService: UserService
    constructor(userService: UserService) {
        this.userService = userService
    }
    async register(req: RegisterUserRequest, res: Response) {
        const { firstName, lastName, email, password } = req.body

        await this.userService.create({ firstName, lastName, email, password })

        res.status(201).json({
            message: 'User registered successfully',
            user: req.body,
        })
    }
}
