import React, {Component} from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {};

    }

    render() {
        return <div className="row">
            <div className="col-md-6 contact-wrapper">
                <div className="contact-title font-two">Schedule a call</div>
                <div className="contact-subtitle">Our digital marketing with love to connect you with the right strategy
                    for fulfilling your goals. By filling this form bla bla
                </div>
            </div>
            <div className="col-md-6 contact-form-wrapper">
                <Form className="contact-form">
                    <FormGroup className="form-group">
                        <Label  for="names" value="Name">Name</Label>
                        <Input type="text" className="form-control" id="names" placeholder="First and last name"
                               name="yourName" required=""/>
                    </FormGroup>
                    <FormGroup className="form-group">
                        <Label for="email">Email address</Label>
                        <Input type="email" className="form-control" id="email" placeholder="name@example.com"
                               name="yourEmail" required=""/>
                    </FormGroup>
                    <FormGroup className="form-group">
                        <Label for="skype">Skype</Label>
                        <Input type="text" className="form-control" id="someId3" placeholder="skype" name="yourSkype"
                               required=""/>
                    </FormGroup>
                    <FormGroup className="form-group">
                        <Label for="purpose">Purpose of the call</Label>
                        <Input type="select" lassName="form-control" id="someId4" name="purpose" required="">
                            <option>Affiliate Outsourcing</option>
                            <option>Market Consultation</option>
                            <option>Affiliate Support</option>
                            <option>Customer Support Outsource</option>
                            <option>Project Management</option>
                            <option>iGambling Industry inquiry</option>
                            <option>Other Industry inquiry</option>
                        </Input>
                    </FormGroup>
                    <Button type="submit" className="submit"> Send Enquiry</Button>
                </Form>
            </div>
        </div>
    }
}

export default Contact;