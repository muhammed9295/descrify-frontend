"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast, Toaster } from "sonner";
import Link from "next/link";
import { baseUrl } from "@/url";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${baseUrl}/users/login`,
        { email, password },

        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      if (response.data.statusCode === 200) {
        toast.success("Login successful");
        localStorage.setItem("accessToken", response.data.data.accessToken);
        localStorage.setItem("refreshToken", response.data.data.refreshToken);
        router.push("/");
      } else {
        toast.error("Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Login Error: ", error);
      toast.error("An error occurred while logging in. Please try again");
    }
  };

  return (
    <div className="grid lg:grid-cols-12">
      <div className="hidden col-span-7 min-h-dvh bg-[url(/auth-image.png)] bg-cover bg-center bg-no-repeat lg:block">
        <div className="flex justify-center items-center h-full">
          <Image src="/logo-white.png" width={300} height={100} alt="logo" />
        </div>
      </div>
      <div className="h-dvh lg:col-span-5">
        <div className="h-full mx-auto flex justify-center items-center px-10 sm:w-3/4">
          <div className="border w-full flex flex-col p-10 gap-8 rounded">
            <h2 className="text-3xl font-bold">Hello!</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              <Input
                type="text"
                className="h-12"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                className="h-12"
                placeholder="Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="flex flex-col gap-4 items-center lg:flex-row">
                <Button className="w-full bg-[#019b98] hover:bg-[#55ccc9]">
                  Login
                </Button>
                <p className="text-gray-400 text-sm">or</p>
                <Link href="/register" className="w-full">
                  <Button className="w-full bg-[#014e60] hover:bg-[#3f7a8d]">
                    SignUp
                  </Button>
                </Link>
              </span>
              <p className="text-gray-400 text-sm">Forgot Password?</p>
            </form>
            <Toaster />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
