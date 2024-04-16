import React, { useContext, useState } from "react";
import { Form, Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contects/AuthProvider";

import GoogleImg from "../assets/google-logo.svg";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { login, loginWithGoogle } = useContext(AuthContext);
  const [user, setUser] = useState(null);
  const [laoding, setLaoding] = useState(true);
  const [error, setError] = useState();

  const from = location.state?.form?.pathname || "/";
  const handleLogin = async (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    try {
      const userCredential = await login(email, password);
      const user = userCredential.user;
      alert("login successFully !");
      navigate(from, { remplace: true });
    } catch (error) {
      const errorMessage = error.message;
      setError(errorMessage);
    }
  };
  const handleRegister = () => {
    loginWithGoogle()
      .then((result) => {
        const user = result.user;
        alert("Inscription réussie !");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        setLaoding(false);
      });
  };
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold text-center">Login Form</h1>
            </div>
            <div className="divide-y divide-gray-200">
              <Form
                className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"
                onSubmit={handleLogin}
              >
                <div className="relative">
                  <input
                    id="email"
                    name="email"
                    type="text"
                    className="peer p h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Email address"
                  />
                </div>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    className="peer  h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Password"
                  />
                </div>
                {error && error ? (
                  <p className=" text-red-600 text-center">
                    Email or Password is not correct
                  </p>
                ) : (
                  ""
                )}
                <p>
                  if you haven't an account. Please
                  <Link to="/sign-up" className="text-blue-600 underline m-1">
                    Sign up
                  </Link>
                  Here
                </p>
                <div className="relative flex justify-center">
                  <button className="bg-blue-500 text-white rounded-md px-12 py-1 ">
                    Login
                  </button>
                </div>
              </Form>
            </div>
            <hr />
            <div className=" flex w-full items-center flex-col  mt-5 gap-3">
              <button className="block" onClick={handleRegister}>
                <img src={GoogleImg} className="h-12 w-12 inline-block" />
                Login with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
