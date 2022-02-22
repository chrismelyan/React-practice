import React from 'react';

type AccordionTitlePropsType = {
    title: string
    onClickHandler: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {

    return <button onClick={props.onClickHandler}>{props.title}</button>
}

export default AccordionTitle;