import { useState } from "react";
import "./ProjectTile.css"

export default function ProjectTile({ children, projectName, smallIcon, largeIcon, pixelated=true }) {
    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <div className={`project-tile ${isExpanded ? 'is-expanded' : ''}`}>
            <div className='project-tile-header' onClick={() => setIsExpanded(!isExpanded)}>
                <img className={`project-icon ${pixelated ? 'pixel-img' : ''}`}
                    src={isExpanded ? largeIcon : smallIcon} 
                    alt={`${isExpanded ? 'large' : 'small'} ${projectName} logo`} />
            </div>
            <div className={`children ${isExpanded ? 'is-expanded' : ''}`}>
                {children}
            </div>
        </div>
    );
}