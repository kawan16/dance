import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import SearchMove from "./move/SearchMove/SearchMove";
import GenerateMoveSequence from "./move/GenerateMoveSequence/GenerateMoveSequence";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/"  element={<SearchMove />} />
                <Route path="/generate"  element={<GenerateMoveSequence />} />
            </Routes>
        </BrowserRouter>
    );
}
export default App;
