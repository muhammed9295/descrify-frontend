import { Button } from '@/components/ui/button';
import { TrendingUp, ChevronRight, Hourglass, Trophy } from 'lucide-react';

function HowItWorks() {
  return (
    <div className="py-20">
        <div className="grid gap-5 lg:grid-cols-2">
            <h3 className="text-4xl font-bold lg:w-5/6 leading-snug">Generate optimized titles and descriptions for your Amazon products</h3>
            
            <p className="text-xl self-center">Sign up for Descrify, input your product details, and receive professionally optimized titles and descriptions to help you sell your products faster on Amazon.</p>
        </div>

        <div className="grid gap-16 lg:gap-5 lg:grid-cols-3 mt-20">
            <div className="flex flex-col gap-8 items-center lg:items-start">
            <TrendingUp size={50} color="#019b98"/>
            <span className="flex flex-col gap-3">
                <h3 className="text-xl font-bold text-center lg:text-start">Increase your sales with optimized titles and descriptions</h3>
                <p className="text-base text-center lg:text-start">Our AI-powered tool generates titles and descriptions that are proven to attract more customers and boost your sales.</p>
            </span>
            <Button variant="outline" className="w-36 hover:bg-[#019b98] hover:text-white">Learn More <ChevronRight /></Button>
            </div>

            <div className="flex flex-col gap-8 items-center lg:items-start">
            <Hourglass size={50} color="#dd0025" />
            <span className="flex flex-col gap-3">
                <h3 className="text-xl font-bold text-center lg:text-start">Save time and effort with Descrify</h3>
                <p className="text-base text-center lg:text-start">Stop wasting hours trying to come up with catchy titles and compelling descriptions. Let Descrify do the work for you.</p>
            </span>
            <Button variant="outline" className="w-36 hover:bg-[#019b98] hover:text-white">Sign Up <ChevronRight /></Button>
            </div>

            <div className="flex flex-col gap-8 items-center lg:items-start">
            <Trophy size={50} color="#014e60" />
            <span className="flex flex-col gap-3">
                <h3 className="text-xl font-bold text-center lg:text-start">Get ahead of your competition with Descrify</h3>
                <p className="text-base text-center lg:text-start">Stand out from the crowd with titles and descriptions that are optimized for search engines and customer engagement.</p>
            </span>
            <Button variant="outline" className="w-36 hover:bg-[#019b98] hover:text-white">Sign Up <ChevronRight /></Button>
            </div>
        </div>
    </div>
  )
}

export default HowItWorks