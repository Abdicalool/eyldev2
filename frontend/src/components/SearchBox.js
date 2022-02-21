import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./Header.css";

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
  };

  return (
    <form onSubmit={submitHandler} className="form__fo">
      <input
        className="header_searchInput"
        type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search Products..."
      />

      <Button
        hidden={true}
        type="submit"
        variant="outline-success"
        className="p-2"
      >
        Search
      </Button>
    </form>
  );
};

export default SearchBox;
