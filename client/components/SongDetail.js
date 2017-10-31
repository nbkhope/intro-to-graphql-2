import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import fetchSong from '../queries/fetchSong';


class SongDetail extends Component {
  // componentDidMount() {
  //   this.props.query({
  //     variables: {
  //       id: this.props.params.songId,
  //     },
  //   })
  //     .then(response => {
  //       console.log('Fetched song detail successfully', response);
  //     });
  // }

  render() {
    if (this.props.data.loading) {
      return <div>Loading details...</div>;
    }
    else if (this.props.data.song === null) {
      return <div>That song does not exist</div>;
    }

    return (
      <div>
        <h2>Song Details</h2>
        <strong>Title:</strong>{this.props.data.song.title}
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
