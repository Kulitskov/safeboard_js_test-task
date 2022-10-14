import React, {useRef, useState} from "react";
import MyInput from "./UI/input/MyInput";

const UserForm = ({create}) => {
    const [user, setUser] = useState({FullName: '', account: '', groop: '', mail: '', number: ''})

    const addNewUser = (e) => {
        e.preventDefault()
        const newUser = {
            ...user, id: Date.now()
        }
        create(newUser)
        setUser({FullName: '', account: '', groop: '', mail: '', number: ''})
    }

    return (
        <form>
            <MyInput
                value={user.FullName}
                onChange={e => setUser({...user, FullName: e.target.value})}
                type="text"
                placeholder="ФИО"
            />
            <MyInput
                value={user.account}
                onChange={e => setUser({...user, account: e.target.value})}
                type="text"
                placeholder="Аккаунт"
            />
            <MyInput
                value={user.mail}
                onChange={e => setUser({...user, mail: e.target.value})}
                type="text"
                placeholder="Почта"
            />
            <MyInput
                value={user.groop}
                onChange={e => setUser({...user, groop: e.target.value})}
                type="text"
                placeholder="Должность"
            />
            <MyInput
                value={user.number}
                onChange={e => setUser({...user, number: e.target.value})}
                type="text"
                placeholder="Номер телефона"
            />
            <button onClick={addNewUser}>Создать пользвателя</button>
        </form>
    );
};

export default UserForm;