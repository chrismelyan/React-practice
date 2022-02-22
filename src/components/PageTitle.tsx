import React from 'react';

type PageTitlePropsType = {
    title: string
}

const PageTitle = (props: PageTitlePropsType) => {
    console.log('PageTitle rendering')
    return <h1>{props.title}</h1>
}

export default PageTitle;