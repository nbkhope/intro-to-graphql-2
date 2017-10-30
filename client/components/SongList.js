import React, { Component } from 'react';
import { Link } from 'react-router';
// Integrates React with Apollo Client; used to make query
import { graphql } from 'react-apollo';

import query from '../queries/fetchSongs';

import Spinner from './Spinner';

class SongList extends Component {
  renderItems() {
    return this.props.data.songs.map(song => (
      <li key={song.id} className="collection-item">{song.title}</li>
    ));
  }

  render() {
    if (this.props.data.loading) {
      return <Spinner />;
    }

    return (
      <div>
        <ul className="collection">
          {this.renderItems()}
        </ul>

        <Link to="/songs/new" className="btn-floating btn-large red right">
          <i className="material-icons">add</i>
        </Link>
      </div>
    );
  }
}

// graphql(query) returns a function
export default graphql(query)(SongList);
