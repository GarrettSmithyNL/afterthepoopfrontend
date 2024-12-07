import './UserReset.css'
import {Link} from "react-router-dom";

export const UserReset = () => {
    return (
        <div className="resetPanel">
            <Link to={'/user'}>
                <button>Back</button>
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
    )
}
