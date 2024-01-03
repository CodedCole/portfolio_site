import { useState } from "react";
import "./ProjectTile.css"

export default function ProjectTile({ children, projectName, smallIcon, largeIcon }) {
    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <div className="project-tile">
            <img src={isExpanded ? largeIcon : smallIcon} alt={`${isExpanded ? 'large' : 'small'} ${projectName} logo`} onClick={() => setIsExpanded(!isExpanded)}/>
            <div className={`children ${isExpanded ? 'is-expanded' : ''}`}>
                {children}
            </div>
        </div>
    );
}