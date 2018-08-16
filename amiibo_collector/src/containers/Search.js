import React, { Component } from "react";
import { Link } from "react-router-dom";
class Search extends Component {
  render() {
    return (
      <React.Fragment>
        <Link to="/">Home</Link>
        <form role="search">
          <div className="search-control">
            <button>Search</button>
            <input
              type="search"
              id="search-amiibo"
              name="search-amiibo"
              placeholder="Search amiibo"
              aria-label="Search amiibosthrough site content"
            />
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default Search;
