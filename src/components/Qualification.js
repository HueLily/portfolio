import { Container, Row, Col } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import angular from '../assets/angular.svg';
import bootstrap from '../assets/bootstrap.svg';
import c from '../assets/c.svg';
import css3 from '../assets/css3.svg';
import html5 from '../assets/html5.svg';
import java from '../assets/java.svg';
import js from '../assets/js.svg';
import mongoDB from '../assets/mongoDB.svg';
import nodejs from '../assets/node-js.svg';
import react from '../assets/react.svg';
import api from '../assets/api.png';
import SQL from '../assets/sql.svg';
import headerImg from '../assets/header-img.png';
import React  from 'react';

export const Qualification = () => {
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
      
    return (
        <section className="qualification" id="qualification">
            <Container>
                <Row className="align-items-center" id="row1">
                <h2>About Me</h2>
                    
                    <Col xs={12} md={6} xl={5} >
                        <img src={headerImg} alt="Headder Img" className="me-img"></img>
                    </Col>
                    <Col xs={12} md={6} xl={7} id="intro">
                        <h4>Thank You For Visiting My Portfolio Website </h4>
                        <p>My name is Hue (Lily). I am a Computer Science major at DePauw University.</p>
                        <p>Embarking on the journey of pursuing computer science as my major fills me with boundless enthusiasm and a deep sense of purpose. As my interest grows, I am gaining experience in Web Development and Android Development.</p>
                        <p>My goal is to make a positive influence for my peers on campus and assist them to the best of my abilities. I am actively involving in Women in Computer Science at DePauw University as a president and a technical advisor. I am also a Computer Science Teaching Assistant for CSC 121 classes and an active member in many organizations.</p>
                    </Col>
                </Row>
                

                <h3>Qualification</h3>
                    <Row className="margin-top" style={{ justifyContent: "center", paddingBottom: "50px" }}>
                        <Col xs={4} md={2} className="tech-icons">
                                <div className="item">
                                    <img src={java} alt="Image" />
                                    <h5>Java</h5>
                                </div>
                        </Col>
                        <Col xs={4} md={2} className="tech-icons">
                                <div className="item">
                                    <img src={c} alt="Image" />
                                    <h5>C/C++</h5>
                                </div>
                        </Col>
                        <Col xs={4} md={2} className="tech-icons">
                                <div className="item">
                                    <img src={html5} alt="Image" />
                                    <h5>HTML5</h5>
                                </div>
                        </Col>
                        <Col xs={4} md={2} className="tech-icons">
                                <div className="item">
                                    <img src={css3} alt="Image" />
                                    <h5>CSS3</h5>
                                </div>
                        </Col>
                        <Col xs={4} md={2} className="tech-icons">
                                <div className="item">
                                    <img src={js} alt="Image" />
                                    <h5>Javascript</h5>
                                </div>
                        </Col>
                        <Col xs={4} md={2} className="tech-icons">
                                <div className="item">
                                    <img src={SQL} alt="Image" />
                                    <h5>SQL</h5>
                                </div>
                        </Col>
                        <Col xs={4} md={2} className="tech-icons">
                                <div className="item">
                                    <img src={mongoDB} alt="Image" />
                                    <h5>MongoDB</h5>
                                </div>
                        </Col>
                        <Col xs={4} md={2} className="tech-icons">
                                <div className="item">
                                    <img src={react} alt="Image" />
                                    <h5>React JS</h5>
                                </div>
                        </Col>
                        <Col xs={4} md={2} className="tech-icons">
                                <div className="item">
                                    <img src={angular} alt="Image" />
                                    <h5>Angular</h5>
                                </div>
                        </Col>
                        <Col xs={4} md={2} className="tech-icons">
                                <div className="item">
                                    <img src={bootstrap} alt="Image" />
                                    <h5>Bootstrap</h5>
                                </div>
                        </Col>
                        <Col xs={4} md={2} className="tech-icons">
                                <div className="item">
                                    <img src={nodejs} alt="Image" />
                                    <h5>Node JS</h5>
                                </div>
                        </Col>
                        <Col xs={4} md={2} className="tech-icons">
                                <div className="item">
                                    <img src={api} alt="Image" />
                                    <h5>API</h5>
                                </div>   
                        </Col>
                    </Row>
             
            </Container>
            
        </section>
    )

}