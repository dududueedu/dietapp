import { DataProps } from "../controllers/CreateDietCont"
import { GoogleGenerativeAI } from "@google/generative-ai"

class CreateDietServ {
    async execute({ name, weight, height, age, gender, objective, level }: DataProps ){

        try {
            const geneAI = new GoogleGenerativeAI(process.env.API_KEY!)
            const model = geneAI.getGenerativeModel({ model: "gemini-1.5-flash"})
            
            const responseGenerate = await model.generateContent(`Crie uma dieta completa para uma pessoa por meio das seguintes informações: ${name}, ${gender}, ${weight}kg, 
                ${height} de altura, ${age} anos e com objetivo em ${objective}, atualmente nível de atividade: ${level}, quero que retorne em json com as respectivas propriedades, nome da pessoa, 
                sexo, idade, altura, peso, objetivo atual, propriedade refeições com uma array contendo dentro cada objeto sendo uma refeição da dieta e dentro de cada refeição a propriedade horário 
                com horário da refeição, propriedade nome com nome e a propriedade alimentos com array contendo os alimentos dessa refeição e pode incluir uma propriedade como suplementos contendo 
                array com sugestão de suplemento que é indicado para o sexo dessa pessoa e o objetivo dela e não retorne nenhuma observação alem das passadas no prompt, retorne em json e sem acentuação.`)

            console.log(JSON.stringify(responseGenerate, null, 2))

            if(responseGenerate.response && responseGenerate.response.candidates) {
                const jsonTxt = responseGenerate.response.candidates[0]?.content.parts[0].text as string;

                return { data:jsonTxt }
            }else{
                return { error:"service error" }
            }

        } catch (error) {
            console.error("fail", error)
            throw new Error("Failed Create Service")
        }
    }
}

export { CreateDietServ }