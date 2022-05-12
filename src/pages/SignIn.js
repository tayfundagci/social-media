import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../redux/userSlice";

function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    dispatch(userLogin());
    navigate("/");
  };
  return (
    <div className="">
      <div className="justify-center flex  border-gray-200 rounded p-10">
        <form>
          <div className=" px-20 py-10 rounded text-lg ">
            <div>
              <label className="text-white">Username</label>
              <br />
              <input
                type="text"
                placeholder="Enter Username"
                required
                className="bg-gray-200 rounded border-2 border-gray-400  px-4"
              />
            </div>

            <div className="mt-4">
              <label className="text-white">Password</label>
              <br />
              <input
                type="password"
                placeholder="Enter Password"
                required
                className="bg-gray-200 rounded border-2 border-gray-400 px-4"
              />
            </div>

            <div>
              <button
                className="bg-indigo-200 border-2 px-4 rounded mt-5 hover:bg-indigo-600 hover:text-white shadow-md shadow-black"
                onClick={handleLogin}
              >
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
