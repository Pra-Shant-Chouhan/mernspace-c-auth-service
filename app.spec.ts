import request from 'supertest'
import { describe, expect, it } from '@jest/globals'
import { calculateDiscountedPrice } from './src/utils.ts'
import app from './src/app.ts'

describe('App', () => {
    it('Should return correct discounted price', () => {
        const discountedPrice = calculateDiscountedPrice(100, 20)
        expect(discountedPrice).toBe(80)
    })
    it('should return 200 status code for GET /', async () => {
        const response = await request(app).get('/').send()
        expect(response.status).toBe(200)
    })
})
