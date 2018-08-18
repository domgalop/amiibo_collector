import React from "react";

import Buttons from "../components/Buttons";
const Amiibos = props => {
  return (
    <React.Fragment>
      <article className="amiibo">
        <h2>{props.character}</h2>
        <img
          className="amiibo__img"
          src={props.amiiboImg}
          alt={props.character}
        />

        <div className="amiibo__Info">
          <h3>{props.gameSeries}</h3>
          <p>
            <span>Amiibo Series</span>: {props.amiiboSeries}
          </p>
          <p>
            <span>Type:</span> {props.type}
          </p>
          <h3>Release Dates:</h3>
          <ul>
            <li>Europe: {props.releaseDateEu}</li>
            <li>US: {props.releaseDateNa}</li>
            <li>Japan: {props.releaseDateJp}</li>
          </ul>
          <div className="amiibo__Info__container">
            <Buttons
              addCol={props.addCol}
              addWish={props.addWish}
              addDel={props.addDel}
              shelf={props.shelf}
            />
          </div>
        </div>
      </article>
    </React.Fragment>
  );
};

export default Amiibos;
