import express from 'express'
const port = 8000

const app = express()

app.get('/', (req, res) => {
  res.send()
})

app.listen(port, () => {
  console.info(`server running on port ${port}`)
})
