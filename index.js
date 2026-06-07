const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('NT548 DevOps Lab 2')
})

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' })
})

app.listen(3000, () => {
  console.log('Server running on port 3000')
})
