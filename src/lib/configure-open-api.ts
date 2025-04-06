import type { AppOpenAPI } from "./types.js";


export default function configureOpenApi(app:AppOpenAPI){
    app.doc("/doc",{
        openapi: "3.0.0",
        info:{
            version: "1.0.0",
            title:"Task API"
        }
    })
}