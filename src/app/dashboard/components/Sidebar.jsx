import Image from "next/image";
import { Paperclip } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

function Sidebar() {
  return (
    <div className="h-dvh bg-[#fbfbfb] px-10 py-5 shadow-md">
      <div className="flex flex-col gap-8">
        <Image src="/logo.png" width={200} height={80} />

        <div className="grid gap-3">
          <h2 className="text-lg font-semibold text-[#3f7a8d]">
            All Converstions
          </h2>
          <ScrollArea className="h-[calc(100vh-250px)] rounded-md p-4">
            <ul className="grid gap-2">
              <li className="flex gap-2 items-center px-2 py-3 rounded-sm hover:bg-[#55ccc9]">
                <Paperclip size={18} color="#019b98" /> Conversation 1
              </li>
              <Separator />
              <li className="flex gap-2 items-center px-2 py-3 rounded-sm hover:bg-[#55ccc9]">
                <Paperclip size={18} color="#019b98" /> Conversation 2
              </li>
              <Separator />
              <li className="flex gap-2 items-center px-2 py-3 rounded-sm hover:bg-[#55ccc9]">
                <Paperclip size={18} color="#019b98" /> Conversation 3
              </li>
            </ul>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
