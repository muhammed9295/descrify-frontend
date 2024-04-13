"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Plus, Trash2 } from "lucide-react";
import axios from "axios";
import { baseUrl } from "@/url";
import Link from "next/link";

function Conversation({ params }) {
  const [conversation, setConversation] = useState("");
  const [finalResponse, setFinalResponse] = useState("");

  const { id } = params;

  useEffect(() => {
    const fetchConversation = async () => {
      try {
        const response = await axios.get(
          `${baseUrl}/conversation/get-single-conversation/${id}`,
          { withCredentials: true }
        );

        setConversation(response.data.data);
        setFinalResponse(response.data.data.response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchConversation();
  }, []);

  
  const splitResponse = finalResponse.split(/\r?\n/);
  const title = splitResponse[0];
  const description = splitResponse.slice(2).join("\n");

  return (
    <div className="ml-2 px-10 pt-10 grid gap-10">
      <div className="flex gap-8 items-end">
        <span className="w-1/3 grid gap-3">
          <Label>Product Name</Label>
          <Input className="h-12" placeholder={conversation.product} />
        </span>
        <span className="w-1/3 grid gap-3">
          <Label>Product Category</Label>
          <Input className="h-12" placeholder={conversation.category} />
        </span>
        <Button disabled className="h-12 w-28 bg-[#019b98] hover:bg-[#55ccc9]">
          Generate
        </Button>

        <Link href="/dashboard">
        <Button className="h-12 w-28 bg-[#019b98] hover:bg-[#55ccc9] flex gap-1 justify-center">
          <Plus size={18} strokeWidth={4} />
          Add New
        </Button>
        </Link>
      </div>

      <ScrollArea className="h-[580px] border rounded-md p-4">
        <span className="grid gap-4">
          <h2 className="text-lg font-bold">{title}</h2>
          <p className="text-lg">{description}</p>
        </span>
      </ScrollArea>
    </div>
  );
}

export default Conversation;
