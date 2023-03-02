import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../store/actions/user";
import { useAppDispatch } from "../../store/hooks";
import "./navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const dispatch = useAppDispatch();

  const logout = () => {
    dispatch(logoutUser());
    navigate("/");
  };

  return (
    <nav className="tasks_nav">
      <div className="nav-box">
        <div onClick={() => setShow(!show)} className="nav-logo">
          <img src="/images/makers_logo.png" alt="error" />
          <button
            onClick={logout}
            className={show ? "logout_btn_on" : "logout_btn_off"}
          >
            Log out
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
