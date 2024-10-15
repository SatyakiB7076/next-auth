"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

const LoginPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      toast.success("Login Successfull");
      console.log(response);

      router.push("/profile");
    } catch (error: any) {
      console.log("Login Failed", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="flex flex-col text-center justify-center items-center py-2 min-h-screen">
      <div className="flex flex-col text-center justify-center items-center p-4 border-2 rounded-md border-white">
        <h1>{loading ? "Checking" : "Login"}</h1>

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
        <button
          className=" p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 hover:bg-white hover:text-black"
          onClick={onLogin}
        >
          {buttonDisabled ? "Enter Details" : "Login"}
        </button>
        <Link href="/signup">Sign up</Link>
      </div>
    </div>
  );
};

export default LoginPage;
