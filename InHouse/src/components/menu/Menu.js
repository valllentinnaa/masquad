import React, { Component } from "react";


class Menu extends Component {

    constructor(props){
        super(props);
        this.state = {
            optionOne: 'Articles',
        }
    }


    render() {
        return <div className="sidemenu-wrapper">
            <ul className="nav flex-column sidemenu-ul">
                <li className="nav-item">
                    <a className="nav-link active" href="#">
                        <i className="fa fa-igloo"></i>
                       Home
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" href="#">
                        <i className="fa fa-newspaper"></i>
                        Articles
                    </a>
                </li>
            </ul>
        </div>
    }
}

export default Menu;