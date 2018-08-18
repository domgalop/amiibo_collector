import React, { Component } from "react";
import { Link } from "react-router-dom";
class Search extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <form role="search">
          <fieldset>
            <button>Search Amiibo</button>
            <input
              type="search"
              id="search-amiibo"
              name="search-amiibo"
              placeholder="Mario"
              aria-label="Search amiibosthrough site content"
            />
          </fieldset>
          <div>
            <label for="sauce">Game Character</label>
            <select
              name="sauce-selector"
              id="sauce"
              required
              aria-required="true"
            >
              <option value="" disabled selected>
                --
              </option>
              <option value="">Tomates Frescos</option>
              <option value="">Ranch</option>
              <option value="">BBQ</option>
              <option value="">Alfredo</option>
            </select>
          </div>
          <div>
            <label for="sauce">Amiibo Series</label>
            <select
              name="sauce-selector"
              id="sauce"
              required
              aria-required="true"
            >
              <option value="" disabled selected>
                --
              </option>
              <option value="">Tomates Frescos</option>
              <option value="">Ranch</option>
              <option value="">BBQ</option>
              <option value="">Alfredo</option>
            </select>
          </div>
          <div>
            <label for="sauce">Game Series</label>
            <select
              name="sauce-selector"
              id="sauce"
              required
              aria-required="true"
            >
              <option value="" disabled selected>
                --
              </option>
              <option value="">Tomates Frescos</option>
              <option value="">Ranch</option>
              <option value="">BBQ</option>
              <option value="">Alfredo</option>
            </select>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default Search;
