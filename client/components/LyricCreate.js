import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class LyricCreate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ''
    };
  }

  onSubmit(event) {
    event.preventDefault();
    console.log('Submitting lyric line...', this.state.content);

    this.props.mutate({
      variables: {
        songId: this.props.songId,
        content: this.state.content,
      },
    })
      .then(response => {
        console.log('Submitted lyric line successfully', response);

        this.setState({ content: '' });
      });
  }

  render() {
    return (
      <form onSubmit={(event) => this.onSubmit(event)}>
        <label htmlFor="content">Add line to lyrics</label>
        <input
          type="text"
          name="content"
          id="content"
          value={this.state.content}
          onChange={(event) => this.setState({ content: event.target.value })}
        />
      </form>
    );
  }
}

const mutation = gql`
  mutation AddLyricToSong($songId: ID, $content: String) {
    addLyricToSong(songId: $songId, content: $content) {
      id
      title
      lyrics {
        id
        content
      }
    }
  }
`;

export default graphql(mutation)(LyricCreate);
