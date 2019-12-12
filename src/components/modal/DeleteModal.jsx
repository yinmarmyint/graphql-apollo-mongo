import React from "react";
import { Modal, Button, Icon } from "rsuite";

const DeleteModal = props => {
  const { isShow, onClose, onDelete } = props;

  return (
    <Modal show={isShow} onHide={onClose} size="xs">
      <Modal.Header>
        <Modal.Title>
          <Icon icon="trash" className="pr-2" />
          Delete!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure you want to delete it?</Modal.Body>
      <Modal.Footer>
        <Button onClick={onClose} appearance="subtle">
          Cancel
        </Button>
        <Button
          onClick={() => {
            onDelete();
            onClose();
          }}
          appearance="primary"
        >
          Ok
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteModal;
