import React, { useState } from "react";
import ProductList from "../Component/ProductsList";
import NavBar from "../Component/Navbar";
import Footer from "../Footer/Footer";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const searchProduct = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <>
      <div className="fixed top-0 right-0 w-full z-10">
        <NavBar />
      </div>

      <section className="bg-white p-6 rounded-lg shadow-lg  relative top-20">
        <div className="w-4/5 flex justify-between align-middle ml-20 ">
          <h3 className="text-2xl font-bold mb-4 w-2/5 text-indigo-500 ml-4">
            Products
          </h3>
          <input
            className="text-lg w-4/5 border-indigo-500 bg-slate-200 pl-6 outline-none rounded-lg"
            type="text"
            placeholder="Search Your preferred Items here "
            onChange={(e) => searchProduct(e)}
          />
        </div>

        <ProductList searchTerm={searchTerm} />
      </section>
      <div className="sticky right-0 w-full mt-10">
      <Footer />

      </div>
    </>
  );
};

export default Home;
