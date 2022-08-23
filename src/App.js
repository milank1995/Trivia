import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { Home, Quiz, Result } from './Components/View';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={'/home'} element={<Home />} />
                    <Route path={'/quiz'} element={<Quiz />} />
                    <Route path={'/result'} element={<Result />} />
                    <Route path="*" element={<Navigate to="/home" replace />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
