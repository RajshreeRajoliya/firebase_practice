import React from "react";
import { useState } from "react";

import { EmailLogin, emailAuth, googleAuthen } from "./config";
const Signup = () => {
  const sign = () => {
    googleAuthen()
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  let [email, setEmail] = useState("");
  let [pd, setPd] = useState("");

  const signupwithEmail=(e)=>{
    e.preventDefault();
    EmailLogin(email,pd)
    .then((user)=>{
console.log(user)
    }).catch((err)=>{
      console.log(err)
    })
  }

  return (
    <div>
      <button onClick={sign}>Google Authentication</button>

      <form onSubmit={signupwithEmail}>
        <input placeholder="Enter Email" type="email" onChange={(e)=>setEmail(e.target.value)}/>
        <input placeholder="Enter Password" type="text" onChange={(e)=>setPd(e.target.value)}/>
        <button>SUBMIT</button>
      </form>
    </div>
  );
};

export default Signup;
