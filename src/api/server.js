// eslint-disable-next-line no-undef
const express = require('express')

const app = express()

const baseDir = `./build/`

app.use(express.static(`${baseDir}`))

app.get('*', (req, res) => res.sendFile('index.html', { root: baseDir }))

const port = 3333

app.listen(port, () =>
  console.log(`Servidor subiu com http://localhost:${port}`),
)
