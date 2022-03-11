import React, {MouseEvent, useState} from 'react';
import {action} from '@storybook/addon-actions';
import { Rating } from './Rating';

export default {
    title: 'Rating',
    component: Rating,
};


export const EmptyRating = () => <Rating defaultValue={0}/>
export const Rating1 = () => <Rating defaultValue={1}/>
export const Rating2 = () => <Rating defaultValue={2}/>
export const Rating3 = () => <Rating defaultValue={3}/>
export const Rating4 = () => <Rating defaultValue={4}/>
export const Rating5 = () => <Rating defaultValue={5}/>

