import { gql } from 'apollo-server-micro';

const userShema = gql`
     type User {
        id: String
        name: String
        lastName: String
    }
    type Query {
        users: [User]!
    }
`;

export { userShema }