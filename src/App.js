import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import axios from "axios";

import Shelf from "./containers/Shelf";
import Search from "./containers/Search";
import InitialPage from "./components/InitialPage";
import Navigation from "./components/Navigation";

import "./css/app.css";

import * as actionTypes from "./store/actions/index";
import { connect } from "react-redux";

class GameLibrary extends Component {
  componentDidMount() {
    this.searchGameHandler();
  }

  searchGameHandler() {
    axios
      .get(`http://www.amiiboapi.com/api/amiibo/`)
      .then(response => this.props.AddAllAmiibos(response.data.amiibo))
      .catch(e => {
        console.log("error", e);
      });
  }

  render() {
    return (
      <React.Fragment>
        <header className="Header">
          <Switch>
            <Route path="/" exact render={() => <h1>Amiibo Collector</h1>} />
            <Route
              path="/(collection|wishlist|missingAmiibos|shelf)"
              render={() => <Search />}
            />
          </Switch>
          <Navigation />
        </header>
        <main>
          <Switch>
            <Route
              path="/"
              exact
              render={() => <InitialPage NoAmiibos={this.props.noAmi} />}
            />
            <Route
              path="/shelf"
              render={() => (
                <Shelf
                  Amiibos={this.props.allAmi}
                  addCol={this.props.addtoCollection}
                  addWish={this.props.addtoWishList}
                  location={"allAmiibos"}
                />
              )}
            />
            <Route
              path="/collection"
              render={() => (
                <Shelf
                  Amiibos={this.props.collection}
                  addDel={this.props.deleteAmiibo}
                  addMov={this.props.moveToWish}
                  location={"Collection"}
                />
              )}
            />
            <Route
              path="/wishlist"
              render={() => (
                <Shelf
                  Amiibos={this.props.wishList}
                  addDel={this.props.deleteAmiibo}
                  addMov={this.props.moveToCo}
                  location={"WishList"}
                />
              )}
            />
          </Switch>
        </main>
        <footer>
          <p>Amiibo Collector 2018</p>
        </footer>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    missingAmiibos: state.missingAmiibos,
    allAmi: state.allAmiibos,
    wishList: state.wishList,
    collection: state.collection
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addtoCollection: key => dispatch(actionTypes.addToCollection(key)),
    addtoWishList: key => dispatch(actionTypes.addToWishList(key)),
    deleteAmiibo: key => dispatch(actionTypes.deleteAmiibo(key)),
    AddAllAmiibos: amiibos => dispatch(actionTypes.allAmiibos(amiibos))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(GameLibrary)
);
