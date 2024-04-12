"use client";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { baseUrl } from "@/url";
import { useRouter } from "next/navigation";

function Navbar() {
  const router = useRouter();

  const handleLogout = () => {
    try {
      const response = axios.post(
        `${baseUrl}/users/logout`,
        {},
        { withCredentials: true }
      );
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      router.push("/");
    } catch (error) {}
  };

  return (
    <div className="bg-[#fbfbfb] ml-2 h-[80px] shadow-sm flex justify-between items-center px-10">
      <h3 className="text-2xl text-[#3f7a8d] font-bold">Overview</h3>
      <Button onClick={handleLogout} className="w-28 bg-[#019b98] hover:bg-[#55ccc9]">Logout</Button>
    </div>
  );
}

export default Navbar;
