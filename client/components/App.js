import React from 'react';

const App = (props) => {
  return (
    <div className="container">
      <h1>YouSong</h1>
      {props.children}
    </div>
  );
}

export default App;
