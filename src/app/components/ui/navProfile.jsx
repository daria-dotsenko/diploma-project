import React, { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { Link } from "react-router-dom";

const NavProfile = () => {
  const { currentUser } = useAuth();
  const [isOpen, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(prevState => !prevState);
  };
  return <div className="dropdown" onClick={toggleMenu}>
    <div className="btn dropdown-toggle d-flex align-items-center">
      <div className="me-2">{currentUser.login}</div>
      <img src={currentUser.image}
           className="img-responsive rounded-circle"
           alt="avatar"
           height="40"
           />
    </div>
    <div className={`w-100 dropdown-menu ${isOpen ? "show" : ""}`}>
      <Link to={`/user/edit`} className="dropdown-item ">Profile</Link>
      <Link to="/logout" className="dropdown-item ">Log Out</Link>
    </div>
  </div>;
};

export default NavProfile;
