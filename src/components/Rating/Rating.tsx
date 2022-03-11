import React, { useState } from "react";
import '../../App.css';
import Star, { ValueType } from "./Star";

type RatingPropsType = {
    defaultValue?: ValueType
}

export function Rating(props: RatingPropsType) {
    let [value, setValue] = useState<ValueType>(props.defaultValue ? props.defaultValue : 0);

    return (
        <div>
            <Star selected={value > 0} setValue={setValue} value={1}/>
            <Star selected={value > 1} setValue={setValue} value={2}/>
            <Star selected={value > 2} setValue={setValue} value={3}/>
            <Star selected={value > 3} setValue={setValue} value={4}/>
            <Star selected={value > 4} setValue={setValue} value={5}/>
        </div>
    );
}
