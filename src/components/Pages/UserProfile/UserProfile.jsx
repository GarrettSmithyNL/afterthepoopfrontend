import './UserProfile.css'
import {NavBar} from "../../SubComponents/NavBar/NavBar";
import {Header} from "../../SubComponents/Header/Header";
import {Route, Routes} from "react-router-dom";
import {UserDelete} from "../../SubComponents/UserDelete/UserDelete";
import {UserTransaction} from "../../SubComponents/UserTransaction/UserTransaction";
import {UserMain} from "../../SubComponents/UserMain/UserMain";
import {UserReset} from "../../SubComponents/UserReset/UserReset";

export const UserProfile = () => {
    return (
        <div className={"userProfilePage"}>
            <Header />
            <NavBar />
            <Routes>
                <Route path={'/'} element={ <UserMain /> } />
                <Route path={'/reset'} element={ <UserReset /> } />
                <Route path={'/transactions'} element={<UserTransaction />} />
                <Route path={'/delete'} element={ <UserDelete /> } />
            </Routes>
        </div>
    );
}
