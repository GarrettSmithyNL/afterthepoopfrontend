import './UserReset.css'
import {Link} from "react-router-dom";

export const UserReset = () => {
    return (
        <div
            className="resetPanel"
            style={{
                    backgroundImage: `url(/images/backpanel.svg)`,
                    backgroundSize: '1000px'
                }}
        >
            <h2>Reset Password</h2>
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
                    id={'resetForm'}
                    className={'resetForm'}
                    method={'patch'}
                >
                    <label id={'resetPasswordLabel'} form={'resetForm'}>
                        New Password:
                    </label>
                    <input
                        id={'resetPasswordInput'}
                        form={'resetForm'}
                        type="text"
                    />
                    <label id={'resetRePasswordLabel'} form={'resetForm'}>
                        Re-Enter New Password:
                    </label>
                    <input
                        id={'resetRePasswordInput'}
                        form={'resetForm'}
                        type="text"
                    />
                    <input
                        type="submit"
                        className={'resetButton'}
                        form={'resetForm'}
                        value={'Change Password'}
                    />
                </form>
            </div>
        </div>
    )
}
