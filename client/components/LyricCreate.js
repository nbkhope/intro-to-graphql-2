import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class LyricCreate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: '',
      loading: false,
    };
  }

  onSubmit(event) {
    event.preventDefault();
    console.log('Submitting lyric line...', this.state.content);
    this.setState({ loading: true }, () => {
      this.props.mutate({
        variables: {
          songId: this.props.songId,
          content: this.state.content,
        },
        optimisticResponse: {
          __typename: 'Mutation',
          addLyricToSong: {
            id: this.props.songId,
            title: this.props.song.title,
            lyrics: this.props.song.lyrics.concat({
              id: new Date().getTime() + Math.random(),
              content: this.state.content, likes: 0,
              __typename: 'LyricType'
            }),
            __typename: 'SongType',
          }
        }
      })
      .then(response => {
        console.log('Submitted lyric line successfully', response);

        this.setState({ content: '', loading: false });
      });
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
          disabled={this.state.loading}
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
        likes
      }
    }
  }
`;

export default graphql(mutation)(LyricCreate);
