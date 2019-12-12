import gql from "graphql-tag";

export const GET_BOOKS = gql`
  {
    books {
      id
      name
      genre
      author {
        name
      }
    }
  }
`;

export const ADD_BOOK = gql`
  mutation AddBook($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      genre
      author {
        name
      }
    }
  }
`;

export const DELETE_BOOK = gql`
  mutation deleteBook($id: String!) {
    deleteBook(id: $id) {
      _id
      name
      genre
    }
  }
`;
