import { gql } from "apollo-boost";

export const LOG_IN = gql`
  mutation requestSecret($email: String!) {
    requestSecret(email: $email)
  }
`;

export const CREATE_ACCOUNT = gql`
  mutation createAccount(
    $username: String!
    $email: String!
    $firstName: String
    $lastName: String
  ) {
    createAccount(
      username: $username
      email: $email
      firstName: $firstName
      lastName: $lastName
    )
  }
`;

export const CONFIRM_PASSWORD = gql`
  query confirmPassword($email: String!, $password: String!) {
    confirmPassword(email: $email, password: $password)
  }
`;

export const LOCAL_LOG_IN = gql`
  mutation logUserIn($token: String!) {
    logUserIn(token: $token) @client
  }
`;