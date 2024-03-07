import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import WiCS from '../assets/WiCS-logo.png';
import WeCode from '../assets/WeCode.jpeg';
import Tapia from '../assets/Tapia.jpeg';
import WiCS1 from '../assets/wics-eb.jpg';
import WiCS2 from '../assets/wics.jpg';
import tapia from '../assets/tapia-img.jpg';
import { Activities } from "./Activities";
import React  from 'react';

export const Leader = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };
      
    const activities = [
        {
            title: 'WiCS',
            imgUrl: WiCS1,
        },
        {
            title: 'WiCS_Events',
            imgUrl: WiCS2,
        },
        {
            title: 'Tapia Conference',
            imgUrl: tapia,
        },
    ];

    return (
        <section className="leadership" id="leader">
            <Container>
                <Row>
                    <Col>
                    <h2>Leadership Experience</h2>
                    <h3>Activities</h3>
                    <Row>
                        {
                            activities.map((activity, index) => {
                                return (
                                    <Activities key={index} {...activity} />
                                )
                            })
                        }
                    </Row>
                    <div className="leader-container">
                    <h3 id="h3">Involvement in Organizations</h3>
                    
                    <Row className="margin-top">
                        <Col >
                       
                            <Carousel responsive={responsive} infinite={true} className="qualification-slider">
                                <div className="item-or">
                                    <img src={WiCS} alt="Image" />
                                    <h5>President</h5>
                                </div>
                                <div className="item-or">
                                    <img src={WiCS} alt="Image" />
                                    <h5>Technical Advisor</h5>
                                </div>
                                <div className="item-or">
                                    <img src={WeCode} alt="Image" />
                                    <h5>WeCode Harvard</h5>
                                </div>
                                <div className="item-or">
                                    <img src={Tapia} alt="Image" />
                                    <h5>Tapia Conference</h5>
                                </div>
                                
                            </Carousel>
                        </Col>
                    </Row>
             
                    </div>

                    </Col>
                </Row>
            </Container>
        </section>
    )
}