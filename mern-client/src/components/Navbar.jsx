import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { FaBlog } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
import { AuthContext } from "../contects/AuthProvider";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const { user } = useContext(AuthContext);
  console.log(user);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleSticky = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleSticky);

    return () => {
      window.addEventListener("scroll", handleSticky);
    };
  }, []);
  // navItem

  const navItem = [
    { link: "Home", path: "/" },
    { link: "About", path: "/about" },
    { link: "Shop", path: "/shop" },
    { link: "Sell Your Book", path: "/admin/dashboard" },
    { link: "Blog", path: "/blog" },
  ];

  return (
    <header className="w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300">
      <nav
        className={`py-4 px-4 lg:px-24 ${
          isSticky ? "sticky top-0 left-0 right-0 bg-blue-300 " : ""
        }`}
      >
        <div className="flex justify-between items-center text-base gap-8">
          {/* {logo} */}
          <Link
            to="/"
            className="text-2xl font-bold flex items-center text-blue-700 "
          >
            <FaBlog className="inline-block" /> Book
          </Link>

          {/* navitem */}
          <ul className="md:flex space-x-12 hidden">
            {navItem.map(({ link, path }) => (
              <Link
                key={path}
                to={path}
                className="block text-base text-black uppercase cursor-pointer hover:text-blue-700"
              >
                {link}
              </Link>
            ))}
          </ul>

          {/* button for lg device*/}
          <div className="space-x-12 hidden lg:flex items-center">
            {/* <div className="text-gray-500">{user ? user.displayName : ""}</div> */}

            <button>
              <FaBarsStaggered className="w-5  hover:text-blue-700" />
            </button>
          </div>
          {/* button for mobile device*/}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-black focus:outline-none"
            >
              {isMenuOpen ? (
                <FaXmark className="h-5 w-5 text-black" />
              ) : (
                <FaBarsStaggered className="h-5 w-5 text-black" />
              )}
            </button>
          </div>
        </div>
        {/* navitem for sm device*/}
        <div
          className={`space-y-4 px-4 py-7 mt-16 bg-blue-700 ${
            isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
          }`}
        >
          {navItem.map(({ link, path }) => (
            <Link
              key={path}
              to={path}
              className="block text-base text-white uppercase cursor-pointer "
            >
              {link}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
