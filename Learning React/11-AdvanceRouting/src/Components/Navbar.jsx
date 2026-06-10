import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex py-4 px-8 justify-between text-3xl text-black bg-amber-100">
      <h2 className=" font-bold">Team Diamonds</h2>
      <div className="flex gap-20 text-2xl underline">
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Product">Product</Link>
        <Link to="/Courses">Courses</Link>
      </div>
    </div>
  );
};

export default Navbar;
