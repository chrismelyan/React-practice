import React, {MouseEvent, useState} from 'react';

type SwitchButtonType = {
}

const SwitchButton = (props: SwitchButtonType) => {
    let [on, setOn] = useState(false)


    const onStyle = {
        width: '50px',
        height: '30px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '3px',
        backgroundColor: on === true ? 'green' : 'white'
    }
    const offStyle = {
        width: '50px',
        height: '30px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '2px',
        padding: '3px',
        backgroundColor: on === true ? 'white' : 'red'
    }
    const indicatorStyle = {
        width: '20px',
        height: '20px',
        borderRadius: '12px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: on === true ? 'green' : 'red'
    }

    return (
        <div>
            <button style={onStyle} onClick={() => setOn(on = true)}>On</button>
            <button style={offStyle} onClick={() => setOn(on = false)}>Off</button>
            <div style={indicatorStyle}></div>
        </div>
    );
};

export default SwitchButton;