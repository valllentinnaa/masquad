import React, {Component} from "react";
import {ListGroup, ListGroupItem} from 'reactstrap';

class Footer extends Component {

    render() {
        return <div className="row">
            <div className="col-md-6 footer-list">
                <div className="py-5 pl-4">
                    <div className="footer-link">Privacy Policy</div>
                    <div className="footer-link">About us</div>
                    <div className="footer-link">Follow us on Linkedin</div>
                    <div className="footer-link">Our Twitter</div>
                </div>
            </div>
            <div className="col-md-6 footer-contacts">
                <div className="row">
                    <div className="col-12 bg-secondary d-flex justify-content-center align-items-center">
                        <a href="#" target="_blank" className="text-white py-3">
                            <span className="d-block text-center font-two"><i
                                className="fa fa-envelope-open"></i></span>
                            <span
                                className="d-block text-center pt-2 font-one-point-five">lp@myaffiliatesquad.com</span>
                        </a>
                    </div>
                    <div className="col-12 bg-primary d-flex justify-content-center align-items-center">
                        <a href="#" target="_blank" className="text-white py-3">
                            <span className="d-block text-center font-two"><i className="fa fa-skype"></i></span>
                            <span className="d-block text-center pt-2 font-one-point-five">lazarnoxwin</span>
                        </a>
                    </div>
                    <div className="col-12 bg-info d-flex justify-content-center align-items-center">
                        <a href="#" target="_blank" className="text-white py-3">
                            <span className="d-block text-center font-two"><i className="fa fa-whatsapp"></i></span>
                            <span className="d-block text-center pt-2 font-one-point-five">+359892708768</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Footer;