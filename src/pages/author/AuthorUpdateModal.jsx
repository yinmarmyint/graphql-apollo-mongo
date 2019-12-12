import React from "react";
import { Modal } from "rsuite";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import _ from "lodash";
import gql from "graphql-tag";

import { useMutation } from "@apollo/react-hooks";
import AuthorForm from "./components/AuthorForm";

const formName = "AuthorUpdateForm";

export const UPDATE_AUTHOR = gql`
  mutation UpdateAuthor($id: String!, $name: String!, $age: Int!) {
    updateAuthor(id: $id, name: $name, age: $age) {
      id
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

const AuthorUpdateModal = props => {
  const [updateAuthor, { data }] = useMutation(UPDATE_AUTHOR);

  const { isShow, onClose, author } = props;

  const onFormSubmit = (values, actions) => {
    updateAuthor({
      variables: {
        id: author.id,
        ...values,
        age: _.parseInt(values.age)
      },
      refetchQueries: [{ query: GET_AUTHORS }]
    });
    props.onClose();
  };
  return (
    <Modal show={isShow} onHide={onClose} size="xs">
      <Modal.Header>
        <Modal.Title>Author Upadate</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <AuthorForm
          onClose={onClose}
          onFormSubmit={onFormSubmit}
          {...props}
        ></AuthorForm>
      </Modal.Body>
    </Modal>
  );
};

export default connect(
  null,
  null
)(reduxForm({ form: formName, enableReinitialize: true })(AuthorUpdateModal));
