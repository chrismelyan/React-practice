import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import PageTitle from './components/PageTitle';
import {Rating as R} from "./components/Rating/Rating";
import SwitchButton from './components/SwitchButton';
import Select from './components/Select'

export type CityType = {
    value: string
    title: string
}

function App() {
    const [value, setValue] = useState<string>('1');
    const onChangeHandler = (value: string) => {
        setValue(value);
    }

    return (
        <div className={'container'}>
            <PageTitle title={'React Course'}/>
            <div>
                Are you enjoying the course?
                <R/>
            </div>
            <Accordion titleValue={'Learn'} items={['react', 'css', 'js']}/>
            <Accordion titleValue={'Create'} items={['todolist', 'social network', 'portfolio']}/>
            <div>
                Challenging tasks
                <R/>
                Valuable material
                <R/>
                Support access
                <R/>
            </div>
            <SwitchButton/>
            <Select value={value}
                    onChange={onChangeHandler}
                    items={[
                        {value: '1', title: 'Minsk'},
                        {value: '2', title: 'Warsaw'},
                        {value: '3', title: 'Kiev'}]}
            />
            {/*<SwitchButton/>*/}
            {/*<SwitchButton/>*/}
        </div>
    );
}

export default App;
