import React, {useState, useMemo, useCallback} from 'react';

export default {
    titel: 'useMemo'
}

export const DifficultCountingExample = () => {

    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 10000000) {
                fake++;
                const fakeValue = Math.random();
            }
            tempResultA = tempResultA * i;
        }
        return tempResultA;
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i;
    }

    return <>
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e) => setB(Number(e.currentTarget.value))}/>
        <hr/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>
    </>
}

const UsersSecret = (props: { users: Array<string> }) => {
    console.log('LIST OF USERS')
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }</div>
}

const Users = React.memo(UsersSecret)

export const HelpForReactMemo = () => {
    console.log('COUNTING')
    const [counter, setCounter] = useState<number>(0)
    const [users, setUsers] = useState<Array<string>>(['Tom', 'Bill', 'Kate', 'Annie'])

    const addUser = () => {
        const newUsers = [...users, 'Steve' + new Date().getTime()];
        setUsers(newUsers)
    }
    // при фильтрации массива React.memo не будет защищать от перерисовки, так как создается новый массив
    // поэтому защитим нашу функцию фильтрации хуком useMemo, зависимости нет - useMemo отработает один раз
    // const newArray = users.filter(u => u.toLowerCase().indexOf('a') > -1)
    const newArray = useMemo(() => {
        const newArray = users.filter(u => u.toLowerCase().indexOf('a') > -1);
        return newArray
    }, [])

    return <>
        <button onClick={() => {
            setCounter(counter + 1)
        }}>+
        </button>
        {counter}
        <Users users={newArray}/>
    </>
}


const BooksSecret = (props: { addBook: () => void }) => {
    console.log('BOOKSECRET')
    return <div>
        <button onClick={props.addBook}>add books</button>
    </div>
}

const Books = React.memo(BooksSecret);

export const UseCallback = () => {
    console.log('useCallback')
    const [counter, setCounter] = useState<number>(0)
    const [books, setBooks] = useState<Array<string>>(['HTML', 'CSS', 'JS', 'REACT'])

    const addBook = () => {
        const newBooks = [...books, 'ANGULAR' + new Date().getTime()];
        setBooks(newBooks)
    }
// если в зависимости оставить пусто массив - memoizedAddBook будет обращаться к старому лексическому значению! (не обновленному)
    // при помощи useMemo возвращаем (return) КОЛЛБЕК!! [по сути коллбек в коллбеке]
    const memoizedAddBook = useMemo(() => {
        return () => {
            const newBooks = [...books, 'ANGULAR' + new Date().getTime()];
            setBooks(newBooks)
        }
    }, [books]);
// для этого проще использовать useCallback, в который просто передаем саму функцию
    const memoizedAddBook2 = useCallback(() => {
            const newBooks = [...books, 'ANGULAR' + new Date().getTime()];
            setBooks(newBooks)
    }, [books]);

    return <>
        <button onClick={() => {
            setCounter(counter + 1)
        }}>+
        </button>
        {counter}
        <Books addBook={memoizedAddBook}/>
    </>
}
