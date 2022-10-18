import { gql } from 'apollo-server-micro';

const eventoShema = gql`
     type Evento {
        id: String
        title: String
        description: String
    }

    type Query {
        eventos: [Evento]! 
    }
`

export { eventoShema }