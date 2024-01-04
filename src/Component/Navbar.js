import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = () => {
  const {items} = useSelector((state) => state.cart);
 

  return (
    <div className="bg-indigo-500 text-white p-4">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/home" className="text-2xl font-bold text-white">
          Shopsy
        </Link>
        <h2 className="text-3xl font-bold text-center">
          Welcome to the Shopsy App
        </h2>
        <div className="flex items-center space-x-4">
          {/* <Link to="/" className="hover:text-gray-300">
            Home
          </Link> */}
          <Link to="/cart" className="hover:text-gray-300">
            <span className="font-bold relative fa-solid fa-cart-shopping text-xl">
              <i className="before:absolute before:w-5 before:h-5 before:bg-white before:border-2  before:rounded-full before:-right-1 before:-top-3 "></i>
              <span className="absolute left-3 -top-2 text-xs text-indigo-500 " > {items.length}</span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
