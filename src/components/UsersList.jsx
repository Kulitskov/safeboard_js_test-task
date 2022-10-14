import React from 'react';
import UserItem from "./UserItem";

const UsersList = ({users, title, remove}) => {

    if(!users.length){
        return (
            <h1 style={{textAlign: 'center'}}>Пользователи не найдены</h1>
        )
        return users;
    }

    return (
        <div>
            <h1
                style={{textAlign: 'center'}}>{title}
            </h1>
            {users.map((user, index) =>
                <UserItem remove={remove} user={user} key={user.id}/>
            )}
        </div>
    );
};

export default UsersList;