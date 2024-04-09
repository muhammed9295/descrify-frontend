import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Plus, Trash2 } from "lucide-react";

function Conversation() {
  return (
    <div className="ml-2 px-10 pt-10 grid gap-10">
      <form action="">
        <div className="flex gap-8 items-end">
          <span className="w-1/3 grid gap-3">
            <Label>Product Name</Label>
            <Input className="h-12" placeholder="eg. Table Lamp.." />
          </span>
          <span className="w-1/3 grid gap-3">
            <Label>Product Category</Label>
            <Input className="h-12" placeholder="eg. Home Decor" />
          </span>
          <Button className="h-12 w-28 bg-[#019b98] hover:bg-[#55ccc9]">
            Generate
          </Button>

          <Button className="h-12 w-28 bg-[#019b98] hover:bg-[#55ccc9] flex gap-1 justify-center">
            <Plus size={18} strokeWidth={4} />
            Add New
          </Button>

          <Button className="h-12 w-28 bg-[#dd0025] hover:bg-[#b52940] flex gap-1 justify-center">
            <Trash2 size={18} strokeWidth={3} />
            Delete
          </Button>
        </div>
      </form>

      <ScrollArea className="h-[580px] border rounded-md p-4"></ScrollArea>
    </div>
  );
}

export default Conversation;
