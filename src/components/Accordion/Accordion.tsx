import React, {MouseEvent, useState} from "react";
import AccordionBody from "./AccordionBody";
import AccordionTitle from "./AccordionTitle";

type AccordionPropsType = {
    titleValue: string
    items: string[]
}

function Accordion(props: AccordionPropsType) {
    let [collapsed, setCollapsed] = useState(true)

    const onCLickHandler = () => setCollapsed(!collapsed)

    return <div>
        <AccordionTitle title={props.titleValue} onClickHandler={onCLickHandler}/>
        {!collapsed && <AccordionBody items={props.items}/>}
    </div>
}

export default Accordion;