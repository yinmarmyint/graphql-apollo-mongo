import React from "react";
import { Table } from "rsuite";
import { connect } from "react-redux";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const GET_BOOKS = gql`
  {
    books {
      id
      name
      genre
    }
  }
`;

const { Column, HeaderCell, Cell } = Table;

const FrequencyTable = props => {
  const { loading, error, data } = useQuery(GET_BOOKS);

  console.log("daa", data && data.books);
  console.log("loading", loading);
  console.log("error", error);

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

        <Column width={200} colSpan="2">
          <HeaderCell>Option</HeaderCell>
          <Cell dataKey="action" />
        </Column>
      </Table>
    </div>
  );
};

export default connect(null, null)(FrequencyTable);
