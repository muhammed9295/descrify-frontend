import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Star, StarHalf } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function Testimonials() {
  return (
    <div className="py-20">
      <Carousel className="w-5/6 mx-auto">
        <CarouselContent className="gap-5">
          <CarouselItem className="bg-[#019b98] rounded-md py-8">
            <div className="flex flex-col items-center gap-8">
              <span className="flex gap-1">
                <Star fill="#fbfbfb" strokeWidth={0} size={35} />
                <Star fill="#fbfbfb" strokeWidth={0} size={35} />
                <Star fill="#fbfbfb" strokeWidth={0} size={35} />
                <Star fill="#fbfbfb" strokeWidth={0} size={35} />
                <StarHalf fill="#fbfbfb" strokeWidth={0} size={35} />
              </span>
              <p className="text-2xl text-white text-center w-1/2 leading-normal font-semibold">
                Our experience with Descrify has been nothing short of amazing.
                Their AI tool has helped us generate compelling titles and
                descriptions for our Amazon products, resulting in faster sales.
              </p>

              <div className="flex gap-4 items-center">
                <Image
                  src="/noavatar.png"
                  width={80}
                  height={80}
                  className="rounded-full shadow-md"
                />
                <span>
                  <h3 className="text-lg text-white font-semibold">John Doe</h3>
                  <p className="text-sm text-white">CEO, XYZ Company</p>
                </span>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="bg-[#019b98] rounded-md py-8">
            <div className="flex flex-col items-center gap-8">
              <span className="flex gap-1">
                <Star fill="#fbfbfb" strokeWidth={0} size={35} />
                <Star fill="#fbfbfb" strokeWidth={0} size={35} />
                <Star fill="#fbfbfb" strokeWidth={0} size={35} />
                <Star fill="#fbfbfb" strokeWidth={0} size={35} />
                <StarHalf fill="#fbfbfb" strokeWidth={0} size={35} />
              </span>
              <p className="text-2xl text-white text-center w-1/2 leading-normal font-semibold">
                Our experience with Descrify has been nothing short of amazing.
                Their AI tool has helped us generate compelling titles and
                descriptions for our Amazon products, resulting in faster sales.
              </p>

              <div className="flex gap-4 items-center">
                <Image
                  src="/noavatar.png"
                  width={80}
                  height={80}
                  className="rounded-full shadow-md"
                />
                <span>
                  <h3 className="text-lg text-white font-semibold">John Doe</h3>
                  <p className="text-sm text-white">CEO, XYZ Company</p>
                </span>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="hover:bg-[#019b98] hover:text-white"/>
        <CarouselNext className="hover:bg-[#019b98] hover:text-white" />
      </Carousel>
    </div>
  );
}

export default Testimonials;
