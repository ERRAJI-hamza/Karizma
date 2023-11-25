import React ,{useEffect, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import { useAuth } from "../context/Auths.js";
import axios from 'axios';


export const Login = () => {


const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [auth, setAuth] = useAuth();
const navigate = useNavigate();
 
const handleSubmit = async (e) =>{
    e.preventDefault();
    try{
     const res = await axios.post("/api/v1/auth/login",{email,password});
     if (res && res.data.success) {
      toast.success(res.data && res.data.message);
      setAuth({
        ...auth,
        user: res.data.user,
        token: res.data.token,
      });
      localStorage.setItem("auth", JSON.stringify(res.data));
      navigate("/Home");
      console.log(res.data)
    } else {
      toast.error(res.data.message);
    }
  } catch (error) {
    console.log(error);
    toast.error("Something went wrong");
  }
  };

 

  return (
    <FormContainer>
        <Toaster />
        <form onSubmit={handleSubmit}>
            <div className='login-header'>
                  <img src='' alt=''/>
                  <h1>karizma</h1>
            </div>
        
            <input 
              type="text" 
              placeholder="email"
              value={email}
              onChange={(e) =>setEmail(e.target.value)}
            />
            <input 
              type="password" 
              placeholder="password"
              value={password}
              onChange={(e) =>setPassword(e.target.value)}
            />

            <button type='submit'> login</button>
            <span>Already have an account? <Link to="/register">Register</Link></span>
        </form>
    </FormContainer>
  )
}


const FormContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display : flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    background-color: #faf9f9;

    form{
    display : flex;
    flex-direction:column;
    border : 2px solid #EAEAE8;
    background-color: #F4F4F4;
    width: 35vw;
    height: 60vh;
    gap : 1rem;
    padding : 2.3rem 2rem;
    }

    input{
      background-color: transparent;
      padding : 0.8rem;
      font-size : 1.1rem;
      border: 1px solid black;
    }

    button{
     background-color: #2b94d0;
      color: black;
    padding: 0.8rem 1rem;
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.4rem;
    font-size: 1rem;
    font-size : 1.1rem;
    margin-top:13px;
    }
    span {
        color: black;
        text-transform: uppercase;
        a {
          color: #4e0eff;
          text-decoration: none;
          font-weight: bold;
        }
      }

.login-header{
    display : flex;
        justify-content: center;
        align-items: center;
        gap: 0.2rem;
        img{
            height:3rem;
        }
        h1{
            color:black;
        }
}

@media screen and (max-width: 767px) {
    form {
      width: 55vw;
    }
  }
`;
