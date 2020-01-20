import React, { Component } from "react";


class Header extends Component {

    constructor(props){
        super(props);
        this.state = {
            titleRowOne: 'WE ARE',
            titleRowTwo: 'THE COMPLETE',
            titleRowThree: 'IGAMBLING SQUAD!',
        }
    }

    render() {
        return <div className="header-background-image">
            <div className="header-text w-100">
                <div className="font-three-point-five">{this.state.titleRowOne}</div>
                <div className="font-three-point-five">{this.state.titleRowTwo}</div>
                <div className="font-four-point-five">{this.state.titleRowThree}</div>
            </div>
        </div>
    }
}

export default Header;