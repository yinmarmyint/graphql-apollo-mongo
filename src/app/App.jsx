import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { Route, BrowserRouter } from "react-router-dom";
import Author from "../pages/author/Author";
import Book from "../pages/book/Book";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql"
});

const App = () => (
  <BrowserRouter>
    <ApolloProvider client={client}>
      <div>
        <Route path="/books" component={Book} />
        <Route path="/authors" component={Author} />
      </div>
    </ApolloProvider>
  </BrowserRouter>
);

export default App;
