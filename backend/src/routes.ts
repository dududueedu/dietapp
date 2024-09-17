import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { CreateDietCont } from "./controllers/CreateDietCont"

export async function routes( fastify:FastifyInstance, options:FastifyPluginOptions ) {

    fastify.get("/create", async( request:FastifyRequest, reply:FastifyReply ) => {
        return new CreateDietCont().handle( request, reply )
    })

    fastify.post("/create", async( request:FastifyRequest, reply:FastifyReply ) => {
        return new CreateDietCont().handle( request, reply )
    })
}