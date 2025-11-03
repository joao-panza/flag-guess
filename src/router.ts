import type { FastifyInstance } from "fastify"
import { getRandomCountries } from "./controller/countriesController.js"

export async function registerRoutes(app: FastifyInstance) {

    app.get('/', async (req, res) => {
    return { hello: 'world' }
    })

    app.get('/game', getRandomCountries)
}