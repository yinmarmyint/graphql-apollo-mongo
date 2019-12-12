import React from "react";
import { Modal } from "rsuite";
import { connect } from "react-redux";
import AuthorForm from "./components/AuthorForm";
import gql from "graphql-tag";
import _ from "lodash";
import { useMutation } from "@apollo/react-hooks";

const ADD_AUTHOR = gql`
  mutation AddAuthor($name: String!, $age: Int!) {
    addAuthor(name: $name, age: $age) {
      name
      age
    }
  }
`;

const GET_AUTHORS = gql`
  {
    authors {
      id
      name
      age
    }
  }
`;
const AuthorCreateModal = props => {
  const [addAuthor, { data }] = useMutation(ADD_AUTHOR);
  console.log("data>>>>", data);

  console.log(addAuthor);
  const { isShow, onClose } = props;

  const onFormSubmit = (values, actions) => {
    console.log(values);
    addAuthor({
      variables: { ...values, age: _.parseInt(values.age) },
      refetchQueries: [{ query: GET_AUTHORS }]
    });
    props.onClose();
  };
  return (
    <Modal show={isShow} onHide={onClose} size="xs">
      <Modal.Header>
        <Modal.Title>Author Create</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <AuthorForm onFormSubmit={onFormSubmit} onClose={onClose} />
      </Modal.Body>
    </Modal>
  );
};

export default connect(null, null)(AuthorCreateModal);
