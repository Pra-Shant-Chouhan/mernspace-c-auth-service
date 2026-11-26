import type { NextFunction, Request, Response } from 'express'
import type { RegisterUserRequest } from '../types/index.ts'
import { UserService } from '../services/UserService.ts'
import type { Logger } from 'winston'
import { Roles } from '../constants/index.ts'

export class AuthController {
    constructor(
        private userService: UserService,
        private logger: Logger,
    ) {}
    async register(
        req: RegisterUserRequest,
        res: Response,
        next: NextFunction,
    ) {
        try {
            const { firstName, lastName, email, password } = req.body
            this.logger.debug(
                `Registering user with email: ${firstName}, ${lastName}, ${email}`,
            )
            const user = await this.userService.create({
                firstName,
                lastName,
                email,
                password,
                role: Roles.CUSTOMER, // Set the role to 'customer' when creating a new user
            })
            this.logger.info(`User created with ID: ${user.id}`)
            res.status(201).json({
                id: user.id,
            })
        } catch (error) {
            next(error)
            return
        }
    }
}
