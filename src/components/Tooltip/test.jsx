import Tooltip from ".";
import "./tooltip.css"

function TooltipTest() {
    return (
        <div>
            <h1>Tooltip</h1>
            <Tooltip content={'Tooltip Content'} children={<p>Hover me</p>}/>
        </div>
    )
}

export default TooltipTest;