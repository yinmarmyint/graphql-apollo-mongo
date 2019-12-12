import React, { useState } from "react";
import { Button, Icon } from "rsuite";
import AuthorTable from "./components/AuthorTable";
import AuthorCreateModal from "./AuthorCreateModal";

const Author = () => {
  const [isOpenCreateModal, setIsOpenCreateModal] = useState(false);
  return (
    <>
      <Button
        className="m-3"
        color="cyan"
        type="submit"
        onClick={() => setIsOpenCreateModal(true)}
      >
        <Icon icon="plus" className="mr-2" />
        <span style={{ fontSize: "15px" }}>Create New Author</span>
      </Button>
      <AuthorCreateModal
        isShow={isOpenCreateModal}
        onClose={() => {
          setIsOpenCreateModal(false);
        }}
      />
      <AuthorTable />
    </>
  );
};

export default Author;
