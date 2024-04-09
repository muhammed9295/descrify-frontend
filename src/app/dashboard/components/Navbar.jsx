import { Button } from "@/components/ui/button"

function Navbar() {
  return (
    <div className="bg-[#fbfbfb] ml-2 h-[80px] shadow-sm flex justify-between items-center px-10">
        
        <h3 className="text-2xl text-[#3f7a8d] font-bold">Overview</h3>
        <Button className="w-28 bg-[#019b98] hover:bg-[#55ccc9]">Logout</Button>
        </div>
  )
}

export default Navbar