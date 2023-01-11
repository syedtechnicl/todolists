import React from "react";
import { useLocation } from "react-router-dom";

const Contact = () => {
  const location = useLocation();
  return (
    <div>
      <h1>This is from {location.pathname.replace("/", "")} page</h1>
      {location.pathname === "/about/thapa" ? (
        <p>hii syed good to see you</p>
      ) : (
        <p>Login to see your files</p>
      )}
    </div>
  );
};

export default Contact;
