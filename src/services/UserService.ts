import { Repository } from 'typeorm'
import type { UserData } from '../types/index.ts'
import type { User } from '../entities/User.ts'
import { Roles } from '../constants/index.ts'
import bcrypt from 'bcrypt'

export class UserService {
    constructor(private userRepository: Repository<User>) {}

    async create({ firstName, lastName, email, password }: UserData) {
        const saltRounds = 10
        const hashedPassword = await bcrypt.hash(password, saltRounds)

        return this.userRepository.save({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            role: Roles.CUSTOMER,
        })
    }
}
