import React from "react";
import { Link } from "react-router-dom";

const NoAmiibos = props => (
  <React.Fragment>
    <div className="initialPage">
      <h1>No Amiibos found</h1>
      <button>
        <Link to="/shelf">Add New Game</Link>
      </button>
    </div>
  </React.Fragment>
);

export default NoAmiibos;
