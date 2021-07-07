const express = require('express')
const app = express()

app.post('/webhooks/orders/create', (req, res) => {
  console.log('🎉 We got an order!')
  res.sendStatus(200)
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))