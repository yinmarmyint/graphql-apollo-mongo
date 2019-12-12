import React from "react";
import { Modal } from "rsuite";
import BookForm from "./BookForm";

const BookUpdateModal = props => {
  const { isShow, onClose } = props;

  return (
    <Modal show={isShow} onHide={onClose} size="xs">
      <Modal.Header>
        <Modal.Title>Book Update</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <BookForm onClose={onClose} />
      </Modal.Body>
    </Modal>
  );
};

export default BookUpdateModal;
