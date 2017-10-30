import React from 'react';
import { Link } from 'react-router';

const Header = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#" className="brand-logo center">YouSong</a>
        <ul id="nav-mobile" className="left hide-on-small-only">
          <li><Link to="/">Songs</Link></li>
          <li><Link to="/songs/new">New Song</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
