import { OpenAPIHono  } from '@hono/zod-openapi'
import { notFound, onError } from 'stoker/middlewares'
import { pinoLogger } from './middlewares/pino-logger.js'

const app = new OpenAPIHono()

app.use(pinoLogger())
app.notFound(notFound)
app.onError(onError)

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.get("/error",(c)=>{
    throw new Error("oooooo")
})





export default app