import React from 'react';
import MyButton from "./UI/button/MyButton";

const UserItem = (props) => {
    return (
        <div className="user">
            <div className="user__content">
                <strong>{props.user.id}. {props.user.FullName} | {props.user.mail} | {props.user.number} | {props.user.groop}</strong>
            </div>
            <div className="user__btns">
                <MyButton onClick={() => props.remove(props.user)}>Удалить</MyButton>
            </div>
        </div>
    );
};

export default UserItem;