import React from "react";


export const WorkItem = ({icon, year, title, location, desc1, desc2, desc3}) => {
    return (
        <div className="work-item">
            <div className="work-icon">{icon}</div>
            <span className="work-date">{year}</span>
            <h3 className="work-title"><b>{title}</b>{location}</h3>
            <p className="work-desc">{desc1}</p>
            <p className="work-desc">{desc2}</p>
            <p className="work-desc">{desc3}</p>
        </div>
    )
}

