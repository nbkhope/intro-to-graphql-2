import React, { Component } from 'react';
import { Link } from 'react-router';
import { graphql } from 'react-apollo';

import LyricCreate from './LyricCreate';
import LyricList from './LyricList';
import fetchSong from '../queries/fetchSong';

class SongDetail extends Component {
  render() {
    const { song } = this.props.data;

    if (this.props.data.loading) {
      return <div>Loading details...</div>;
    }
    else if (song === null) {
      return <div>That song does not exist</div>;
    }

    return (
      <div>
        <Link to="/">Back</Link>
        <h2>Song Details</h2>
        <strong>Title:</strong> {song.title}
        <div className="card-panel">
          <LyricList lyrics={song.lyrics} />
          <LyricCreate songId={song.id} song={song} />
        </div>
      </div>
    );
  }
}

export default graphql(fetchSong, {
  options: (props) => {
    return {
      variables: {
        id: props.params.songId
      }
    }
  }
})(SongDetail);
