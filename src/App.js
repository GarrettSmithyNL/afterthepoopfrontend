
import './App.css';
import {Routes, Route, Router} from "react-router-dom";
import {useEffect, useState, useCallback} from "react";
import {createBrowserHistory} from 'history';

const history = createBrowserHistory();

function App() {
  return (
    <Router location={window.location} navigator={history}>
        <div className={"App"}>
            <Routes>
                <Route
                    path={"/"}
                    element={
                        <p>This is Home</p>
                    }
                />
                <Route
                    path={"/about"}
                    element={
                        <p>This is about</p>
                    }
                />
                <Route
                    path={"/sell"}
                    element={
                        <p>This is sell</p>
                    }
                />
                <Route
                    path={"/fertilizer"}
                    element={
                        <p>This is fertilizer</p>
                    }
                />
                <Route
                    path={"/user"}
                    element={
                        <p>This is user</p>
                    }
                />
            </Routes>
        </div>
    </Router>
  );
}

export default App;
