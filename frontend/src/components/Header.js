import React, { useState } from "react";
import { Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Button,
  Dropdown,
} from "react-bootstrap";
import SearchBox from "./SearchBox";
import { logout } from "../actions/userActions";
import "./Header.css";

import { Link } from "react-router-dom";

const Header = () => {
  const [selectedSearch, setSelectedSearch] = useState("Wax kasta");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <>
      <div className="ogaysis">
        <i className="fa fa-bell"></i>
        Waxaa laga dhigay maanta 30% raqiis alaabta oo dhan KA FAAIIDEYSTA!
      </div>
      <Navbar variant="white" expand="lg" collapseOnSelect>
        <Link to="/">
          <img src={require("./logo.jpeg")} className="header__logo" />
        </Link>
        <div className="header__search">
          <Dropdown className="search-selection">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {selectedSearch}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => setSelectedSearch("Wax kasta")}>
                Wax kasta
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setSelectedSearch("Raashin")}>
                Raashin
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setSelectedSearch("Dhar")}>
                Dhar
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setSelectedSearch("Electronics")}>
                Electronics
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Route render={({ history }) => <SearchBox history={history} />} />
          <Button className="search-button" variant="primary">
            Search
          </Button>{" "}
        </div>

        <div className="header__option">
          <span className="hedaer__optionLineTwo">
            <LinkContainer to="/cart">
              <Nav.Link>
                <i className="fas fa-shopping-cart"></i> Cart
              </Nav.Link>
            </LinkContainer>
          </span>
        </div>

        {userInfo ? (
          <NavDropdown title={userInfo.name} id="username">
            <LinkContainer to="/profile">
              <NavDropdown.Item>Profile</NavDropdown.Item>
            </LinkContainer>
            <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
          </NavDropdown>
        ) : (
          <LinkContainer to="/login">
            <Nav.Link>
              <i className="fas fa-user"></i> Sign In
            </Nav.Link>
          </LinkContainer>
        )}

        {userInfo && userInfo.isAdmin && (
          <NavDropdown title="Admin" id="adminmenu">
            <LinkContainer to="/admin/userlist">
              <NavDropdown.Item>Users</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/admin/productlist" style={{ color: "black" }}>
              <NavDropdown.Item>Products</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/admin/orderlist" style={{ color: "black" }}>
              <NavDropdown.Item>Orders</NavDropdown.Item>
            </LinkContainer>
          </NavDropdown>
        )}
      </Navbar>
    </>
  );
};

export default Header;
