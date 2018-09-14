import React, {Component} from 'react';


class Navigation extends Component {
    constructor(props) {
        super(props);

        this._nav = this._nav.bind(this);
    }
    render() {
        return (
            <ul>
                <li>
                    <a href="#"
                        onClick={this.props.onNav
                            .bind(null, this._nav("tab1"))}>
                        Tab 1
                    </a>
                </li>
                <li>
                    <a href="#" onClick={this.props.onNav
                        .bind(null, this._nav("tab2"))}>
                        Tab 2
                    </a>
                </li>
                <li>
                    <a href="#" onClick={this.props.onNav
                        .bind(null, this._nav("tab3"))}>
                        Tab 3
                    </a>
                </li>
                <li>
                    <a href="#" onClick={this.props.onNav
                        .bind(null, this._nav("tab4"))}>
                        Tab 4
                    </a>
                </li>
            </ul>
        )
    }

    _nav(view) {
        return view;
    }
}

export default Navigation;

