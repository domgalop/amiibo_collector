import React from "react";

const Buttons = props => {
  let actions = {
    addCol: { func: props.addCol, text: "Add To Collection" },
    addWis: { func: props.addWish, text: "Add To WishList" },
    delete: { func: props.addDel, text: "Delete Amiibo " }
  };
  let buttons = "";
  switch (props.shelf) {
    case "MissingAmiibo":
      buttons = (
        <React.Fragment>
          <button
            className="amiibo__info__container__button"
            onClick={actions.addCol.func}
          >
            {" "}
            {actions.addCol.text}{" "}
          </button>
          <button
            onClick={actions.addWis.func}
            className="amiibo__info__container__button"
          >
            {" "}
            {actions.addWis.text}{" "}
          </button>
        </React.Fragment>
      );
      break;
    case "Collection":
      buttons = (
        <React.Fragment>
          <button
            onClick={actions.delete.func}
            className="amiibo__info__container__button"
          >
            {" "}
            {actions.delete.text}{" "}
          </button>
          <button
            onClick={actions.addWis.func}
            className="amiibo__info__container__button"
          >
            {" "}
            {actions.addWis.text}{" "}
          </button>
        </React.Fragment>
      );
      break;
    case "WishList":
      buttons = (
        <React.Fragment>
          <button
            onClick={actions.delete.func}
            className="amiibo__info__container__button"
          >
            {" "}
            {actions.delete.text}{" "}
          </button>
          <button
            onClick={actions.addCol.func}
            className="amiibo__info__container__button"
          >
            {" "}
            {actions.addCol.text}{" "}
          </button>
        </React.Fragment>
      );
      break;
    default:
      break;
  }

  return <React.Fragment>{buttons}</React.Fragment>;
};

export default Buttons;
