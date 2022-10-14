import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../../pages/Home";
import Users from "../../pages/Users";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/users" element={<Users/>} />
        </Routes>
    );
};

export default AppRouter;