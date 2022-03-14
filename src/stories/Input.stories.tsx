import React, {ChangeEvent, MouseEvent, useState, useRef} from "react";
import {action} from '@storybook/addon-actions';

export default {
    title: 'Input'
};

export const ControlledInput = () => {
    const [value, setValue] = useState('');
    return <input value={value} onChange={(e) => setValue(e.currentTarget.value)}/>
}

export const GetValueByPuttingPress = () => {
    const [value, setValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null)
    const save = () => {
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value);
    }
    const onEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        e.key === 'Enter' && save();
    }
    return <span>
        <input ref={inputRef} onKeyPress={onEnter}/>
        <button onClick={save}> save </button>  added value: <b>{value}</b>
    </span>
}

export const ControlledCheckBox = () => {
    const [state, setState] = useState<boolean>(false);
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        return setState(e.currentTarget.checked)
    }
    return <span><input type={'checkbox'} checked={state} onChange={onChange}/>   Checkbox is working</span>
}

export const ControlledSelect = () => {
    const [state, setState] = useState<string | undefined>(undefined);
    const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        return setState(e.currentTarget.value)
    }
    return <select value={state} onChange={onChange}>
        <option>none</option>
        <option>React</option>
        <option>JavaScript</option>
        <option>CSS</option>
    </select>
}

