import './UserMain.css'
import {Link} from "react-router-dom";

export const UserMain = () => {
    return (
        <div className="userPanel">
            <h3>UserName</h3>
            <div className="userRow">
                <label>Account Balance:</label>
                <p>$999.99</p>
                <form>
                    <input type="text"/>
                    <input type="submit" value={'Add Balance'}/>
                </form>

            </div>
            <Link to={'/user/transactions'}>
                <button>See All Transactions</button>
            </Link>
            <Link to={'/user/reset'}>
                <button>Change Password</button>
            </Link>
            <Link to={'/user/delete'}>
                <button>Delete Account</button>
            </Link>
        </div>
    )
}
