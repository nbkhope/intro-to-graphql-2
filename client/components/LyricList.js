import React, { Component } from 'react';

class LyricList extends Component {
  render() {
    return (
      <div>
        {this.props.lyrics.map(({ id, content }) => (
          <p key={id}>{content}</p>
        ))}
      </div>
    );
  }
}

export default LyricList;
