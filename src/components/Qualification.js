import { Container, Row, Col } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import angular from "../assets/angular.svg";
import bootstrap from "../assets/bootstrap.svg";
import c from "../assets/c.svg";
import css3 from "../assets/css3.svg";
import html5 from "../assets/html5.svg";
import java from "../assets/java.svg";
import js from "../assets/js.svg";
import mongoDB from "../assets/mongoDB.svg";
import nodejs from "../assets/node-js.svg";
import react from "../assets/react.svg";
import api from "../assets/api.png";
import SQL from "../assets/sql.svg";
import circleImg from "../assets/me-img.jpg";
import React from "react";

export const Qualification = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="qualification" id="qualification">
      <Container>
        <Row className="align-items-center" id="row1">
          <h2>About Me</h2>

          <Col xs={12} md={6} xl={4}>
            <img src={circleImg} alt="Headder Img" className="me-img"></img>
          </Col>
          <Col xs={12} md={6} xl={8} id="intro">
            <p>
              I am a Computer Science major and Economics major at DePauw
              University. My experience includes Web Development and Android
              Development. I am interested in security and excited to keep
              learning and expanding my skills.
            </p>
          </Col>
        </Row>

        <div className="qualification-list">
          <h5>Qualification</h5>
          <Row
            className="margin-top"
            style={{ justifyContent: "center", paddingBottom: "50px" }}
          >
            <Col xs={4} md={2} className="tech-icons">
              <div className="item">
                <img src={java} alt="Image" />
                <p>Java</p>
              </div>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
              <div className="item">
                <img src={c} alt="Image" />
                <p>C/C++</p>
              </div>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
              <div className="item">
                <img src={html5} alt="Image" />
                <p>HTML5</p>
              </div>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
              <div className="item">
                <img src={css3} alt="Image" />
                <p>CSS3</p>
              </div>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
              <div className="item">
                <img src={js} alt="Image" />
                <p>Javascript</p>
              </div>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
              <div className="item">
                <img src={SQL} alt="Image" />
                <p>SQL</p>
              </div>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
              <div className="item">
                <img src={mongoDB} alt="Image" />
                <p>MongoDB</p>
              </div>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
              <div className="item">
                <img src={react} alt="Image" />
                <p>React JS</p>
              </div>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
              <div className="item">
                <img src={angular} alt="Image" />
                <p>Angular</p>
              </div>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
              <div className="item">
                <img src={bootstrap} alt="Image" />
                <p>Bootstrap</p>
              </div>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
              <div className="item">
                <img src={nodejs} alt="Image" />
                <p>Node JS</p>
              </div>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
              <div className="item">
                <img src={api} alt="Image" />
                <p>API</p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};
