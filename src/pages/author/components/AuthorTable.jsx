import React from "react";
import { Table } from "rsuite";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const GET_AUTHORS = gql`
  {
    authors {
      id
      name
      age
    }
  }
`;

const { Column, HeaderCell, Cell } = Table;

const AuthorTable = props => {
  const { loading, error, data } = useQuery(GET_AUTHORS);

  console.log("daa", data && data.authors);
  console.log("loading", loading);
  console.log("error", error);

  return (
    <div className="text-center">
      <Table virtualized height={400} data={data && data.authors}>
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
          <Cell dataKey="age" />
        </Column>

        <Column width={200} colSpan="2">
          <HeaderCell>Option</HeaderCell>
          <Cell dataKey="action" />
        </Column>
      </Table>
    </div>
  );
};

export default AuthorTable;
