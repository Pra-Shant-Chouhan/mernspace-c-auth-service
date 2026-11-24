import request from 'supertest'
import {
    afterAll,
    beforeAll,
    beforeEach,
    describe,
    expect,
    it,
} from '@jest/globals'
import app from '../../src/app.ts'
import { DataSource } from 'typeorm'
import { AppDataSource } from '../../src/config/data-source.ts'
import { truncateTables } from '../utils/index.ts'

describe('POST /auth/register', () => {
    let connection: DataSource
    //Arrange
    const userData = {
        firstName: 'Prashant',
        lastName: 'Chouhan',
        email: 'pch@gmail.com',
        password: 'Secret',
    }
    beforeAll(async () => {
        connection = await AppDataSource.initialize()
    })

    beforeEach(async () => {
        //Database truncate
        await truncateTables(connection)
    })

    afterAll(async () => {
        if (connection?.isInitialized) {
            await connection.destroy()
        }
    })
    describe('Given all fields', () => {
        it('Should return the 201 status code.', async () => {
            //AAA

            // Arrange
            // userData is defined at describe level

            //Act
            const response = await request(app)
                .post('/auth/register')
                .send(userData)
            //Assert
            expect(response.statusCode).toBe(201)
        })
        it('Should return JSON with user data', async () => {
            //AAA

            // Arrange
            // userData is defined at describe level

            //Act
            const response = await request(app)
                .post('/auth/register')
                .send(userData)
            //Assert
            expect(response.headers['content-type']).toEqual(
                expect.stringContaining('json'),
            )
        })
        it('should persist the user in the database', async () => {
            //AAA

            //1.  Arrange
            // userData is defined at describe level

            //2. Act
            const response = await request(app)
                .post('/auth/register')
                .send(userData)
            //3. Assert
            const userRepository = connection.getRepository('User')
            const users = await userRepository.find()
            expect(users).toHaveLength(1)
            expect(users[0].email).toBe(userData.email)
            expect(users[0].firstName).toBe(userData.firstName)
            expect(users[0].lastName).toBe(userData.lastName)
            expect(users[0].password).toBe(userData.password)
            // const user = await userRepository.findOneBy({
            //     email: userData.id,
            // })
            // expect(user).not.toBeNull()
        })
        it.todo('it should return user id')
        it('should assign a customer role', async () => {
            //AAA

            // Arrange
            // userData is defined at describe level

            //Act
            await request(app).post('/auth/register').send(userData)
            //Assert
            const userRepository = connection.getRepository('User')
            const users = await userRepository.find()
            expect(users).toHaveLength(1)
            expect(users[0].role).toBe('customer')
        })
    })
    describe('fields are missing', () => {})
})
