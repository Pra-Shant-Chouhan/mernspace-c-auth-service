import request from 'supertest'
import { describe, expect, it } from '@jest/globals'
import app from '../../src/app.ts'

describe('POST /auth/register', () => {
    describe('Given all fields', () => {
        it('Should return the 201 status code.', async () => {
            //AAA

            //Arrange
            const userData = {
                firstName: 'Prashant',
                lastName: 'Chouhan',
                email: 'pch@gmail.com',
                password: 'Secret',
            }
            //Act
            const response = await request(app)
                .post('/auth/register')
                .send(userData)
            //Assert
            expect(response.statusCode).toBe(201)
        })
        it('Should return JSON with user data', async () => {
            //AAA

            //Arrange
            const userData = {
                firstName: 'Prashant',
                lastName: 'Chouhan',
                email: 'pch@gmail.com',
                password: 'Secret',
            }
            //Act
            const response = await request(app)
                .post('/auth/register')
                .send(userData)
            //Assert
            expect(response.headers['content-type']).toEqual(
                expect.stringContaining('json'),
            )
        })
    })
    describe('fields are missing', () => {})
})
