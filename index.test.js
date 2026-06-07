const request = require('supertest')
const express = require('express')

const app = express()
app.get('/', (req, res) => res.send('NT548 DevOps Lab 3'))
app.get('/health', (req, res) => res.status(200).json({ status: 'ok' }))

test('GET / returns correct message', async () => {
  const res = await request(app).get('/')
  expect(res.statusCode).toBe(200)
  expect(res.text).toBe('NT548 DevOps Lab 3')
})

test('GET /health returns ok', async () => {
  const res = await request(app).get('/health')
  expect(res.statusCode).toBe(200)
  expect(res.body.status).toBe('ok')
})
