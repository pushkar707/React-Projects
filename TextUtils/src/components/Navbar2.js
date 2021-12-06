import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar2() {
  const [navColor, setnavColor] = useState("light");
  const [navBg, setnavBg] = useState("light");

  function blackCheck() {
    const black = document.getElementById("black");
    const white = document.getElementById("white");
    const blue = document.getElementById("blue");

    if (black.checked == true) {
      setnavBg("dark");
      setnavColor("dark");
      document.body.style.backgroundColor = "#292727";
      document.body.style.color = "white";
      document.getElementById("textarea").style.backgroundColor = "#292727";
      document.getElementById("textarea").style.color = "white";
    } else if(white.checked == true){
      setnavBg("light");
      setnavColor("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      document.getElementById("textarea").style.backgroundColor = "white";
      document.getElementById("textarea").style.color = "black";
    } else if(blue.checked == true){
      setnavBg("primary");
      setnavColor("dark");
      document.body.style.backgroundColor = "rgb(5, 5, 61)";
      document.body.style.color = "white";
      document.getElementById("textarea").style.backgroundColor = "rgb(5, 5, 61)";
      document.getElementById("textarea").style.color = "white";
    }
  }

  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${navColor} bg-${navBg}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/about">
                  About
                </Link>
              </li>
            </ul>

            <div className="form-check form-switch mx-2">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="white"
                value="option1"
                onClick={blackCheck}
              />
              <label className="form-check-label" for="inlineRadio1">
                Light
              </label>
            </div>

            <div className="form-check form-switch mx-2">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="blue"
                value="option1"
                onClick={blackCheck}
              />
              <label className="form-check-label" for="inlineRadio1">
                Blue
              </label>
            </div>

            <div className="form-check form-switch mx-2">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="black"
                value="option2"
                onClick={blackCheck}
              />
              <label className="form-check-label" for="inlineRadio2">
                Black
              </label>
            </div>

            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
