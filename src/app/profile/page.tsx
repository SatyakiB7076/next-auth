"use client";
import axios from "axios";
//this useRouter is from navigation not router 
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

function ProfilePage() {
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

  return (
    <>
      <h1 className="text-center">Dashboard</h1>
      <div className="flex flex-row text-center justify-center items-center py-2 min-h-screen">
        <hr />
        <p>Welcome Username</p>
        <hr />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold m-5 p-2 rounded"
          onClick={logout}
        >
          Logout
        </button>
      </div>
    </>
  );
}

export default ProfilePage;
