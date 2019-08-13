import { gql } from "apollo-boost";

export const SEE_USER = gql`{
  seeUser{
    email
    username
    avatar
    rooms{
        id
        roomName
    }
  }
}
`;
