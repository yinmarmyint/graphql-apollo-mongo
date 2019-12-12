import React, { useState } from "react";
import { Table, Icon, IconButton } from "rsuite";
import { connect } from "react-redux";
import { useQuery } from "@apollo/react-hooks";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { push } from "../../../services/router/routerAction";
import DeleteModal from "../../../components/modal/DeleteModal";
import BookUpdateModal from "./BookUpdateModal";

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
const DELETE_BOOK = gql`
  mutation DeleteBook($id: String!) {
    deleteBook(id: $id) {
      id
    }
  }
`;

const { Column, HeaderCell, Cell } = Table;

const FrequencyTable = props => {
  const { loading, data } = useQuery(GET_BOOKS, {
    variables: {
      type: "TOP",
      offset: 0,
      limit: 10
    }
  });
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [isOpenUpdateModal, setIsOpenUpdateModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState();
  const [deleteBook] = useMutation(DELETE_BOOK);

  const onDelete = values => {
    deleteBook({
      variables: { id: values },
      refetchQueries: [{ query: GET_BOOKS }]
    });
  };

  return (
    <div className="text-center">
      <Table virtualized height={400} data={data && data.books}>
        <Column width={100} align="center" fixed>
          <HeaderCell>Id</HeaderCell>
          <Cell dataKey="id" />
        </Column>

        <Column width={150}>
          <HeaderCell>Name</HeaderCell>
          <Cell dataKey="name" />
        </Column>

        <Column width={150}>
          <HeaderCell>Age</HeaderCell>
          <Cell dataKey="genre" />
        </Column>
        <Column width={150}>
          <HeaderCell>Author Name</HeaderCell>
          <Cell>{rowData => rowData.author && rowData.author.name}</Cell>
        </Column>
        <Column width={200} colSpan="2">
          <HeaderCell>Option</HeaderCell>
          <Cell>
            {rowData => (
              <>
                <IconButton
                  icon={<Icon icon="edit" />}
                  className="mr-4"
                  appearance="ghost"
                  size="xs"
                  onClick={() => {
                    // props.push(`/books/${rowData.id}`);
                    setIsOpenUpdateModal(true);
                  }}
                  style={{ cursor: "pointer" }}
                />
                <IconButton
                  icon={<Icon icon="trash" />}
                  className="mr-4"
                  appearance="ghost"
                  size="xs"
                  onClick={() => {
                    setIsOpenDeleteModal(true);
                    setSelectedBook(rowData);
                  }}
                  style={{ cursor: "pointer" }}
                />
              </>
            )}
          </Cell>
        </Column>
      </Table>
      <DeleteModal
        isShow={isOpenDeleteModal}
        onClose={() => setIsOpenDeleteModal(false)}
        onDelete={() => onDelete(selectedBook.id)}
      />
      <BookUpdateModal
        initialValues={data}
        isShow={isOpenUpdateModal}
        onClose={() => setIsOpenUpdateModal(false)}
      />
    </div>
  );
};

export default connect(null, { push })(FrequencyTable);
