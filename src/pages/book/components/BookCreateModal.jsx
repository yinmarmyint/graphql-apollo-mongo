import React from "react";
import { Modal } from "rsuite";
import BookForm from "./BookForm";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";

const ADD_BOOK = gql`
  mutation AddBook($name: String!, $genre: GenreType!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      genre
      author {
        id
        name
      }
    }
  }
`;

const GET_BOOKS = gql`
  {
    books {
      id
      name
      genre
      author {
        id
        name
      }
    }
  }
`;

const BookCreateModal = props => {
  const { isShow, onClose } = props;
  const [addBook] = useMutation(ADD_BOOK);
  const onFormSubmit = (values, action) => {
    console.log("values", values);
    addBook({
      variables: { ...values },
      refetchQueries: [{ query: GET_BOOKS }]
    });
    props.onClose();
  };

  return (
    <Modal show={isShow} onHide={onClose} size="xs">
      <Modal.Header>
        <Modal.Title>Book Create</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <BookForm onClose={onClose} onFormSubmit={onFormSubmit} />
      </Modal.Body>
    </Modal>
  );
};

export default BookCreateModal;
