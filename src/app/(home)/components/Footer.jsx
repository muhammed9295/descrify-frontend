import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Instagram, Facebook } from "lucide-react";
import Image from "next/image";

function Footer() {
  return (
    <div className="px-10 py-20 bg-[#c8c8c8] lg:px-36">
      <div className="grid gap-4  lg:grid-cols-12 ">
        <div className="lg:col-span-3">
          <Image src="/logo.png" width={200} height={100} />
          <div className="mt-10">
            <Separator className="my-3 bg-[#e1e1e1]" />
            <p>
              We’re here to help brands make better marketing decisions by
              delivering world-class, scalable insights.
            </p>
          </div>
        </div>
        <div className="lg:col-span-9">
          <div className="flex flex-col gap-10 lg:flex-row lg:justify-end lg:gap-32">
            <div className="flex flex-col gap-3">
              <p className="text-lg font-semibold">Company</p>
              <ul className="flex flex-col gap-2">
                <li>About us</li>
                <li>Career</li>
                <li>Contact Us</li>
                <li>Blog</li>
                <li>Email Us</li>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-lg font-semibold">Product</p>
              <ul className="flex flex-col gap-2">
                <li>Why measure brand performance?</li>
                <li>Which metrics should I track?</li>
                <li>How does Latana generate brand insights?</li>
                <li>Use cases</li>
                <li>Pricing</li>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-lg font-semibold">Why Descrify?</p>
              <ul className="flex flex-col gap-2">
                <li>Better data</li>
                <li>Ease of use</li>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-lg font-semibold">Resources</p>
              <ul className="flex flex-col gap-2">
                <li>Articles</li>
                <li>Guides</li>
                <li>Brand insights</li>
                <li>Reports</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Separator className="my-10" />
      <div className="grid gap-5 lg:grid-cols-12">
        <div className="lg:col-span-10">
          <p className="text-sm">
            © 2023 Descrify Brand Performance. All rights reserved. Various
            trademarks held by their owners · Impressum · Privacy Policy · Terms
            & Conditions
          </p>
        </div>
        <div className="lg:col-span-2 mt-3 lg:mt-0">
          <span className="flex gap-5 justify-around lg:justify-end">
            <Facebook className="hover:text-white cursor-pointer" />
            <Instagram className="hover:text-white cursor-pointer" />
            <Linkedin className="hover:text-white cursor-pointer" />
            <Github className="hover:text-white cursor-pointer" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
