import React, { useState, FC, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from "../../store/actions/user";
import { loginUser } from "../../store/actions/user";
import { useAppDispatch } from "../../store/hooks";
import { useSelector } from "react-redux";
import Button from "../../ui/Button/Button";
import Modal from "../../ui/Modal/Modal";
import Input from "../../ui/Input/Input";
import "./login.css";
import "./adaptiveLogin.css";

const LoginPage: FC = () => {
  const [regModal, setRegModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);

  const navigate = useNavigate();

  const openRegister = () => {
    setRegModal(true);
  };

  const openLogin = () => {
    setLoginModal(true);
  };

  const dispatch = useAppDispatch();

  // registration
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const error = useSelector((state: any) => state.user.error);
  console.log(error, "error");

  const register = () => {
    if (!username.trim() || !email.trim() || !pass.trim()) {
      alert("Some inputs are empty!");
      return;
    } else if (pass.length < 8) {
      alert("Your password must include at least 8 symbols");
      return;
    } else if (!email.includes("@gmail.") || !email.includes("mail.")) {
      alert("Enter a valid email");
      return;
    }
    dispatch(createUser(username, email, pass));
    console.log(username);
  };

  // login
  const [username2, setUsername2] = useState("");
  const [pass2, setPass2] = useState("");

  const login = () => {
    dispatch(loginUser(username2, pass2));
    navigate("/");
  };

  return (
    <div className="main_login">
      <img
        className="vector1"
        src="https://img.freepik.com/premium-vector/strategy-tactics-plan-hand-drawn-outline-doodle-icon-sport-action-strategy-business-tactic-teamwork-concept-vector-sketch-illustration-for-print-web-mobile-and-infographics-on-white-background_107173-18797.jpg"
        alt="error"
      />
      <img
        className="pencil_img"
        src="https://static9.depositphotos.com/1585301/1193/i/600/depositphotos_11938002-stock-photo-colorful-pens-in-holder-isolated.jpg"
        alt=""
      />
      <div className="logo_box">
        <img src="/images/makers_logo.png" alt="error" />
      </div>
      <img
        src="/images/man_thumbnail.png"
        width={200}
        alt=""
        className="man"
        style={{ display: "none" }}
      />
      <div className="login_desc">
        <h2>Register to start!</h2>
        <p>
          This app will allow you to book the rooms and other users will see it!
        </p>
        <Button className="hello" onClick={openRegister}>
          Register
        </Button>
        <div className="login_btn" onClick={openLogin}>
          Log in
        </div>
      </div>
      <Modal
        title="Registration"
        button="Sign up"
        isOpen={regModal}
        onClose={() => {
          setRegModal(false);
          setUsername("");
          setEmail("");
          setPass("");
        }}
        onClick={register}
      >
        <Input
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <Input
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <Input
          placeholder="Password"
          onChange={(e) => setPass(e.target.value)}
          value={pass}
        />
      </Modal>
      <Modal
        title="Login"
        button="Sign in"
        error={error}
        isOpen={loginModal}
        onClose={() => setLoginModal(false)}
        onClick={login}
      >
        <Input
          placeholder="Username"
          value={username2}
          onChange={(e) => setUsername2(e.target.value)}
        />
        <Input
          placeholder="Password"
          value={pass2}
          onChange={(e) => setPass2(e.target.value)}
        />
      </Modal>
    </div>
  );
};

export default LoginPage;
