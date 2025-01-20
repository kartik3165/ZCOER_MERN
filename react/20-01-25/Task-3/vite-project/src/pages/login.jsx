import React from 'react';

function Login() {
  return (
    <div>
      <form>
        <label>Email:</label><br />
        <input type="email" name="email" required /><br />

        <label>Password:</label><br />
        <input type="password" name="password" required /><br />

        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <a href="/signup">Signup here</a>.
      </p>
    </div>
  );
}

export default Login;
