import React, { Component } from 'react';
import gql from 'graphql-tag';
// Integrates React with Apollo Client; used to make query
import { graphql } from 'react-apollo';

import Spinner from './Spinner';

class SongList extends Component {
  renderItems() {
    return this.props.data.songs.map(song => (
      <li className="collection-item">{song.title}</li>
    ));
  }

  render() {
    if (this.props.data.loading) {
      return <Spinner />;
    }

    return (
      <ul className="collection">
        {this.renderItems()}
      </ul>
    );
  }
}

// Define the graphql query using gql helper
const query = gql`
  {
    songs {
      title
    }
  }
`;

// graphql(query) returns a function
export default graphql(query)(SongList);
