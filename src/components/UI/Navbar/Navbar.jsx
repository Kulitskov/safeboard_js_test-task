import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar__links">
                <Link style={{padding: 13}} to="/">Домашняя страница</Link>
                <Link style={{padding: 13}} to="/users">Пользователи</Link>
            </div>
        </div>
    );
};

export default Navbar;