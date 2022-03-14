import React from 'react';

type AccordionBodyType = {
    items: string[]
}
function AccordionBody(props: AccordionBodyType) {
    return <div>
        <ul>
            {
                props.items.map((el, index) => <li key={index+1}>{el}</li>)
            }
        </ul>
    </div>
}

export default AccordionBody;