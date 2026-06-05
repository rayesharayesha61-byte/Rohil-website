// ScrollToTopLink.js
import React from "react";
import { Link } from "react-router-dom";

export default function ScrollToTopLink({ to, children, ...props }) {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Link to={to} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}
