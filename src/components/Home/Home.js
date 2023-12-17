import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import logo from "../../assets/logo.png";
import "./Home.css";
import Todolist from "../TodoList/Todolist";
import { Link } from 'react-router-dom';


const Home = () => {
  const [loading, setLoading] = useState(true);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    // Simulate an asynchronous action
    const fakeAsyncAction = async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setLoading(false);
    };

    fakeAsyncAction();
  }, []);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className="content">
          <nav className="navbar">
            <div className="navbar-left">
              <img src={logo} alt="Company Logo" className="logo" />
            </div>
            <div className="navbar-right">
              {/* Desktop Navigation Links */}
              <div className="special">
                <Link to="/">Home</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/about">About</Link>
              </div>

              {/* Mobile Navigation Button */}
              <button
                className={`menu-button ${showMobileMenu ? "open" : ""}`}
                onClick={toggleMobileMenu}
              >
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
              </button>
              {showMobileMenu && (
                 <div className="navbar-right mobile-menu">
                 <Link to="/">Home</Link>
                 <Link to="/contact">Contact</Link>
                 <Link to="/about">About</Link>
               </div>
              )}
            </div>
          </nav>
          <div className="todolist">
            <Todolist/>
          </div>
        </div>

        
      )}
    </div>
  );
};

export default Home;
