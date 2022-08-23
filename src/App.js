
import React from 'react';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

import {Home, Quiz, Result} from "./Components/View";

const App = () => {

    // console.log("App.js");

    return (<>
        <BrowserRouter>
            <Routes>
                <Route path={'/home'} element={<Home/>}/>
                <Route path={'/quiz'} element={<Quiz/>}/>
                <Route path={'/result'} element={<Result/>}/>
                <Route
                    path="*"
                    element={<Navigate to="/home" replace/>}
                />
            </Routes>
        </BrowserRouter>
    </>);
};

export default App;