import React from "react";

const Buttons = props => {
  let className = "amiibo__info__container__button";
  let actions = {
    addCol: {
      func: props.addCol,
      text: "Add To Collection",
      ariaLabel: "Add amiibo to your Collection"
    },
    addWis: {
      func: props.addWish,
      text: "Add To WishList",
      ariaLabel: "Add amiibo to your Wishlist"
    },
    delete: {
      func: props.addDel,
      text: "Remove Amiibo from list ",
      ariaLabel: "Remove Amiibo from collection list "
    }
  };

  let buttons = "";

  switch (props.shelf) {
    case "MissingAmiibo":
      buttons = (
        <React.Fragment>
          <button
            aria-label={actions.addCol.ariaLabel}
            className={className}
            onClick={actions.addCol.func}
          >
            {actions.addCol.text}
          </button>

          <button
            aria-label={actions.addWis.ariaLabel}
            className={className}
            onClick={actions.addWis.func}
          >
            {actions.addWis.text}
          </button>
        </React.Fragment>
      );
      break;

    case "Collection":
      buttons = (
        <React.Fragment>
          <button
            aria-label={actions.delete.ariaLabel}
            className={className}
            onClick={actions.delete.func}
          >
            {actions.delete.text}
          </button>

          <button
            aria-label={actions.addWis.ariaLabel}
            className={className}
            onClick={actions.addWis.func}
          >
            {actions.addWis.text}
          </button>
        </React.Fragment>
      );
      break;

    case "WishList":
      buttons = (
        <React.Fragment>
          <button
            aria-label={actions.delete.ariaLabel}
            className={className}
            onClick={actions.delete.func}
          >
            {actions.delete.text}
          </button>

          <button
            aria-label={actions.addCol.ariaLabel}
            className={className}
            onClick={actions.addCol.func}
          >
            {actions.addCol.text}
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
