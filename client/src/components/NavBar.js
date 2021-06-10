import React from "react";
import { Link  } from "react-router-dom";

const Navbar =()=> {
    return (
      <div>
          <Link to="/">Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/things'>Things</Link>
          <Link to='/examples'>Examples</Link>
          <Link to='/users'>Users</Link>
          <Link to='/grades'>Grades</Link>
          <Link to='/skills'>Skills</Link>
      </div>
    );
}

export default Navbar;
