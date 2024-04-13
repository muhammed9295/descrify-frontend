import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <div className="grid gap-5 pt-10 lg:grid-cols-2">
        <div className="flex flex-col gap-5 justify-center">
            <h1 className="text-6xl font-extrabold leading-snug">Boost Your Amazon Sales with Descrify</h1>
            <p className="text-lg">Generate compelling titles and descriptions for your Amazon products with Descrify's AI-powered tool. Sell faster and increase your revenue.</p>
            <span className="flex gap-4">
              <Link href="/login">
                <Button className="w-28 bg-[#019b98] hover:bg-[#55ccc9]">Get Started</Button>
                </Link>
                <Button variant="outline" className="w-28">Learn More</Button>
            </span>
        </div>
        <div className="flex items-center">
            <Image src="/hero-image.png" width={1000} height={1000} alt="hero-image" />
        </div>
    </div>
  )
}

export default Hero