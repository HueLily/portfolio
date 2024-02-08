import { Container, Row, Col} from "react-bootstrap";
import { useState } from "react";
import contact from '../assets/contact-img.png';
import LinkedIn from '../assets/linkedIn.svg';
import github from '../assets/github.svg';
import insta from '../assets/Ins.svg';


export const Contact = () => {

    const formInitiaDetails = {
        firstName: '',
        lastName: '',
        email:'',
        phone: '',
        message:''
    }

    const [formDetails, setFormDetails] = useState(formInitiaDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus]= useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const handleSubmit = () => {
        
    }

    return (
        <section className="contacts" id="contact">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contact} alt="Contact Me"></img>
                    </Col>
                    <Col md={6}>
                        <h2>Get In Touch with Lily</h2>
                        <h4>You are welcome to reach me through my email:</h4><h4 className="black">hue.lily.thunguyen@gmail.com</h4>
                        <h4>Feel free to connect with me on social media and drop a messesage for me.</h4>
                        <span className="navbar-text">
                            <div className="social-media">
                            <a href="https://www.linkedin.com/in/hue-thu-nguyen-513a26256/"><img src={LinkedIn} alt=""/></a>
                            <a href="https://github.com/HueLily"><img src={github} alt=""/></a>
                            <a href="https://www.instagram.com/invites/contact/?i=ow9dygqxymbk&utm_content=e45c1g3"><img src={insta} alt=""/></a>
                        </div>
                        </span>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}