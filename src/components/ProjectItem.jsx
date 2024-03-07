import React  from 'react';
import Close from '../assets/x-circle.svg';
import { useState } from "react";

export const ProjectItem = ({img, title, details}) => {

    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal);
    };

    return (
        <div className="project-item">
            <img src={img} alt="" className="project-img" />

            <div className="project-hover" onClick={toggleModal}>
                <h3 className="project-title"><b>{title}</b></h3>   
            </div>

            { modal && (
                <div className="project-modal">
                <div className="modal-content" id="modal">
                    <img src={Close} alt="" className="modal-close" onClick={toggleModal}/>

                    <h3 className="modal-title">{title}</h3>

                    <ul className="modal-list grid">
                        {details.map(({icon, title, desc}, index) => {
                            return (
                                <li className="modal-item" key={index}>
                                  <span className="item-icon">{icon}</span>
                                  <div>
                                    <span className="item-title">{title}</span>
                                    <span className="item-desc">{desc}</span>
                                  </div>
                                </li>
                            )
                        })}
                    </ul>

                    <img src={img} alt="" className="modal-img" />
                </div>
            </div>
            
            )}
            
        </div>
    );
};

