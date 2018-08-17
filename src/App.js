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
      .then(response =>
        this.props.AddAllAmiibos(
          response.data.amiibo.map(amiibo => {
            return { ...amiibo, shelf: "MissingAmiibo" };
          })
        )
      )
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
                  amiibos={this.props.allAmi}
                  addCol={this.props.addtoCollection}
                  addWish={this.props.addtoWishList}
                  shelf={"MissingAmiibo"}
                />
              )}
            />
            <Route
              path="/collection"
              render={() => (
                <Shelf
                  amiibos={this.props.allAmi}
                  addDel={this.props.deleteAmiibo}
                  addWish={this.props.addtoWishList}
                  shelf={"Collection"}
                />
              )}
            />
            <Route
              path="/wishlist"
              render={() => (
                <Shelf
                  amiibos={this.props.allAmi}
                  addDel={this.props.deleteAmiibo}
                  addCol={this.props.addtoCollection}
                  shelf={"WishList"}
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
    allAmi: state.allAmiibos
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
