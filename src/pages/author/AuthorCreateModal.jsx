import React from "react";
import { Modal } from "rsuite";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import AuthorForm from "./components/AuthorForm";

const formName = "AuthorCreateForm";

const AuthorCreateModal = props => {
  const { isShow, onClose } = props;
  // const onFormSubmit = data => {
  //   props.createTag(data, () => {
  //     props.onClose();
  //     props.reset();
  //   });
  // };
  return (
    <Modal show={isShow} onHide={onClose} size="xs">
      <Modal.Header>
        <Modal.Title>Author Create</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <AuthorForm onClose={onClose} {...props} />
      </Modal.Body>
    </Modal>
  );
};

export default connect(
  null,
  null
)(reduxForm({ form: formName })(AuthorCreateModal));
