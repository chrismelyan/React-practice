import React, {MouseEvent, useState} from 'react';
import {action} from '@storybook/addon-actions';
import SwitchButton from './SwitchButton';

export default {
    title: 'SwitchButton',
    component: SwitchButton,
};

export const ButtonChangingMode = () => {
    return <SwitchButton/>
}
