import fastify from "fastify"
import cors from "@fastify/cors"
import { registerRoutes } from "./router.js"

export const app = fastify({logger: true})

await app.register(cors)
await registerRoutes(app)

try {
    await app.listen({port:3333})
} catch (err){
    app.log.error(err)
}