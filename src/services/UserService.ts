import { Repository } from 'typeorm'
import type { UserData } from '../types/index.ts'
import type { User } from '../entities/User.ts'
import { Roles } from '../constants/index.ts'

export class UserService {
    constructor(private userRepository: Repository<User>) {}

    async create({ firstName, lastName, email, password }: UserData) {
        return this.userRepository.save({
            firstName,
            lastName,
            email,
            password,
            role: Roles.CUSTOMER,
        })
    }
}
