import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { CreateDietCont } from "./controllers/CreateDietCont"

export async function routes( fastify:FastifyInstance, options:FastifyPluginOptions ) {

    // test request
    fastify.get("/format", async( request:FastifyRequest, reply:FastifyReply ) => {
        let Json = "```json\n{\n  \"nome\": \"Eduardo\",\n  \"sexo\": \"Masculino\",\n  \"idade\": 25,\n  \"altura\": 1.80,\n  \"peso\": 90,\n  \"objetivo_atual\": \"Perder peso\",\n  \"nivel_atividade\": \"Iniciante\",\n  \"refeicoes\": [\n    {\n      \"horario\": \"08:00\",\n      \"nome\": \"Café da manhã\",\n      \"alimentos\": [\n        \"1 fatia de pão integral\",\n        \"1 ovo cozido\",\n        \"1 colher de sopa de azeite de oliva\",\n        \"1 banana\",\n        \"200ml de leite desnatado\"\n      ]\n    },\n    {\n      \"horario\": \"10:00\",\n      \"nome\": \"Lanche da manhã\",\n        \"alimentos\": [\n        \"1 iogurte grego natural desnatado\",\n        \"1/2 xícara de frutas vermelhas\"\n      ]\n    },\n    {\n      \"horario\": \"12:30\",\n      \"nome\": \"Almoço\",\n      \"alimentos\": [\n        \"100g de frango grelhado\",\n        \"1 xícara de arroz integral\",\n        \"1 xícara de brócolis cozido\",\n        \"Salada de folhas verdes com tomate e azeite de oliva\"\n      ]\n    },\n    {\n      \"horario\": \"15:00\",\n      \"nome\": \"Lanche da tarde\",\n      \"alimentos\": [\n        \"1 fatia de pão integral\",\n        \"1 colher de sopa de pasta de amendoim\",\n        \"1 maçã\"\n      ]\n    },\n    {\n      \"horario\": \"19:00\",\n      \"nome\": \"Jantar\",\n      \"alimentos\": [\n        \"150g de peixe assado\",\n        \"1 xícara de batata doce cozida\",\n        \"1 xícara de couve refogada\",\n        \"Salada de folhas verdes com cenoura ralada\"\n      ]\n    },\n    {\n      \"horario\": \"21:00\",\n      \"nome\": \"Lanche da noite\",\n      \"alimentos\": [\n        \"1 xícara de iogurte grego natural desnatado\"\n      ]\n    }\n  ],\n  \"suplementos\": [\n    \"Whey protein\",\n    \"Creatina\",\n    \"BCAA\"\n  ]\n}\n```"
        
        try {
            let jsonFormat = Json.replace(/```\w*\n/g, "").replace(/\n```/g, "").trim()

            return reply.send ({ data: JSON.parse(jsonFormat) })
        } catch (error) {
            console.log(error);
        }
    })

    fastify.post("/create", async( request:FastifyRequest, reply:FastifyReply ) => {
        return new CreateDietCont().handle( request, reply )
    })
}