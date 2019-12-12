import React, { useState } from "react";
import { Button, Icon } from "rsuite";
import BookTable from "./components/BookTable";
import BookCreateModal from "./components/BookCreateModal";

const Book = () => {
  const [isOpenCreateModal, setIsOpenCreateModal] = useState(false);
  const [isOpenUpdateModal, setIsOpenUpdateModal] = useState(false);
  return (
    <>
      <Button
        className="m-3"
        color="cyan"
        type="submit"
        onClick={() => {
          setIsOpenCreateModal(true);
        }}
      >
        <Icon icon="plus" className="mr-2" />
        <span style={{ fontSize: "15px" }}>Create Book</span>
      </Button>
      <BookCreateModal
        isShow={isOpenCreateModal}
        onClose={() => {
          setIsOpenCreateModal(false);
        }}
      />
      <BookTable />
    </>
  );
};

export default Book;
