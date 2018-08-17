import React from "react";

import Buttons from "../components/Buttons";
const Amiibos = props => {
  return (
    <React.Fragment>
      <article>
        <h2>{props.character}</h2>
        <img src={props.amiiboImg} alt={props.character} />
        <h3>{props.gameSeries}</h3>
        <p>Amiibo Series: {props.amiiboSeries}</p>
        <p>Release Dates:</p>
        <ul>
          <li>Europe: {props.releaseDateEu}</li>
          <li>US: {props.releaseDateNa}</li>
          <li>Japan: {props.releaseDateJp}</li>
        </ul>
        <Buttons
          addCol={props.addCol}
          addWish={props.addWish}
          addDel={props.addDel}
          shelf={props.shelf}
        />
      </article>
    </React.Fragment>
  );
};

export default Amiibos;
