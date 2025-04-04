import React from 'react';
import '../SignIn.css';

const SignIn = (): React.JSX.Element => {
  return (
    <div className="signin">
      <div className="container">
        <h2>Sign In</h2>
        <form>
          <div className="form-group">
            <label>Username</label>
            <input type="text" name="username" placeholder="Enter your username" />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" name="password" placeholder="Enter your password" />
          </div>

          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
