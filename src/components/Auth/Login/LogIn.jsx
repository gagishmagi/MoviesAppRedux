import React, { useState } from "react";
import './Login.css'
import { logIn } from '../../../actions/authActions'
import { connect } from "react-redux";

const LogIn = ({error,logIn}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleStateChange(e) {
    const value = e.target.value;

    switch (e.target.id) {
      case "username":
        setUsername(value);
        break;

      case "password":
        setPassword(value);
        break;

      default:
        break;
    }
  }


  function handleLogin(e){
    // console.log(props)
    logIn(username, password)
  }

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
      <h1 className="mb-8 text-3xl text-center">Login</h1>
      {error && <div>Error {error} </div>}
      <div className="mb-4">
        <label
          className="block text-grey-darker text-sm font-bold mb-2"
          htmlFor="username"
        >
          Email
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          id="username"
          type="text"
          placeholder="Username"
          onChange={handleStateChange}
          value={username}
        />
      </div>
      <div className="mb-6">
        <label
          className="block text-grey-darker text-sm font-bold mb-2"
          htmlFor="password"
        >
          Password
        </label>
        <input
          className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
          id="password"
          type="password"
          placeholder="******************"
          onChange={handleStateChange}
          value={password}
        />
        <p className="text-red text-xs italic">Please choose a password.</p>
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-primary hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
          type="button"
          onClick={handleLogin}
        >
          Sign In
        </button>
        <a
          className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker"
          href="#"
        >
          Forgot Password?
        </a>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  error: state.auth.error
})

export default connect(mapStateToProps, {logIn})(LogIn);
