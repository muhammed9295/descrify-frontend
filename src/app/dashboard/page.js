"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { baseUrl } from "@/url";
import axios from "axios";

function Dashboard() {
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [response, setResponse] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const generateResponse = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(
        `${baseUrl}/conversation/generate-response`,
        {params: {
          productName: productName,
          category: category
        },
        withCredentials: true,}
      );
      setResponse(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const splitResponse = response.split(/\r?\n/);

  const title = splitResponse[0];
  const description = splitResponse.slice(2).join("\n")

  useEffect(() => {
    if (currentIndex < title.length) {
      setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
      }, 100); // Adjust speed here
    }

    if (currentIndex < description.length) {
      setTimeout(() => {
        setCurrentIndex(currentIndex + 4);
      }, 100); // Adjust speed here
    }
  }, [currentIndex, title, description]);

  return (
    <div className="ml-2 px-10 pt-10 grid gap-10">
      <form onSubmit={generateResponse}>
        <div className="flex gap-8 items-end">
          <span className="w-1/3 grid gap-3">
            <Label>Product Name</Label>
            <Input
              onChange={(e) => {
                setProductName(e.target.value);
              }}
              className="h-12"
              placeholder="eg. Table Lamp.."
            />
          </span>
          <span className="w-1/3 grid gap-3">
            <Label>Product Category</Label>
            <Input onChange={(e) => {
                setCategory(e.target.value);
              }} className="h-12" placeholder="eg. Home Decor" />
          </span>
          <Button type="submit" className="h-12 w-28 bg-[#019b98] hover:bg-[#55ccc9]">
            Generate
          </Button>
        </div>
      </form>

      <ScrollArea className="h-[580px] border rounded-md p-4">
        <span className="grid gap-4">
        <h2 className="text-lg font-bold">{title.slice(0, currentIndex)}</h2>
        <p className="text-lg">{description.slice(0, currentIndex)}</p>
        </span>
      </ScrollArea>

    </div>
  );
}

export default Dashboard;
