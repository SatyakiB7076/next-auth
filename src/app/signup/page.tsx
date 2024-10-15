"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import axios from "axios";

const SignupPage = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState(false);
  // const [error, setError] = useState(null);
  const [Loading, setLoading] = useState(false);

  const onSignup = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      console.log("Signup successfull", response.data);
      toast.success("Signup successfull");
      router.push("/login");
    } catch (error: any) {
      toast.error(error.message);
      console.log("Signup Failed", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      user.username.length > 0 &&
      user.email.length > 0 &&
      user.password.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="flex flex-col text-center justify-center items-center py-2 min-h-screen ">
      <h1>{Loading ? "processing" : "SignUp"}</h1>
      <div className="flex flex-col text-center justify-center items-center p-4 border-2 rounded-md border-white">
        <label htmlFor="username">username</label>
        <input
          className="p-2 border-gray-300 rounded-lg mb-4 focus:border-gray-600 text-gray-900"
          type="text"
          id="username"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          placeholder="username"
          required
        />
        <label htmlFor="email">email</label>
        <input
          className="p-2 border-gray-300 rounded-lg mb-4 focus:border-gray-600 text-gray-900"
          type="text"
          id="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="email"
        />
        <label htmlFor="password">password</label>
        <input
          className="p-2 border-gray-300 rounded-lg mb-4 focus:border-gray-600 text-gray-900"
          type="text"
          id="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="password"
        />
        <button
          className=" p-2 border border-gray-300 rounded-lg mb-4 `${buttonDisabled ? 'cursor-not-allowed' : ''}` focus:outline-none focus:border-gray-600 hover:bg-white hover:text-black"
          onClick={onSignup}
        >
          {buttonDisabled ? "Enter Details" : "Signup"}
        </button>
        <Link href="/login">Login here</Link>
      </div>
    </div>
  );
};

export default SignupPage;
