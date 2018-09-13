import React, { Component } from "react";
import Tab from "./Tab";
import Navigation from "./Navigation";

class Display extends Component {
  constructor() {
    super();
    this.state = {
      view: "tab1"
    };
    this._onNav = this._onNav.bind(this);
    this._viewOne = this._viewOne.bind(this);
  }

  render() {

      return (
        <div>
            <Navigation onNav={this._onNav}/>
            {this.state.view === "tab1" ? <Tab id="tab1" name="Tab 1"/>: null}
            {this.state.view === "tab2" ? <Tab id="tab2" name="Tab 2"/> : null}
            {this.state.view === "tab3" ? <Tab id="tab3" name="Tab 3"/> : null}
            {this.state.view === "tab4" ? <Tab id="tab4" name="Tab 4"/> : null}

        </div>
      )
  }

  _onNav(current_view) {
    this.setState( {
        view: current_view
    })
  }

  _viewOne() {

  }

}

export default Display;
