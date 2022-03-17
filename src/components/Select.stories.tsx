import React, {MouseEvent, useState} from "react";
import Select from './Select';
import {action} from '@storybook/addon-actions';
import {CityType} from "../App";

export default {
    title: 'Select',
    component: Select,
};

export const BaseSelect = () => {
    const [value, setValue] = useState<string>('');
    const onChangeHandler = (city: string) => {
        setValue(city);
    }
    return <Select value={value}
                   items={[
                       {value: '1', title: 'Minsk'},
                       {value: '2', title: 'Warsaw'},
                       {value: '3', title: 'Kiev'}]}
                   onChange={onChangeHandler}
    />
}