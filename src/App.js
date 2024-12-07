
import './App.css';
import {Routes, Route, BrowserRouter as Router} from "react-router-dom";
import {createBrowserHistory} from 'history';
import {Home} from "./components/Pages/Home/Home";
import {About} from "./components/Pages/About/About";
import {Sell} from "./components/Pages/Sell/Sell";
import {Buy} from "./components/Pages/Buy/Buy";
import {UserProfile} from "./components/Pages/UserProfile/UserProfile";

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
        <div className={"App"}>
            <Routes>
                <Route path={"/"} element={ <Home /> } />
                <Route path={"/about"} element={ <About /> } />
                <Route path={"/sell"} element={ <Sell /> } />
                <Route path={"/buy"} element={ <Buy /> } />
                <Route path={"/user/*"} element={ <UserProfile /> } />
            </Routes>
        </div>
    </Router>
  );
}

export default App;
