import './LoginPanel.css'

const LoginPanel = () => {
    return (
      <div className={'loginPanel'}>
          <h3>Login</h3>
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

export default LoginPanel;