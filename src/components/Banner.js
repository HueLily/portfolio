import { Container, Row, Col} from "react-bootstrap"
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ArrowDownCircleFill } from "react-bootstrap-icons";
import linkedIn from '../assets/linkedIn.svg' //use img as object
import gmail from '../assets/gmail.svg';
import insta from '../assets/Ins.svg';
import headerImg from '../assets/header.png';
import TrackVisibility from "react-on-screen";
import 'animate.css';

export const Banner = () => {
    const [loopNum, setLoopNum] =  useState(0);
    //indicate like index as word currently displayed 
    const [isDeleting, setIsDeleting] = useState(false);
    //words being typed out or breing deleted
    const toRotate = ["Web Developer", "Software Developer", "Web Design"];
    const [text, setText] = useState('')
    //which part is showing words are displaying
    const [index, setIndex] = useState(1);
    const [delta, setDelta] = useState(300 - Math.random()*100); //how fast one letter come after the first
    const period = 2000; //transition between each word
   
    useEffect(() => {
        let ticker = setInterval(()=> {
            tick();

        }, delta);

        return () => {clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length -1 ) : fullText.substring(0, text.length + 1);
        setText (updatedText);
        
        if(isDeleting) {
            setDelta(prevDelta => prevDelta /2)
        }

        if(!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex -1);
            setDelta(period);
        }
        else if (isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        }
        else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7} >
                    <TrackVisibility>
                    {({ isVisible }) =>
                      <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                        <p>Welcome to my Portfolio</p>
                        <h1>{`Hi, I'm a `}<span className="wrap">{text}</span></h1>
                        <span className="navbar-text">
                            <div className="social-icon">
                            <a href="https://www.linkedin.com/in/hue-thu-nguyen-513a26256/"><img src={linkedIn} alt=""/></a>
                            <a href=""><img src={gmail} alt=""/></a>
                            <a href="https://www.instagram.com/invites/contact/?i=ow9dygqxymbk&utm_content=e45c1g3"><img src={insta} alt=""/></a>
                        </div>
                        </span>
                        <button>Download My Resume<ArrowDownCircleFill size ={25}></ArrowDownCircleFill></button>
                        </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5} >
                    <TrackVisibility>
                        {({ isVisible }) =>
                        <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                        <img src={headerImg} alt="Headder Img"></img>
                        </div> }
                    </TrackVisibility>
                    </Col>

                </Row>
            </Container>
        </section>
    )
}