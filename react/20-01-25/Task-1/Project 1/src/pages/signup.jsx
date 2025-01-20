// eslint-disable-next-line no-unused-vars
import React from 'react';

function SignUp() {
  return (
    <div>
        <label htmlFor="">Full Name</label><br />
        <input type="text" /><br />

        <label htmlFor="">Email</label><br />
        <input type="text" /><br />

        <label htmlFor="">Password</label><br />
        <input type="password" /><br /><br />

        <button> Submit</button>
    </div>
  );
}

export default SignUp;
