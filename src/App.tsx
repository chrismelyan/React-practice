import React from 'react';
import './App.css';
import Accordion from "./components/Accordion";
import {Rating as R} from "./components/Rating/Rating";


function App() {
    console.log('App rendering')
    return (
        <div>
            <PageTitle title={'This is App component'} />
            <PageTitle title={'My friend'} />
            Article 1
            <R value={3} />
            <Accordion titleValue={'Menu'} collapsed={false}/>
            <Accordion titleValue={'Users'} collapsed={true}/>
            Article 2
            <R value={5} />
            <R value={4} />
            <R value={3} />
            <R value={2} />
            <R value={1} />
            <R value={0} />
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log('PageTitle rendering')
    return <h1>{props.title}</h1>
}

export default App;
