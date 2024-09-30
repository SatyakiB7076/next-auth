
'use client';
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {axios} from "axios";

const LoginPage = () => {
  const [user, setUser] = useState({
    
    email: "",
    password: "",
  });

  const onLogin = async () => {
    console.log( "logged in succsessfully !");
    
  };

  return (
    <div className="flex flex-col text-center justify-center items-center py-2 min-h-screen">
      <h1>Login</h1>
      
      <label htmlFor="email">Email</label>
      <input
        className="p-2 border-gray-300 rounded-lg mb-4 focus:border-gray-600 text-gray-900"
        type="text"
        id="email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="email"
      />
      <label htmlFor="password">Password</label>
      <input
        className="p-2 border-gray-300 rounded-lg mb-4 focus:border-gray-600 text-gray-900"
        type="text"
        id="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="password"
      />
      <button className=" p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 hover:bg-white hover:text-black" onClick={onLogin}>Login</button>
      <Link href='/signup'>Sign up</Link>
    </div>
  );
};

export default LoginPage

