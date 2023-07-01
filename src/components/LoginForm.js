import React from "react";

const LoginForm = () => {
  return (
    <section className="login-register">
      <h2>Login to Your Company Account</h2>
      <form>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" autoComplete="true" />
        <label>
          <input type="checkbox" /> Remember Me
        </label>

        <button>Login</button>
        <p>
          Don't have an account? <a href="./register">Register</a>
        </p>
      </form>
    </section>
  );
};

export default LoginForm;
