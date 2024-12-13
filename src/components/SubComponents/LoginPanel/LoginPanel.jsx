import './LoginPanel.css'

export const LoginPanel = () => {
    return (
      <div className={'loginPanel'}>
          <h2 className={'loginHeader'}>Login</h2>
          <form className={'loginForm'}>
              <label>Email</label>
              <input type={'text'} className={'loginText'} />
              <label>Password</label>
              <input type={'text'} className={'loginText'} />
              <input type={'submit'} className={"submitButton"} value={"Login"} />
          </form>
      </div>
    );
}
