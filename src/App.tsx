import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import PageTitle from './components/PageTitle';
import {Rating as R} from "./components/Rating/Rating";
import SwitchButton from './components/SwitchButton';


function App() {

    return (
        <div className={'container'}>
            <PageTitle title={'React Course'}/>
            <div>
                Article 1
                <R/>
            </div>
            <Accordion titleValue={'Learn'}/>
            <Accordion titleValue={'Create'}/>
            <div>
                Article 2
                <R/>
                <R/>
                <R/>
                <R/>
                <R/>
                <R/>
            </div>
            <SwitchButton/>
            <SwitchButton/>
            <SwitchButton/>
        </div>
    );
}

export default App;
