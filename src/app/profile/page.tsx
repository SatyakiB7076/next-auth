"use client";
import axios from "axios";

//this useRouter is from navigation not router
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Link from "next/link";

function ProfilePage() {
  const [data, setData] = useState("");
  const [user, setUser] = useState("Guest");
  const router = useRouter();
  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logged out successfully");
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };
  useEffect(() => {
    const getUserData = async () => {
      try {
        const res = await axios.get("/api/users/user");
        console.log(res.data);
        setUser(res.data.data.username);
        setData(res.data.data._id);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    getUserData(); // Call the async function
  }, []); // Dependency array

  return (
    <>
      <h1 className="text-center">Dashboard</h1>
      <div className="flex flex-row text-center justify-center items-center py-2 min-h-screen">
        <hr />
        <p>Welcome {user === "Guest" ? "Guest" : user}</p>
        <hr />

        <hr />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold m-5 p-2 rounded"
          onClick={logout}
        >
          Logout
        </button>
        <Link className="hover:text-lg" href={`/profile/${data}`}>
          Account
        </Link>
        {/* <button className="bg-orange-500 hover:bg-orange-700 text-black font-bold m-5 p-2 rounded" onClick={getUserData}>Check</button> */}
      </div>
    </>
  );
}

export default ProfilePage;
