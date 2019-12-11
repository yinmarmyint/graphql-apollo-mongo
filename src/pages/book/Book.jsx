import React from "react";
import { Button, Icon } from "rsuite";
import BookTable from "./components/BookTable";

const Book = () => {
  return (
    <>
      <Button className="m-3" color="cyan" type="submit">
        <Icon icon="plus" className="mr-2" />
        <span style={{ fontSize: "15px" }}>Create Book</span>
      </Button>
      <BookTable />
    </>
  );
};

export default Book;
