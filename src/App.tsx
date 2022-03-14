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
            {/*<SwitchButton/>*/}
            {/*<SwitchButton/>*/}
        </div>
    );
}

export default App;
