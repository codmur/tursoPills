import express, {Express, json } from "express"
import { corsMiddleware } from './middleware/cors'
import { userRouter } from "./routes/users"

const app: Express = express()
app.use(json())
app.use(corsMiddleware())
app.disable('x-powered-by')

app.use('/', userRouter)

const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})
