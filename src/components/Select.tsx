import React, {useState} from 'react';
import {CityType} from '../App';
import s from './Select.module.css'


export type SelectType = {
    items: CityType[]
    value: string
    onChange: (city: string) => void
}

const Select = (props: SelectType) => {
    let [active, setActive] = useState<boolean>(false);

    const onClickHandler = () => {
        setActive(!active)
    }
    const selectItem = props.items.find(el => el.value === props.value);
    return (
        <div>
            <select>
                <option value="Minsk">Minsk</option>
                <option value="Warsaw">Warsaw</option>
                <option value="Kiev">Kiev</option>
            </select>
            <div className={s.select}>
                <h3 onClick={onClickHandler}>{selectItem && selectItem.title}</h3>
                {
                    active &&
                    <div className={s.items}>
                        {props.items.map(el =>
                            <div key={el.value}
                                 onClick={() => {
                                     props.onChange(el.value)
                                     onClickHandler()
                                 }
                            }>{el.title}</div>)}
                    </div>
                }
            </div>
        </div>
    );
};

export default Select;