import './App.css'
import React from "react";
import Menu from "./components/Menu";

const App = () => {
    return (
        <div className="app">
            <Menu/>
            <div className="main-content">
                <img
                    src={"/src/assets/alpaca.png"}
                    alt="Main visual"
                    className="main-content__image"
                />
            </div>
        </div>
    );
};

export default App;
