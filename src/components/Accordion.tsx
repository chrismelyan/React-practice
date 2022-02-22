import React, {MouseEvent, useState} from "react";

type AccordionPropsType = {
    titleValue: string
}

function Accordion(props: AccordionPropsType) {
    let [collapsed, setCollapsed] = useState(true)

    const onCLickHandler = () => setCollapsed(collapsed = !collapsed)

    return <div>
        <AccordionTitle title={props.titleValue} onClickHandler={onCLickHandler}/>
        {!collapsed && <AccordionBody/>}
    </div>
}

type AccordionTitlePropsType = {
    title: string
    onClickHandler: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {

    
    return <button onClick={props.onClickHandler}>{props.title}</button>
}

function AccordionBody() {
    return <div>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </div>
}

export default Accordion;