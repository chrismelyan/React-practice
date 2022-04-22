import React, {useEffect, useState} from 'react';
import {AnalogClockView} from './AnalogClockView';
import {DigitalClockView} from './DigitalClockView';

type ClockType = {
    mode: 'digital' | 'analog'
}
export const Clock = (props: ClockType) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const id = setInterval(() => {
            console.log('tick')
            setDate(new Date())
        }, 1000)
        return () => {
            clearInterval(id)
        }
    }, [])

    let view;
    switch (props.mode) {
        case 'analog':
            return <AnalogClockView date={date}/>
        case 'digital':
        default:
            return <DigitalClockView date={date}/>
    }
    return <div>
        {view}
    </div>
}

