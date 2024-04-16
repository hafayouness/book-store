import { Button } from "flowbite-react";
import React, { useContext } from "react";
import { AuthContext } from "../contects/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const Logout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);
  const from = location.state?.form?.pathname || "/";
  const handleLogout = () => {
    logout()
      .then(() => {
        // Sign-out successful.
        alert("Sign out successfully");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  return (
    <div className="h-screen bg-teal-100 flex items-center justify-center">
      <Button
        className="bg-red-700 px-8 py-2 text-white rounded"
        onClick={handleLogout}
      >
        Logout
      </Button>
    </div>
  );
};

export default Logout;
