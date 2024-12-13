import './UserMain.css'
import {Link} from "react-router-dom";

export const UserMain = () => {
    return (
        <div
            className="userPanel"
            style={{
                backgroundImage: `url(/images/backpanel.svg)`,
                backgroundSize: '1000px'
            }}
        >
            <h2>ExampleUser123</h2>
            <div
                className="mainBackgroundPic"
                style={{
                    backgroundImage: `url(/images/largepaper.svg)`,
                    backgroundSize: '900px',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                <div className="userRow">
                    <label>Account Balance:</label>
                    <p>$999.99</p>
                    <form>
                        <input className={'balanceText'} type="text"/>
                        <input className={'balanceButton'} type="submit" value={'Add Balance'}/>
                    </form>

                </div>
                <Link to={'/user/transactions'}>
                    <button className={'userButton'}>See All Transactions</button>
                </Link>
                <Link to={'/user/reset'}>
                    <button className={'userButton'}>Change Password</button>
                </Link>
                <Link to={'/user/delete'}>
                    <button className={'userButton'}>Delete Account</button>
                </Link>
            </div>
        </div>
    )
}
