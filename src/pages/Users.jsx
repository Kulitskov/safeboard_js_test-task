import React, {useEffect, useMemo, useRef, useState} from "react";
import MyButton from "../components/UI/button/MyButton";
import MyModal from "../components/UI/MyModal/MyModal";
import UsersList from "../components/UsersList";
import UserFilter from "../components/UserFilter";
import UserForm from "../components/UserForm";
import axios from "axios";

function Users() {
    const [users, setUsers] = useState([
    ])

    useEffect(() => {
        fetchUsers()
    }, [])

    async function fetchUsers() {
        const responce = await axios.get('http://localhost:3001/users')
        setUsers(responce.data)
    }

    const [filter, setFilter] = useState({sort:'', query:''})
    const [modal, setModal] = useState(false)

    const sortedUsers = useMemo(() => {
        if (filter.sort){
            return [...users].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        }
        return users;
    }, [filter.sort, users])

    const sortedAndSearchedUsers = useMemo( () => {
        return sortedUsers.filter(user => user.FullName.toLowerCase().includes(filter.query.toLowerCase()))
    }, [filter.query, sortedUsers])

    const createUser = (newUser) => {
        setUsers([...users, newUser])
        setModal(false)
    }


    const removeUser = (user) => {
        setUsers(users.filter(u => u.id !== user.id))
    }

    return (
        <div className="App">
            <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>
                Создать пользователя
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <UserForm create={createUser}/>
            </MyModal>
            <hr style={{margin: '15px 0'}}/>
            <UserFilter filter={filter} setFilter={setFilter}/>
            <UsersList remove={removeUser} users={sortedAndSearchedUsers} title="Список пользователей"/>
        </div>
    );
}

export default Users;
