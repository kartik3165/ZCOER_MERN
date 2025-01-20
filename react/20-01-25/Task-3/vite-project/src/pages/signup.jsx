import React from 'react';

function Signup() {
  return (
    <div>
      <form>
        <label>Name:</label><br />
        <input type="text" name="name" required /><br />

        <label>Email:</label><br />
        <input type="email" name="email" required /><br />

        <label>Password:</label><br />
        <input type="password" name="password" required /><br />

        <button type="submit">Signup</button>
      </form>
      <p>
        Already have an account? <a href="/login">Login here</a>.
      </p>
    </div>
  );
}

export default Signup;
