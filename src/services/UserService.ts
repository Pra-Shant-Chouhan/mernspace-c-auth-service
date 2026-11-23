import { Repository } from 'typeorm'
import { AppDataSource } from '../config/data-source.ts'
import type { UserData } from '../types/index.ts'
import type { User } from '../entities/User.ts'

export class UserService {
    constructor(private userRepository: Repository<User>) {}

    async create({ firstName, lastName, email, password }: UserData) {
        const userRepository = AppDataSource.getRepository('User')
        await userRepository.save({
            firstName,
            lastName,
            email,
            password,
        })
    }
}
