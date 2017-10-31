import React, { Component } from 'react';
import { Link } from 'react-router';
import gql from 'graphql-tag';
// Integrates React with Apollo Client; used to make query
import { graphql } from 'react-apollo';

import query from '../queries/fetchSongs';

import Spinner from './Spinner';

class SongList extends Component {
  onSongDelete(songId) {
    this.props.mutate({
      variables: {
        id: songId,
      },
    })
      .then(response => {
        console.log(`Deleted song with id ${songId} successfully.`);

        this.props.data.refetch();
      })
  }

  renderItems() {
    return this.props.data.songs.map(song => (
      <li key={song.id} className="collection-item">
        <Link to={`/songs/${song.id}`}>{song.title}</Link>
        <a href="#!" className="secondary-content"><i className="material-icons" onClick={() => this.onSongDelete(song.id)}>delete</i></a>

      </li>
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

const mutation = gql`
  mutation DeleteSong($id: ID) {
    deleteSong(id: $id) {
      id
    }
  }
`;

// graphql(query) returns a function
export default graphql(mutation)(
  graphql(query)(SongList)
);
