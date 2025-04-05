import { OpenAPIHono  } from '@hono/zod-openapi'
import { notFound, onError } from 'stoker/middlewares'
import { pinoLogger } from '@/middlewares/pino-logger.js'
import type { PinoLogger } from 'hono-pino'


type AppBindings = {
    Variables: {
        logger: PinoLogger
    }
}

const app = new OpenAPIHono<AppBindings>()

app.use(pinoLogger())
app.notFound(notFound)
app.onError(onError)

app.get('/', (c) => {
    c.var.logger.info("helloooo")
  return c.text('Hello Hono!')
})

app.get("/error",(c)=>{
    throw new Error("oooooo")
})

export default app