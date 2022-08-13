import express from 'express'

const PORT = 8080
const HOST = '0.0.0.0'

const app: express.Express = express()

app.get('/', (req: express.Request, res: express.Response) => res.send('Hello World'))

app.listen(PORT, () => console.log(`Hello World from ${HOST}:${PORT}`))
