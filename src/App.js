
import './App.css';
import {Routes, Route, BrowserRouter as Router} from "react-router-dom";
import {createBrowserHistory} from 'history';
import Home from "./pages/Home";
import About from "./pages/About";
import Sell from "./pages/Sell";
import Buy from "./pages/Buy";
import UserProfile from "./pages/UserProfile";

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
        <div className={"App"}>
            <Routes>
                <Route path={"/"} element={ <Home /> } />
                <Route path={"/about"} element={ <About /> } />
                <Route path={"/sell"} element={ <Sell /> } />
                <Route path={"/fertilizer"} element={ <Buy /> } />
                <Route path={"/user"} element={ <UserProfile /> } />
            </Routes>
        </div>
    </Router>
  );
}

export default App;
