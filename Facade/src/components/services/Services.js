import React, { Component } from "react";
import {Media} from "reactstrap";


class Services extends Component {

    constructor(props){
        super(props);
        this.state = {
            servicesTitle: 'OUR BUSINESS?',
            servicesSubtitle: 'How can we help you save or make',
            servicesSubtitleKeyword: 'MONEY',
            services: [
                {
                    image: '../../images/icon-affiliate.png',
                    title: 'Affiliate Squad',
                    description: 'We are highly skilled and experienced squad of formal affiliate managers. We have combined database of over 5,000 real affiliates and publishers, not only from key Europe markets but also LATAM countries, Asia and USA.'
                },
                {
                    image: '../../images/icon-retention.png',
                    title: 'Retention',
                    description: 'Thanks to Enteractive, we are able to bring you the best squad for retention. Covering over 10 different languages and more than 5 years of experience, they are the best to start with!'
                },
                {
                    image: '../../images/icon-consultation.png',
                    title: 'Consultation',
                    description: 'Specialized in Sports betting and Casino, we are definitely the right squad for you. Feel free to share your thoughts with us and we will make sure to provide with the most accurate information to help you clear the clouds.'
                },
                {
                    image: '../../images/icon-project-management.png',
                    title: 'Project Management',
                    description: 'We are creative and innovative! Most companies will start from planning the given task and will work over it until it’s done! But we are not like them, we will stay with you for as long as needed to evaluate and optimize the results from it.'
                },

            ]
        }
    }

    getServicesItems = () => {
      return this.state.services.map((service, index) => {
          return <div key={index} className="col-6 service-wrapper">
              <Media object data-src={service.image} src={service.image} alt={service.title} className="services-icon"></Media>
              <div className="service-title">{service.title}</div>
              <div className="service-description">{service.description}</div>
          </div>
      });
    };

    render() {
        return <div className="services-wrapper">
            <div className="services-heading">
                <div className="services-title font-two">{this.state.servicesTitle}</div>
                <div className="services-subtitle font-one-point-five">
                    {this.state.servicesSubtitle}
                    <span className="services-subtitle-keyword text-uppercase"> {this.state.servicesSubtitleKeyword}</span> ?
                </div>
            </div>
            <div className="services-body">
                <div className="row">
                    {this.getServicesItems()}
                </div>
            </div>
        </div>
    }
}

export default Services;