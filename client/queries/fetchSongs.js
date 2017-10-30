import gql from 'graphql-tag';

// Define the graphql query using gql helper
export default gql`
  {
    songs {
      id
      title
    }
  }
`;
