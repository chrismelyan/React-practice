import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import PageTitle from './components/PageTitle';
import {Rating as R} from "./components/Rating/Rating";
import SwitchButton from './components/SwitchButton';


function App() {
    console.log('App rendering')
    return (
        <div className={'container'}>
            <PageTitle title={'React Course'} />
            <div>
                Article 1
                <R value={3} />
            </div>
            <Accordion titleValue={'Learn'} />
            <Accordion titleValue={'Create'} />
            <div>
                Article 2
                <R value={5} />
                <R value={4} />
                <R value={3} />
                <R value={2} />
                <R value={1} />
                <R value={0} />
            </div>
            <SwitchButton />
            <SwitchButton />
            <SwitchButton />
            <SwitchButton />
        </div>
    );
}

export default App;
