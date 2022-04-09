import React, {useState, useEffect, useMemo} from 'react'

export default {
    title: 'useEffect demo',
}

export const SimpleExample = () => {
    const [fake, setFake] = useState<number>(1)
    const [counter, setCounter] = useState<number>(1)

    console.log('SimpleExample');

    // useEffect срабатывает, когда страница отрисовалась!! Тогда можно добавить side effect
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

export const SetTimeoutExample = () => {
    const [fake, setFake] = useState<number>(1)
    const [counter, setCounter] = useState<number>(1)

    console.log('Component');

    // setTimeout - срабатывает через какое-то количество секунд
    // setInterval - срабатывает с интервалов в какое-то количество секунд

    useEffect(() => {
        // setTimeout(() => {
        //     console.log('SetTimeout');
        //     document.title = counter.toString();
        // }, 1000)
        setInterval(() => {
            console.log('tick: ' + counter);
            setCounter(state => state + 1);
        }, 1000)
    }, [])

    return <>
        Hello, counter: {counter} - fake: {fake}
        {/*<button onClick={() => setCounter(counter + 1)}>counter+</button>*/}
        {/*<button onClick={() => setFake(fake + 1)}>fake+</button>*/}
    </>
}
