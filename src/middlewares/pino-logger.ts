import env from "@/env.js";
import { pinoLogger as logger } from "hono-pino";
import {pino} from "pino";
import pretty from "pino-pretty";




export function pinoLogger() {
    return logger({
        pino: pino({
            level: env.LOG_LEVE
        },env.NODE_ENV === "production" ? undefined: pretty()),
        http:{
            reqId:()=>crypto.randomUUID()
        }
    })
}