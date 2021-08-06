import React, { useState } from "react";
import { getdogsbyname, Paginar } from "../../../actions";
import { connect } from "react-redux";
import "./SearchBar.css";

const SearchBar = ({ getDogsbyName, paginar }) => {
  const [name, setName] = useState("");
  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    getDogsbyName(name);
    setName("");
    paginar(0);
  };
  return (
    <form className="search-box" onSubmit={(e) => handleSubmit(e)}>
      <input
        type="search"
        placeholder="Find..."
        onChange={(e) => handleChange(e)}
        value={name}
        className="search-txt"
      />
      <button className="search-btn" type="submit">
        Search
      </button>
    </form>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    getDogsbyName: (name) => dispatch(getdogsbyname(name)),
    paginar: (num) => dispatch(Paginar(num)),
  };
}

export default connect(null, mapDispatchToProps)(SearchBar);
