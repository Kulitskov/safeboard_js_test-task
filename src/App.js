import React from "react";
import './styles/App.css';
import {BrowserRouter} from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Navbar from "./components/UI/Navbar/Navbar";
import AppRouter from "./components/UI/AppRouter";
import axios from "axios";


function App() {

    return (
        <div>
            <BrowserRouter>
                <Navbar/>
                <AppRouter/>
            </BrowserRouter>
        </div>


    )
}

export default App;
