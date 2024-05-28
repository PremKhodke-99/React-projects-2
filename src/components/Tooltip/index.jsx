import { useState } from "react";


function Tooltip({ children, content }) {

    const [isVisible, setIsVisible] = useState(false);

    return (
        <div
            className="tooltip-container"
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
        >
            {children}
            {isVisible ? <div className="tooltip">
                {content}
            </div> : null}
        </div>
    )
}

export default Tooltip;