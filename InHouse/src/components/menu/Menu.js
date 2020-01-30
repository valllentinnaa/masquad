import React, {Component} from "react";


class Menu extends Component {

    constructor(props) {
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
                        <i className="fa fa-home mr-2"></i>
                        Home
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" href="#">
                        <i className="fa fa-newspaper-o mr-2"></i>
                        Articles
                    </a>
                </li>
            </ul>
        </div>
    }
}

export default Menu;