import React from "react";
import navImage from "../assets/Fill 213.svg";

export default function Navbar() {
  return (
    <nav className="nav">
      <img src={navImage} alt="" />
      <p>my travel journal.</p>
    </nav>
  );
}
