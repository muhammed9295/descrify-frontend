import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

function Login() {
  return (
    <div className="grid lg:grid-cols-12">
      <div className="hidden col-span-7 min-h-dvh bg-[url(/auth-image.png)] bg-cover bg-center bg-no-repeat lg:block">
        <div className="flex justify-center items-center h-full">
          <Image src="/logo-white.png" width={300} height={100} />
        </div>
      </div>
      <div className="h-dvh lg:col-span-5">
        <div className="h-full mx-auto flex justify-center items-center px-10 sm:w-3/4">
          <div className="border w-full flex flex-col p-10 gap-8 rounded">
            
            <h2 className="text-3xl font-bold">Hello!</h2>
            <form className="flex flex-col gap-8">
                <Input className="h-12" placeholder="Email" />
                <Input className="h-12" placeholder="Password" type="password" />
                <span className="flex flex-col gap-4 items-center lg:flex-row">
                <Button className="w-full bg-[#019b98] hover:bg-[#55ccc9]">Login</Button>
                <p className="text-gray-400 text-sm">or</p>
                <Button className="w-full bg-[#014e60] hover:bg-[#3f7a8d]">SignUp</Button>
                </span>
                <p className="text-gray-400 text-sm">Forgot Password?</p>
            </form>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
