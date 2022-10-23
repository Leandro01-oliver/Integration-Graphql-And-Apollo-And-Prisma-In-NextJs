import { prismaCliente } from "../../../config/prismaCliente"


const resolvers = {
    Query:{
        users: () => { return prismaCliente.user.findMany() },
        eventos:  () => { return prismaCliente.evento.findMany() },
        evento: (parent:string, args:{id:string}) => {
            return prismaCliente.evento.findUnique({
                where:{
                   id: Number(args.id)
                }
            })
        },
        user: (parent:string, args:{id:string}) => {
            return prismaCliente.user.findUnique({
                where:{
                   id: Number(args.id)
                }
            })
        }
    },
    Mutation:{
        createEvento: (parent:string, args:{title: String, description: String}) =>{
            return prismaCliente.evento.create({
                   data:{
                       title: String(args.title),
                       description: String(args.description)
                   }
            })
       },
        createUser: (parent:string, args:{name: String, lastName: String}) =>{
            return prismaCliente.user.create({
                data:{
                    name: String(args.name),
                    lastName: String(args.lastName)
                }
            })
        },
        updateEventoAll: (parent:string, args:{title: String, description: String}) =>{
            return prismaCliente.evento.updateMany({
                data:{
                    title: String(args.title),
                    description: String(args.description)
                }
            })
        },
        updateEventoById: (parent:string, args:{id: String, title: String, description: String}) =>{
            return prismaCliente.evento.update({
                data:{
                    title: String(args.title),
                    description: String(args.description)
                },
                where:{
                    id: Number(args.id)
                }
            })
        },
        updateUserAll: (parent:string, args:{name: String, lastName: String}) =>{
            return prismaCliente.user.updateMany({
                data:{
                    name: String(args.name),
                    lastName: String(args.lastName)
                }
            })
        },
        updateUserById: (parent:string, args:{id: String, name: String, lastName: String}) =>{
            return prismaCliente.user.update({
                data:{
                    name: String(args.name),
                    lastName: String(args.lastName)
                },
                where:{
                    id: Number(args.id)
                }
            })
        },
        deleteEventoAll: () =>{
            return prismaCliente.evento.deleteMany()
        },
        deleteEventoById: (parent:string, args:{id: String}) =>{
            return prismaCliente.evento.delete({
                where:{
                    id: Number(args.id)
                }
            })
        },
        deleteUserAll: () =>{
            return prismaCliente.user.deleteMany();
        },
        deleteUserById: (parent:string, args:{id: String}) =>{
            return prismaCliente.user.delete({
                where:{
                    id: Number(args.id)
                }
            })
        }
    }
}

export { resolvers }