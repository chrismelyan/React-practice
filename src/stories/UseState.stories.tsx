import React, {useState} from 'react'

export default {
    title: 'useState demo',
}
// useState не может принимать функцию как инициализованное значение, но он может принять функцию,
// которая при вызове отдасть инициаллизованное значение, которое запишет useState и при чем useState сработает по принципу useMemo.

export const Example1 = () => {
    console.log('counting')
    // const [counter, setCounter] = useState<number>(0)
    const [counter, setCounter] = useState<number>(() => {
        console.log('generated Data')
        return 3576295;
    })

    return <>
        <button onClick={() => {setCounter(counter + 1)}}>+</button>
        {counter}
    </>
}

export const Example2 = () => {
    console.log('counting')
    const [counter, setCounter] = useState<number>(0)
    // setCounter может принимать функци. Он не запоминает ее, но принимает и эта ыункция возвращает изменения со стейтом
    const changer = (state: number) => state + 1

    return <>
        <button onClick={() => setCounter(changer)}>+</button>
        {counter}
    </>
}