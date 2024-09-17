import { FastifyRequest, FastifyReply } from "fastify";
import { CreateDietServ } from "../services/CreateDietServ";

export interface DataProps {
    name: string;
    weight: string;
    height: string; 
    age: string;
    gender: string;
    objective: string;
    level: string;
}

class CreateDietCont {
    async handle ( request: FastifyRequest, reply:FastifyReply ){

        const { name, weight, height, age, gender, objective, level } = request.body as DataProps;
        const createServ = new CreateDietServ()
        const diet = await createServ.execute({
            name, weight, height, age, gender, objective, level
        })

        reply.send(diet)
    }
}

export { CreateDietCont }