import React, {MouseEvent, useState} from "react";
import Accordion from './Accordion';
import {action} from '@storybook/addon-actions';

export default {
    title: 'Accordion',
    component: Accordion,
};

export const ModeChanging = () => {
    return <Accordion titleValue={'Learn'} items={['react', 'css', 'js']}/>
}
