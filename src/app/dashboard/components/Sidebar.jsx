"use client";
import Image from "next/image";
import { Paperclip, Trash2 } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useEffect, useState } from "react";
import { baseUrl } from "@/url";
import axios from "axios";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function Sidebar() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await axios.get(
          `${baseUrl}/conversation/get-user-conversation`,
          { withCredentials: true }
        );
        setHistory(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchHistory();
  }, []);

  // Delete conversation
  const deleteConversation = async (id) => {
    try {
      await axios.delete(
        `${baseUrl}/conversation/delete-single-conversation/${id}`,
        { withCredentials: true }
      );
      const updatedConversation = history.filter((conv)=> conv._id !== id)

      setHistory(updatedConversation)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-dvh bg-[#fbfbfb] px-10 py-5 shadow-md">
      <div className="flex flex-col gap-8">
        <Link href="/">
        <Image src="/logo.png" width={200} height={80} alt="logo" />
        </Link>
        <div className="grid gap-3">
          <h2 className="text-lg font-semibold text-[#3f7a8d]">
            All Converstions
          </h2>
          <ScrollArea className="h-[calc(100vh-250px)] rounded-md p-4">
            <ul className="grid gap-2">
              {history.map((item) => {
                return (
                  <>
                    <span className="flex items-center justify-between w-full">
                      <Link key={item._id} href={`/dashboard/${item._id}`}>
                        <li className="flex gap-2 items-center px-2 py-3 rounded-sm hover:text-[#55ccc9]">
                          <Paperclip size={18} color="#019b98" /> {item.product}
                        </li>
                      </Link>

                      <Button
                       onClick={() => {
                        deleteConversation(item._id);
                      }}
                        variant="ghost"
                        className="hover:bg-[#dd0025] p-2 hover:text-white"
                      >
                        <Trash2 size={18} />
                      </Button>
                    </span>
                    <Separator />
                  </>
                );
              })}
            </ul>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
