import React from "react";
import Amiibos from "../components/Amiibos";

const Search = props => {
  return (
    <React.Fragment>
      {props.Amiibos.map(amiibo => (
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
          move={() => props.addMov(amiibo.tail)}
          location={props.location}
          buttonAddC={"Add to Collection"}
          buttonAddW={"Add to Wish List"}
          buttonAddD={"Delete Amiibo "}
          buttonAddM={"Move Amiibo to "}
          moveToC={"Collection"}
          moveToW={"Wish list"}
        />
      ))}
    </React.Fragment>
  );
};

export default Search;
