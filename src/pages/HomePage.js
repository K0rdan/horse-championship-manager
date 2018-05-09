import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { Header, Footer } from "./../components";

const GET_REPOSITORIES_OF_ORGANIZATION = gql`
  {
    organization(login: "nasa") {
      repositories(first: 5) {
        edges {
          node {
            id
            name
            url
            viewerHasStarred
          }
        }
      }
    }
  }
`;

const Home = () => (
  <div className="homePage">
    <Header />
    <Query query={GET_REPOSITORIES_OF_ORGANIZATION}>
      {({ data: { organization }, loading }) => {
        if (loading || !organization) {
          return <div>Loading ...</div>;
        }

        return (
          <ul>
            {organization.repositories.edges.map(({ node }) => {
              return (
                <li key={node.id}>
                  <a href={node.url}>{node.name}</a>
                </li>
              );
            })}
          </ul>
        );
      }}
    </Query>
    <Footer />
  </div>
);

export default Home;
