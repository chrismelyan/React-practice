import React, {useState, useEffect, useMemo} from 'react'

export default {
    title: 'useEffect demo',
}

export const ExampleOne = () => {
    const [fake, setFake] = useState<number>(1)
    const [counter, setCounter] = useState<number>(1)

    console.log('SimpleExample');

    useEffect(() => {
        console.log("useEffect (Side Effect)")
        //api.getUsers().then('')
        //setIntervals
        //indexDB
        //document.getElementById
        document.title = counter.toString()

    }, [counter])

    return <>
        Hello, {counter} {fake}
        <button onClick={() => setFake(fake + 1)}>+</button>
    </>
}
