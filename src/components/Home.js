function Home(){
    return(
        <div className="home">
<div className="home-container">
<div className="top-item">
    <select>
        <option>English</option>
    </select>
    <div>
    <img src="./logo.png"></img>
</div>
</div>

<div className="center-box">
<div className="button-box">
  <button>
 <h4>Continue with Facebook</h4>
  </button>
</div>
<div className="or-box">
    <h4 className="or">OR</h4>
</div>

<div className="input-box">
    <input type="text" placeholder="Phone number, username, or email"></input>
    <input type="password" placeholder="Password"></input>

    <h5>Forgot password?</h5>
    <button>Log in</button>
</div>
<div className="bottom-box">
    <h5>Don't have an account?</h5>
    <a>Sign Up</a>
</div>
<div className="term">
    <img src="./term.jpeg"></img>
</div>
</div>
</div>
<div className="bottom">
    <img src="./bottom.jpeg"></img>
</div>
        </div>
    )
}
export default Home