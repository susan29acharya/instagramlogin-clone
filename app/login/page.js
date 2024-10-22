import React from "react";

const Login = () => {
  return (
    <>
      <div className="body">
        <div className="flex-container">
          <div className="left-container">
            <img
              src="https://www.instagram.com/static/images/homepage/phones/home-phones.png/1dc085cdb87d.png"
              alt=""
            />
            <div className="mobile-photo">
              <img
                className="top"
                src="https://www.instagram.com/static/images/homepage/screenshots/screenshot1.png/fdfe239b7c9f.png"
                alt=""
              />
            </div>
          </div>

          <div className="right-container">
            <div className="form">
              <div className="insta-logo">
                <img src="instagram-word.png" />
              </div>

              <form>
                <input
                  type="text"
                  placeholder="phone number, username, or email"
                />
                <br />
                <input type="password" placeholder="password" />

                <button>Log in</button>

                <div className="or">
                  <span></span>
                  <h5>OR</h5>
                  <span></span>
                </div>

                <div className="fbsection">
                  <img src="fblogo.png" />
                  <p>Log in with Facebook</p>
                </div>
                <p>Forgot password?</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
