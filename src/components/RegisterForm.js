import React from "react";

const RegisterForm = () => {
  return (
    <section className="login-register">
      <h2>Create a Company Account</h2>
      <form>
        <input type="text" placeholder="Company Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" autoComplete="true" />
        <input
          type="password"
          placeholder="Confirm Password"
          autoComplete="true"
        />
        <button>Register</button>
        <p>
          Already have an account? <a href="./login">Login</a>
        </p>
      </form>
    </section>
  );
};

export default RegisterForm;
