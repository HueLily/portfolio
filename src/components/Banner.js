import { Container, Row, Col} from "react-bootstrap"
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from '../assets/header.png';

export const Banner = () => {
    const [loopNum, setLoopNum] =  useState(0);
    //indicate like index as word currently displayed 
    const [isDeleting, setIsDeleting] = useState(false);
    //words being typed out or breing deleted
    const toRotate = ["Web Developer", "Web Designer", "Software Developer"];
    const [text, setText] = useState('')
    //which part is showing words are displaying
    const [delta, setDelta] = useState(300 - Math.random()*100); //how fast one letter come after the first
    const period = 2000; //transition between each word
   
    useEffect(() => {
        let ticker = setInterval(()=> {
            tick();

        }, delta)

        return () => {clearInterval(ticker)};

    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length -1 ) : fullText.substring(0, text.length + 1);
        setText (updatedText);
        
        if(isDeleting) {
            setDelta()
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7} >
                        <span className="tageline">Welcome to my Portfolio</span>
                        <h1>{`Hi I'm a Software Developer`}<span className="wrap">Web Developer</span></h1>
                        <p>Introduce</p>
                        <button onClick={()=> console.log('connect')}>Let's connect <ArrowRightCircle size ={25}></ArrowRightCircle></button>
                    </Col>
                    <Col xs={12} md={6} xl={5} >
                        <img src={headerImg} alt="Headder Img"></img>
            
                    </Col>
        
                </Row>
            </Container>
        </section>
    )
}