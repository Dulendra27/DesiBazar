export default function Login(){
return(
<>
<div className="login-container">
      <h2>Sign in to DesiBazar</h2>
      <form>
        <input
          type="email"
          placeholder="Email"
          required
        />
        <input
          type="password"
          placeholder="Password"
          required
        />
        <div className="options">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <a href="#" className="forgot-password">Forgot Password?</a>
        </div>
        <button type="submit" className="sign-in-button">Sign in</button>
      </form>
      <div className="social-login">
        <p>Or login with</p>
        <button className="google-button">Google</button>
        <button className="apple-button">Apple</button>
      </div>
      <p className="sign-up-question">Don’t have an account? <a href="#">Sign Up now</a></p>
    </div>
</>

)


}