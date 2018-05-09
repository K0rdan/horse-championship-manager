import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "react-apollo";
import { ApolloClient, HttpLink, InMemoryCache } from "apollo-boost";
import Routes from "./routes";
import { unregister } from "./registerServiceWorker";

const GraphQLAPIToken = "a7c8230e9467f07ce3484f45d435a368ec30a3ef";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://api.github.com/graphql",
    headers: {
      authorization: `Bearer ${GraphQLAPIToken}`
    }
  }),
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Routes />
  </ApolloProvider>,
  document.getElementById("root")
);
unregister();
