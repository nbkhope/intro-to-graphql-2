import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class SongCreate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onTitleChange(event) {
    this.setState({ title: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h2>Create Song</h2>

        <form onSubmit={this.onSubmit}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={this.state.title}
            onChange={this.onTitleChange}
          />
          <button type="submit">Create</button>
        </form>
      </div>
    );
  }
}

// const mutation = gql`
//   mutation {
//     addSong(title: $title) {
//       id
//       title
//     }
//   }
// `;

export default SongCreate;
