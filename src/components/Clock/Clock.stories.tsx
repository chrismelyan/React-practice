import React, {MouseEvent, useState} from "react";
import {Clock} from '../Clock/Clock'
import {action} from '@storybook/addon-actions';

export default {
    title: 'Clock',
    component: Clock,
};

export const Example1 = () => {
    return <Clock/>
}
