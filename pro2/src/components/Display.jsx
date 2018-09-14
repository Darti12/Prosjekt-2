import React, { Component } from "react";
import Tab from "./Tab";
import Navigation from "./Navigation";
import Category from "./Category";

class Display extends Component {
  constructor() {
    super();
    this.state = {
      view: "tab1",
    textType: null,
    imageType: null,
    soundType: null
    };
    this._onNav = this._onNav.bind(this);
    this._viewOne = this._viewOne.bind(this);
  }

    getInfoFromCategories = info => {
        if (info.startsWith("Text")) {
            console.log(info);
            this.setState({ textType: info.substring(6, info.length) });
        }
        if (info.startsWith("Image")) {
            console.log(info);
            this.setState({ imageType: info.substring(7, info.length) });
        }
        if (info.startsWith("Sound")) {
            console.log(info);
            this.setState({ soundType: info.substring(7, info.length) });
        }
    };
  render() {

      return (
        <div>
            <Navigation onNav={this._onNav}/>
            {this.state.view === "tab1" ? <Tab id="tab1" name="Tab 1"/>: null}
            {this.state.view === "tab2" ? <Tab id="tab2" name="Tab 2"/> : null}
            {this.state.view === "tab3" ? <Tab id="tab3" name="Tab 3"/> : null}
            {this.state.view === "tab4" ? <Tab id="tab4" name="Tab 4"/> : null}
            <Category onChangeValue={this.getInfoFromCategories} />
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
