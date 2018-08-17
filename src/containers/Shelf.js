import React from "react";
import Amiibos from "../components/Amiibos";

const Shelf = props => {
  let filteredAmiibos = props.amiibos;

  const filterAmiibo = (amiibos, shelf) =>
    amiibos.filter(amiibo => amiibo.shelf === shelf);
  switch (props.shelf) {
    case "MissingAmiibo":
      filteredAmiibos = filterAmiibo(props.amiibos, props.shelf);
      break;
    case "Collection":
      filteredAmiibos = filterAmiibo(props.amiibos, props.shelf);
      break;
    case "WishList":
      filteredAmiibos = filterAmiibo(props.amiibos, props.shelf);
      break;
    default:
      filteredAmiibos = filterAmiibo(props.amiibos, props.shelf);
      break;
  }

  return (
    <React.Fragment>
      {filteredAmiibos.map(amiibo => (
        <Amiibos
          key={amiibo.tail}
          amiiboSeries={amiibo.amiiboSeries}
          character={amiibo.character}
          gameSeries={amiibo.gameSeries}
          amiiboImg={amiibo.image}
          releaseDateEu={amiibo.release.eu}
          releaseDateJp={amiibo.release.jp}
          releaseDateNa={amiibo.release.na}
          addCol={() => props.addCol(amiibo.tail)}
          addWish={() => props.addWish(amiibo.tail)}
          addDel={() => props.addDel(amiibo.tail)}
          shelf={props.shelf}
        />
      ))}
    </React.Fragment>
  );
};

export default Shelf;
