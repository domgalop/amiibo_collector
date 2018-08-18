import React from "react";

import Buttons from "../components/Buttons";
const Amiibos = props => {
  return (
    <React.Fragment>
      <article className="amiibo" role="article">
        <h2>{props.name}</h2>
        <img className="amiibo__img" src={props.amiiboImg} alt="" />

        <div className="amiibo__Info" aria-label="Amiibo information">
          <h3>{props.gameSeries}</h3>
          <p>
            <span>Amiibo Series</span>: {props.amiiboSeries}
          </p>
          <p>
            <span>Type:</span> {props.type}
          </p>
          <h3>Release Dates:</h3>
          <ul>
            <li>
              <span>Europe</span>: {props.releaseDateEu}
            </li>
            <li>
              <span>US</span>: {props.releaseDateNa}
            </li>
            <li>
              <span>Japan</span>: {props.releaseDateJp}
            </li>
          </ul>
          <div
            className="amiibo__Info__container"
            aria-label="Add amiibo to the amiibo collector"
          >
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
