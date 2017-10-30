import React, { Component } from 'react';
import { Link, hashHistory } from 'react-router';
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
    console.log('Submitting new song with title', this.state.title);

    this.props.mutate({
      variables: {
        title: this.state.title,
      }
    })
      .then(response => {
        // response holds an object with a data property
        console.log('Song created successfully.', response);
        hashHistory.push('/');
      })
      .catch(error => {
        console.log('Failed to create song', error);
      });
  }

  render() {
    return (
      <div>
        <h2>Create Song</h2>
        <Link to="/">Back</Link>

        <form onSubmit={this.onSubmit}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={this.state.title}
            onChange={this.onTitleChange}
          />
          <button type="submit" className="btn">Create</button>
        </form>
      </div>
    );
  }
}

const mutation = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      id
      title
    }
  }
`;

export default graphql(mutation)(SongCreate);
