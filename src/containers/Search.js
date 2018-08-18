import React, { Component } from "react";
import { Link } from "react-router-dom";
class Search extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <form role="search">
          <fieldset>
            <div className="searchFilters">
              <div aria-label="Select character">
                <label for="sauce">Game Character: </label>
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
              <div aria-label="Select character">
                <label for="sauce">Amiibo Series: </label>
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
              <div aria-label="Select character">
                <label for="sauce">Game Series: </label>
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
            </div>
          </fieldset>
        </form>
      </React.Fragment>
    );
  }
}

export default Search;
