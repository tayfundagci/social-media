import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userLogout } from "../redux/userSlice";

function Navbar() {
  const currentUser = useSelector((store) => store.users.currentUser);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(userLogout());
  };

  return (
    <div>
      <div className="h-16  bg-indigo-400 flex justify-between items-center px-10 rounded-t-none">
        <div className="text-xl font-medium text-gray-800 hover:text-indigo-200">
          <Link to="/">tdsocial</Link>
        </div>

        <div>
          <input
            type="text"
            placeholder="Search"
            className="bg-indigo-200 rounded border-2  px-5 py-1 text-black active:border-indigo-200"
          />
        </div>

        <div className="flex gap-6 items-center text-center content-center">
          <div className="hover:text-indigo-200">
            <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <span>Home</span>
            </Link>
          </div>

          {currentUser ? (
            <div className="flex gap-5 ">
              <div className="hover:text-indigo-200">
                <Link to="/profile">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  <span>Profile</span>
                </Link>
              </div>
              <button
                className="border-2 active:border-indigo-200 bg-indigo-200 rounded px-6 py-2 font-normal hover:bg-indigo-600 hover:text-white shadow-sm shadow-black"
                onClick={handleLogout}
              >
                LOGOUT
              </button>
            </div>
          ) : (
            <div className="gap-5 flex ">
              <Link to="/signin">
                <button className="border-2 active:border-indigo-200 bg-indigo-200 rounded px-4 py-2 font-normal hover:bg-indigo-600 hover:text-white shadow-sm shadow-black">
                  SIGN IN
                </button>
              </Link>
              <Link to="/signup">
                <button className="border-2 active:border-indigo-200 bg-indigo-200 rounded px-4 py-2 font-normal hover:bg-indigo-600 hover:text-white shadow-sm shadow-black">
                  SIGN UP
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
