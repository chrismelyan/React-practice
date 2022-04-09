import React, {useState} from 'react';

export default {
    title: 'React.memo',
}

const UsersSecret = (props: { users: Array<string> }) => {
    console.log('LIST OF USERS')
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }</div>
}

const Users = React.memo(UsersSecret)

export const Example1 = () => {
    console.log('COUNTING')
    const [counter, setCounter] = useState<number>(0)
    const [users, setUsers] = useState<Array<string>>(['Tom', 'Bill', 'Kate', 'Annie'])

    const addUser = () => {
        const newUsers = [...users, 'Steve' + new Date().getTime()];
        setUsers(newUsers)
    }

    users.push('Steve' + new Date().getTime());

    return <>
        <button onClick={() => {setCounter(counter + 1)}}>+</button>
        <button onClick={addUser}>add user</button>
        {counter}
        <Users users={users}/>
    </>
}

