import React from "react";

const Amiibos = props => {
  let buttons = "";
  const buttonDel = <button onClick={props.addDel}>{props.buttonAddD}</button>;
  if (props.location === "MissingAmiibo") {
    buttons = (
      <React.Fragment>
        <button onClick={props.addCol}>{props.buttonAddC}</button>
        <button onClick={props.addWish}>{props.buttonAddW}</button>
      </React.Fragment>
    );
  } else if (props.location === "Collection") {
    buttons = (
      <React.Fragment>
        {buttonDel}
        <button onClick={props.addWish}>
          {props.buttonAddM}
          {props.moveToW}
        </button>
      </React.Fragment>
    );
  } else if (props.location === "WishList") {
    buttons = (
      <React.Fragment>
        {buttonDel}
        <button onClick={props.addCol}>
          {props.buttonAddM}
          {props.moveToC}
        </button>
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <article>
        <h2>{props.character}</h2>
        <img src={props.amiiboImg} alt="" />
        <h3>{props.gameSeries}</h3>
        <p>Amiibo Series: {props.amiiboSeries}</p>
        <p>
          Release Date: Europe: {props.releaseDateEu} Japan:{" "}
          {props.releaseDateNa} US: {props.releaseDateJp}
        </p>
        {buttons}
      </article>
    </React.Fragment>
  );
};

export default Amiibos;
