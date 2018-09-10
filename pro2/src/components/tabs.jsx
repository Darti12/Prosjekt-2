import React, { Component } from "react";
import $ from "jquery";
import PropTypes from "prop-types";
import Tab from "./tab";
import Visuals from "./visuals";

class Tabs extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      activeTab: this.props.children[0].props.label
    };
  }

  onClickTabItem = tab => {
    this.setState({
      activeTab: tab
    });
  };

  render() {
    const {
      onClickTabItem,
      props: { children },
      state: { activeTab }
    } = this;
    return (
      <div className="tabs">
        <ol className="tab-list">
          {children.map(child => {
            const { label } = child.props;

            return (
              <Tab
                activeTab={activeTab}
                key={label}
                label={label}
                onClick={onClickTabItem}
              />
            );
          })}
        </ol>
        <div className="tab-content">
          {children.map(child => {
            if (child.props.label !== activeTab) return undefined;
            return (
              //Legg inn standard oppsett på taben her
              <div>
                <h1>Content!: </h1>
                <Visuals />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Tabs;
