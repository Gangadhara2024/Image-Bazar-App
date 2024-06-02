import React from "react";
import {
  BrowserRouter,
  Link,
  NavLink,
  Outlet,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import "../App.css";

const Layout = () => {
  const location = useLocation();
  console.log(location);

  return (
    <div>
      {/* <nav>
        <div>
          <Link
            to="/user/home"
            style={{
              color: location.pathname === "/user/home" ? "red" : "",
            }}
          >
            Home
          </Link>
        </div>
        <div>
          <Link
            to="/user/about"
            style={{
              color: location.pathname === "/user/about" ? "red" : "",
            }}
          >
            About
          </Link>
        </div>
      </nav> */}

      <nav>
        <div>
          <NavLink
            to="/user/home"
            className={({ isActive }) => (isActive ? "active-link" : "link")}
          >
            home navlink
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/user/about"
            className={({ isActive }) => (isActive ? "active-link" : "link")}
          >
            about navlink
          </NavLink>
        </div>
        {/* navlink takes className and takes callback function and we can style the link*/}
      </nav>
      <Outlet />
      {/* outlet defined nested components    */}
    </div>
  );
};

const RoutingApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="user" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<h3>retry oh!!</h3>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RoutingApp;
