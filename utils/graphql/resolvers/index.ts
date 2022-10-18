import { prismaCliente } from "../../../config/prismaCliente"


const resolvers = {
    Query:{
        users: async () => await prismaCliente.user.findMany(),
        eventos: async () => await prismaCliente.evento.findMany()
    }
}

export { resolvers }