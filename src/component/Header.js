import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

export class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <nav className="navbar navbar-expand-lg navbar-datk bg-dark">
            <div className="container-fluid">
              <a className="navbar-brand" href=" ">
                Navbar
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <NavLink
                    style = {({ isActive })=>{
                        return{
                          color : isActive ? "white" : "pink",
                        };
                  }}
                    className="nav-link active" aria-current="page" to="/">
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                    style = {({ isActive })=>{
                      return{
                        color : isActive ? "white" : "pink",
                      };
                    }}
                     className="nav-link" to="/">
                      Link
                    </NavLink>
                  </li>
                  <li className="nav-item dropdown">
                    <NavLink
                    style = {({ isActive })=>{
                      return{
                        color : isActive ? "white" : "pink",
                      };
                }}
                      className="nav-link dropdown-toggle"
                      to="/ "
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Dropdown
                    </NavLink>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <NavLink
                        style = {({ isActive })=>{
                          return{
                            color : isActive ? "white" : "pink",
                          };
                    }}
                        className="dropdown-item" to="/ ">
                          Action
                        </NavLink>
                      </li>
                      <li>
                        <NavLink 
                        style = {({ isActive })=>{
                          return{
                            color : isActive ? "white" : "pink",
                          };
                    }}
                        className="dropdown-item" to="/ ">
                          Another action
                        </NavLink>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <NavLink
                        style = {({ isActive })=>{
                          return{
                            color : isActive ? "white" : "pink",
                          };
                    }}
                        className="dropdown-item" to="/ ">
                          Something else here
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link disabled"
                      href=" "
                      tabindex="-1"
                      aria-disabled="true"
                    >
                      Disabled
                    </a>
                  </li>
                </ul>
                <form className="d-flex">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-success" type="submit">
                    Search
                  </button>
                </form>
              </div>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;
