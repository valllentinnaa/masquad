import React, { Component } from "react";
import Menu from '../menu/Menu'


const Layout = props => {
    return <div className="row">
        <div className="col-2">
            <Menu/>
        </div>
        <div className="col-10"></div>
    </div>
};


export default Layout;