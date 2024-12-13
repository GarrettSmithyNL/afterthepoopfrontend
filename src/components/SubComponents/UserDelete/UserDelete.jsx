import './UserDelete.css'
import {Link} from "react-router-dom";

export const UserDelete = () => {
    return (
        <div
            className="deletePanel"
            style={{
                backgroundImage: `url(/images/backpanel.svg)`,
                backgroundSize: '1000px'
            }}
        >
            <h2>Delete Account</h2>
            <div
                className="backgroundPic"
                style={{
                    backgroundImage: `url(/images/largepaper.svg)`,
                    backgroundSize: '900px',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                <Link to={'/user'}>
                    <button className={'backButton'}>Back</button>
                </Link>
                <form
                    id={'deleteForm'}
                    className={'deleteForm'}
                    method={'delete'}
                >
                    <label id={'deleteLabel'} form={'deleteForm'}>
                        Please Confirm you want to delete your account. Type 'DELETE'.
                    </label>
                    <input id={'deleteTextBox'} type="text"/>
                    <input
                        type="submit"
                        className={'deleteButton'}
                        form={'deleteForm'}
                        value={'DELETE ACCOUNT'}
                    />
                </form>
            </div>
        </div>
    );
}
