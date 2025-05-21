import { OpenAPIHono  } from '@hono/zod-openapi'
import { notFound, onError } from 'stoker/middlewares'
import { pinoLogger } from '@/middlewares/pino-logger.js'
import type { AppBindings, AppOpenAPI } from './types.js'

export default function createApp(){
    const app:AppOpenAPI = new OpenAPIHono<AppBindings>({
        strict:false
    })

    app.use(pinoLogger())
    app.notFound(notFound)
    app.onError(onError)
    return app;

}


