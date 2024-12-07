import './UserDelete.css'
import {Link} from "react-router-dom";

export const UserDelete = () => {
    return (
      <div className="deletePanel">
          <Link to={'/user'}>
              <button>Back</button>
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
    );
}
