import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <div>
        <h3>Knowledge</h3>
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/statistics">Statistics</Link>
        <Link to="blogs">Blogs</Link>
      </nav>
    </div>
  );
};

export default NavBar;
