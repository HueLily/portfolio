import { Container, Row, Col, } from "react-bootstrap";
import works from '../components/data';
import organization from "./data2";
import { WorkItem } from "./WorkItem";


export const Works = () => {
    
    return (
        <section className="work" id="works">
            <Container>
                <Row>
                <h2>Experience </h2>
                    <Col>

                        
                        <div className="work-container grid">
                            <div className = "work-data ">
                                {works.map((val) => {
                                    return <WorkItem key={val.id} {...val}/>
                                })}
                            </div>
                        </div>
                    </Col>
                    <Col>
                    <div className="work-container grid">
                            <div className = "work-data ">
                                {organization.map((val) => {
                                    return <WorkItem key={val.id} {...val}/>
                                })}
                            </div>
                        </div>
                    </Col>

                </Row>
            </Container>
        </section>
    )
}