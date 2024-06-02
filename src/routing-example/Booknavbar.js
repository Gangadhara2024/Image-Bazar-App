import React from "react";
import { NavLink } from "react-router-dom";
import '../App.css';

const className = ({ isActive }) => `link ${isActive ? "active-link" : ""}`;

const Booknavbar = () => {
  return (
    <nav className="navbar">
      <NavLink className={className} to="/explore/movies">
        movies
      </NavLink>
      <NavLink className={className} to="/explore/stream">
        stream
      </NavLink>
      <NavLink className={className} to="/explore/events">
        events
      </NavLink>
      <NavLink className={className} to="/explore/plays">
        plays
      </NavLink>
      <NavLink className={className} to="/explore/sports">
        sports
      </NavLink>
      <NavLink className={className} to="/explore/activity">
        activity
      </NavLink>
    </nav>
  );
};

export default Booknavbar;
