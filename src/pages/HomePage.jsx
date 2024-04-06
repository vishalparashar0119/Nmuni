import React from 'react'
import './Home.css'
import { useState } from "react";
import naradMuni from '../images/naradmunilogo.webp';
import { UserAuth } from '../context/AuthContext'
import { sendMessage } from "../openAi";
import { useNavigate } from 'react-router-dom';






const HomePage = () => {
  const {logOut} = UserAuth();
  
  
   const navigate = useNavigate();
  const handleSignOut = async () => {
    try {
      await logOut()
      navigate('/')
    } catch (error) {
      console.log(error);
    }
  };

  const [input , setInput] = useState('');
  const [message , setMessage] = useState([{
    text :" hi i am n muni how can i help you"
    ,isBot : true
  }])

  const handelSent = async ()=>{
     const res = await sendMessage(input);
     console.log(res)
     setMessage([...message,{
      text:input, isBot: false
     },{
      text:res, isBot: true
     }])
  }

  

  
    

  return (
    <div className="App">
    <div className="sideBar">
      <div className="upperSide">
        <div className="upperSideTop">
          <img  src={naradMuni} alt="" className="logo" />
          <span className="brand">
            n muni
          </span>
          <div className="upperSideBottom">
            <button className="quarry">what is the programming</button>
            <button className="quarry">what is the programming</button>

          </div>
        </div>

      </div>
      <div className="lowerSide">
           <div className="logoutButton">
             <button onClick={handleSignOut}>Logout</button>
           </div>
      </div>

    </div>
    <div className="mainDevision">

      <div className="chats">
        {message.map((message , i)=>
           <div key={i} className={message.isBot?"chat bot":"chat user"}>
           <p className="txt">
             {message.text}
           </p>
         </div>
        )}

      </div>
      <div className="chatFooter">
        <div className="inp">
          <input type="text" name="" id="" value={input} onChange={(e)=>setInput(e.target.value)} /> <button className="send" onClick={handelSent}>send</button>
        </div>
      </div>

    </div>
  </div>
  );
}

export default HomePage