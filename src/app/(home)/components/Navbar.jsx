"use client";
import { AlignRight, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";


function Navbar() {
  const [open, setOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Get userData
  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("accessToken");

      if (token) {
        setIsLoggedIn(true);
      }
    };
    fetchUserData();
  }, []);

  return (
    <div className="min-h-[80px] bg-[#fbfbfb] shadow px-10 py-5 flex items-center lg:px-36 sticky top-0 z-50">
      {/* Desktop Menu */}
      <nav className="hidden w-full sm:grid grid-cols-2 ">
        <Link href="/">
          <Image src="/logo.png" width={200} height={100} alt="logo" />
        </Link>
        <div className="place-self-end">
          <ul className="flex gap-10 items-center">
            <Link href="#feature">
              <li className="cursor-pointer">Features</li>
            </Link>
            <Link href="#pricing">
              <li className="cursor-pointer">Pricing</li>
            </Link>
            <Link href="#contact">
              <li className="cursor-pointer">Contact</li>
            </Link>
            {isLoggedIn ? (
              <Link className="w-28" href="/dashboard">
                <Button className="w-full bg-[#019b98] hover:bg-[#55ccc9]">
                  Dashboard
                </Button>
              </Link>
            ) : (
              <Link className="w-28" href="/login">
              <Button className="w-full bg-[#019b98] hover:bg-[#55ccc9]">
                Log in
              </Button>
              </Link>
            )}
          </ul>
        </div>
      </nav>
      {/* Desktop Menu */}

      {/* Mobile Menu */}
      <nav className="sm:hidden grid grid-cols-2 w-full relative z-50">
        <div className="text-2xl font-bold">Logo</div>
        <div className="place-self-end">
          {!open ? (
            <AlignRight
              onClick={() => setOpen((prev) => !prev)}
              size={30}
              strokeWidth={2}
              className="cursor-pointer"
            />
          ) : (
            <X
              onClick={() => setOpen((prev) => !prev)}
              size={32}
              strokeWidth={2}
              className="cursor-pointer"
            />
          )}
        </div>

        {open && (
          <ul className="bg-[#cccccc] w-full p-10 absolute top-14 flex flex-col gap-3 items-center shadow-md z-50">
            <li className="text-lg font-semibold">Features</li>
            <li className="text-lg font-semibold">Pricing</li>
            <li className="text-lg font-semibold">Contact</li>
            {isLoggedIn ? (
              <Link className="w-28" href="/dashboard">
              <Button className="w-full bg-[#019b98] hover:bg-[#55ccc9]">
                Dashboard
              </Button>
            </Link>
            ) : (
              <Button className="w-28 bg-[#019b98] hover:bg-[#55ccc9]">
                Log in
              </Button>
            )}
          </ul>
        )}
      </nav>
      {/* Mobile Menu */}
    </div>
  );
}

export default Navbar;
