import { Container, Row, Col} from "react-bootstrap";
import projects from "./Projectdata";
import { ProjectItem } from "./ProjectItem";
import React  from 'react';

export const Projects = () => {
    return (
        <section className="project" id="projects">
            <Container>
            <h2>Projects</h2>
                <Row>
                    
                    <div className="project-container">
                        { 
                        projects.map((item) => {
                            return <ProjectItem key={item.id} {...item}/>;
                        })}
                    </div>
                </Row>
            </Container>
        </section>
    )
}