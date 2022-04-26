import React, {useState, useEffect, useMemo} from 'react'

export default {
    title: 'useEffect demo',
}
// обязательно делать сброс эффекта при setTimeout/setInterval/addEventListener
// return () => {  } - сброс эффекта для этапа умирания компоненты

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
        const id = setInterval(() => {
            console.log('tick: ' + counter);
            setCounter(state => state + 1);
        }, 1000)

        return () => {
            clearInterval(id)
        }
    }, [])

    return <>
        Hello, counter: {counter} - fake: {fake}
        {/*<button onClick={() => setCounter(counter + 1)}>counter+</button>*/}
        {/*<button onClick={() => setFake(fake + 1)}>fake+</button>*/}
    </>
}

export const ResetEffectExample = () => {
    const [counter, setCounter] = useState<number>(1)

    console.log('Component rendered' + counter);

    useEffect(() => {
            console.log("Effect occurred" + counter);

            return () => {
                console.log('Reset Effect' + counter)
            }
    }, [counter])
    const increase = () => {setCounter(counter+1)}
    return <>
        Hello, counter: {counter} <button onClick={increase}>+</button>
        </>
}

export const KeyTrackerExample = () => {
    const [text, setText] = useState<string>('')

    console.log('Component rendered' + text);

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText(text + e.key)
        }
        window.addEventListener('keypress', handler)

        // без ретурна будет накапливаться значения в setText. Нужно обязательно делать сброс эффектов
        // return === .componentWillUnmount
        return () => {
            window.removeEventListener('keypress', handler)}
    }, [text])

    return <>
        Hello, counter: {text}
    </>
}

export const AsyncAwaitExample = () => {
    function wait(ms: number) {
        return new Promise((res) => {
            setTimeout(() => {
                res(ms)
            }, ms)
        })
    }

    async function run() {
        await wait(1000)
        console.log(1)
        await wait(1000)
        console.log(2)
        await wait(1000)
        console.log(3)
    }

    run()

    return <>
        Hello
    </>
}