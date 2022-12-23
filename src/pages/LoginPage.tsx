import { create } from 'domain';
import React, {useState, FC, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../store/actions/user';
import { loginUser } from '../store/actions/user';
import { useAppDispatch } from '../store/hooks';

const LoginPage: FC = () => {
    const dispatch = useAppDispatch();
    const reg: any = useRef(null)
    const bg: any = useRef(null)

    const [open, setOpen] = useState(false);
    console.log(reg);
    
    const handleOpen = () => {
        console.log(reg.current);
        
    reg.current.style.display = 'flex'
    bg.current.style.display = 'block'
    // setOpen(true);
    }
    const handleClose = () => {
        reg.current.style.display = 'none';
        bg.current.style.display = 'none'
    // setOpen(false);
    }

    const [open2, setOpen2] = useState(false);
    const handleOpen2 = () => setOpen2(true);
    const handleClose2 = () => setOpen2(false);

    
    // registration 
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const register = () => {
        if(!username.trim() || !email.trim() || !pass.trim()){
            alert("Some inputs are empty!");
            return;
        }else if(pass.length < 8){
            alert("Your password must include at least 8 symbols");
            return;
        }else if(!email.includes('@gmail.')){
            alert("Enter a valid email");
            return;
        }
      dispatch(  createUser(username, email, pass))
    //   navigate('/tasks')
        console.log(username);
    }

    // login 
    const [username2, setUsername2] = useState('');
    const [pass2, setPass2] = useState('');

    const login = () => {
        // if()
        dispatch( loginUser(username2, pass2));
    }

    const navigate = useNavigate();   

  return (
    <div className='main_login'>
        {/* <div className="vector1">1</div> */}
        <img className='vector1' src="https://img.freepik.com/premium-vector/strategy-tactics-plan-hand-drawn-outline-doodle-icon-sport-action-strategy-business-tactic-teamwork-concept-vector-sketch-illustration-for-print-web-mobile-and-infographics-on-white-background_107173-18797.jpg" alt="error" />
        <img className='pencil_img' src="https://static9.depositphotos.com/1585301/1193/i/600/depositphotos_11938002-stock-photo-colorful-pens-in-holder-isolated.jpg" alt="" />
        <div className="logo_box">
            <img src='/images/makers_logo.png' alt="error" />
        </div>
        <div className="login_desc">
            <h2>Organize your work deals easily!</h2>
            <p>Become focused, organized, and calm with "Makers Todo-List". The world’s #1 task manager!</p>
            <button onClick={handleOpen}>Sign up for free</button>
            <p onClick={handleOpen2}>Log in</p>
        </div>
        {/* modal_register */}
        {/* {open && */}
         <div ref={bg} style={{display: 'none'}} onClick={handleClose} className='modal_bg' />
         {/* } */}
        {/* {open &&  */}
        <div ref={reg} style={{display: 'none'}} className="modal_register">
            <h3>Registration</h3>
            <div className="inputs">
            <input type="text" placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} className="register_inp" />
            <input type="text" placeholder='Email' className="register_inp" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="text" placeholder='Password' className="register_inp" value={pass} onChange={(e) => setPass(e.target.value)} />
            </div>
            <button onClick={register}>Register</button>
        </div>
        {/* } */}
        {/* modal_login */}
        {open2 && <div onClick={handleClose2} className='modal_bg' />}
        {open2 && 
        <div className="modal_login">
            <h3>Login</h3>
            <div className="inputs2">
            <input type="text" placeholder='Username' value={username2} onChange={(e) => setUsername2(e.target.value)} className="register_inp" />
            <input type="text" placeholder='Password' value={pass2} onChange={(e) => setPass2(e.target.value)} className="register_inp" />
            </div>
            <button onClick={() => {login(); navigate('/')}}>Log in</button>
        </div>}
    </div>
  )
}

export default LoginPage