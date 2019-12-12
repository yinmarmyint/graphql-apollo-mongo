import React, { useState } from "react";
import { Table, IconButton, Icon } from "rsuite";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import DeleteModal from "../../../components/modal/DeleteModal";
import { useMutation } from "@apollo/react-hooks";
import AuthorUpdateModal from "../AuthorUpdateModal";

const GET_AUTHORS = gql`
  {
    authors {
      id
      name
      age
    }
  }
`;
const DELETE_AUTHOR = gql`
  mutation DeleteAuthor($id: String!) {
    deleteAuthor(id: $id) {
      id
    }
  }
`;

const { Column, HeaderCell, Cell } = Table;

const AuthorTable = props => {
  const { loading, data } = useQuery(GET_AUTHORS, {
    variables: {
      type: "TOP",
      offset: 0,
      limit: 10
    }
  });
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [selectedAuthor, setSelectedAuthor] = useState();
  const [isOpenUpdateModal, setIsOpenUpdateModal] = useState(false);

  const [deleteAuthor] = useMutation(DELETE_AUTHOR);
  const onDelete = values => {
    deleteAuthor({
      variables: { id: values },
      refetchQueries: [{ query: GET_AUTHORS }]
    });
  };

  console.log("daa", data && data.authors);
  console.log("loading", loading);
  return (
    <div className="text-center">
      <Table virtualized height={700} data={data && data.authors}>
        <Column width={300} align="center" fixed>
          <HeaderCell>Id</HeaderCell>
          <Cell dataKey="id" />
        </Column>

        <Column width={200}>
          <HeaderCell>Name</HeaderCell>
          <Cell dataKey="name" />
        </Column>

        <Column width={250}>
          <HeaderCell>Age</HeaderCell>
          <Cell dataKey="age" />
        </Column>

        <Column width={200} colSpan="2">
          <HeaderCell>Option</HeaderCell>
          <Cell>
            {rowData => (
              <>
                <IconButton
                  icon={<Icon icon="info" />}
                  className="mr-4"
                  appearance="ghost"
                  size="xs"
                  onClick={() => {
                    setIsOpenUpdateModal(true);
                    setSelectedAuthor(rowData);
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
                    setSelectedAuthor(rowData);
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
        onDelete={() => onDelete(selectedAuthor.id)}
      />
      <AuthorUpdateModal
        author={selectedAuthor}
        isShow={isOpenUpdateModal}
        onClose={() => setIsOpenUpdateModal(false)}
      ></AuthorUpdateModal>
    </div>
  );
};

export default AuthorTable;
