import Fastify from "fastify";
import cors from "@fastify/cors";
import dotenv from "dotenv";
import { routes } from "./routes"

const backend = Fastify({ logger: true })
dotenv.config()

backend.setErrorHandler((error, request, reply) => {
    reply.code(400).send({ Message:error.message })
})

const start = async () => {
    backend.register(cors)
    backend.register(routes)

    try {
        await backend.listen({ port:3131, host:"0.0.0.0" })
        console.log("server running in port: 3131")
    } catch (error) {
        console.log("Puts", error)
    }
}

start()