import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Store/authSlice";

const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items } = useSelector((state) => state.cart);

  const logOutBtn = () => {
    dispatch(logout(false));
    window.localStorage.clear();
    navigate("/");
  };

  return (
    <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-4">
      <div className="flex justify-between items-center max-w-7xl mx-auto place-items-center">
        <Link to="/home" className="text-3xl font-bold text-white">
          Shopsy
        </Link>
        <h2 className="text-3xl font-bold text-center">
          Welcome to the Shopsy App
        </h2>
        <div className="flex items-center space-x-4">
        <Link to="/cart" className="hover:text-gray-300">
            <span className="font-bold relative fa-solid fa-cart-shopping text-xl">
              <i className="before:absolute before:w-5 before:h-5 before:bg-purple-500 before:border-2  before:rounded-full before:-right-1 before:-top-3 "></i>
              <span className="absolute left-3 -top-2 text-xs text-white ">
                {" "}
                {items.length}
              </span>
            </span>
          </Link>

          <button
            onClick={logOutBtn}
            className="flex items-center px-4 py-2 text-white bg-indigo-600 hover:bg-orange-600 rounded-full focus:outline-none focus:shadow-outline-blue"
          >
            Logout
            <i className="fas fa-sign-out-alt ml-2"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
