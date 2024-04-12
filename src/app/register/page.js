"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import axios from "axios";
import { baseUrl } from "@/url";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Loader2 } from "lucide-react";
import { toast, Toaster } from "sonner";

function Register() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Form validation
  const validateForm = () => {
    if (!userName || !email || !password) {
      return false;
    }

    if (!email.includes("@")) {
      return false;
    }

    return true;
  };
  // Form validation

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const userData = {
      userName: userName,
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(`${baseUrl}/users/register`, userData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response.data);

      setLoading(true);
      toast.success("Successfully registered");
      // Redirect to login page
      router.push("/login");
      // Redirect to login page
    } catch (error) {
      toast.error("Registration failed", error);
      console.log(error);
    } finally {
      setLoading(false);
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
            <h2 className="text-3xl font-bold">Sign Up</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              <Input
                type="text"
                className="h-12"
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Username"
              />
              <Input
                type="email"
                className="h-12"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
              <Input
                className="h-12"
                placeholder="Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="flex flex-col gap-3 items-center lg:flex-row">
                {loading ? (
                  <Button
                    type="submit"
                    className="w-full bg-[#019b98] hover:bg-[#55ccc9]"
                  >
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Please wait
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    className="w-full bg-[#019b98] hover:bg-[#55ccc9]"
                  >
                    SignUp
                  </Button>
                )}
                <p className="text-gray-400 text-sm">or</p>
                <Link href="/login" className="w-full">
                  <Button className="bg-[#014e60] hover:bg-[#3f7a8d] w-full">
                    Login
                  </Button>
                </Link>
              </span>
            </form>
            <Toaster />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
