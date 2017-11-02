import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class LyricList extends Component {
  onLikeClick(lyricId, likes) {
    console.log('Liking lyric...');
    this.props.mutate({
      variables: {
        id: lyricId
      },
      optimisticResponse: {
        __typename: 'Mutation',
        likeLyric: {
          id: lyricId,
          __typename: 'LyricType',
          // what we expect
          likes: likes + 1,
        }
      }
    })
      .then(response => {
        console.log('Liked lyric successfully', response);
      });
  }

  render() {
    return (
      <div>
        {this.props.lyrics.map(({ id, content, likes }) => (
          <p key={id}>
            {content}
            <span className="badge">
              <button type="button" className="btn" onClick={() => this.onLikeClick(id, likes)}>
                {likes} <i className="material-icons right">thumb_up</i>
              </button>
            </span>
          </p>
        ))}
      </div>
    );
  }
}

const mutation = gql`
  mutation LikeLyric($id: ID) {
    likeLyric(id: $id) {
      id
      likes
    }
  }
`;

export default graphql(mutation)(LyricList);
