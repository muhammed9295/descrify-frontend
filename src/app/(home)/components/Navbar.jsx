"use client";
import { AlignRight, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button"


function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-[80px] bg-[#fbfbfb] shadow px-10 py-5 flex items-center lg:px-36 sticky top-0">
      {/* Desktop Menu */}
      <nav className="hidden w-full sm:grid grid-cols-2 ">
        <div className="text-2xl font-bold">Descrify</div>
        <div className="place-self-end">
          <ul className="flex gap-5 items-center">
            <li className="cursor-pointer">Features</li>
            <li className="cursor-pointer">Pricing</li>
            <li className="cursor-pointer">Contact</li>
            <Button className="bg-primary">Log in</Button>
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

        {
            open && (
                <ul className="bg-[#cccccc] w-full p-10 absolute top-14 flex flex-col gap-3 items-center shadow-md z-50">
                    <li className="text-lg font-semibold">Features</li>
                    <li className="text-lg font-semibold">Pricing</li>
                    <li className="text-lg font-semibold">Contact</li>
                    <Button className="bg-primary">Log in</Button>
                </ul>
            )
        }
      </nav>
      {/* Mobile Menu */}
    </div>
  );
}

export default Navbar;
