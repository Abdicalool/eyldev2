import React from "react";
import { Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import SearchBox from "./SearchBox";
import { logout } from "../actions/userActions";
import "./Header.css";

import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <Navbar bg="dark" variant="white" expand="lg" collapseOnSelect>
      <Link to="/">
        <img
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          className="header__logo"
        />
      </Link>
      <div className="header__search">
        <Route render={({ history }) => <SearchBox history={history} />} />
      </div>

      <div className="header__option">
        <span className="hedaer__optionLineTwo">
          <LinkContainer to="/cart" style={{ color: "white" }}>
            <Nav.Link>
              <i className="fas fa-shopping-cart"></i> Cart
            </Nav.Link>
          </LinkContainer>
        </span>
      </div>

      {userInfo ? (
        <NavDropdown
          title={userInfo.name}
          id="username"
          style={{ color: "white" }}
        >
          <LinkContainer to="/profile">
            <NavDropdown.Item>Profile</NavDropdown.Item>
          </LinkContainer>
          <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
        </NavDropdown>
      ) : (
        <LinkContainer to="/login" style={{ color: "white" }}>
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
  );
};

export default Header;
