import Image from "next/image";
function Feature() {
  return (
    <div className="py-10 my-10">
        <div className="flex flex-col gap-5 items-center">
            <h2 className="text-3xl font-semibold">Boost Sales with Powerful Descriptions</h2>
            <p className="text-lg">With Descrify, you can effortlessly generate compelling titles and descriptions for your Amazon products, helping you sell faster and increase your sales.</p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2 mt-20">
          <div className="flex flex-col gap-5 justify-center">
            <h2 className="text-2xl font-semibold">AI-Powered Tools for Faster Amazon Sales</h2>
            <p className="text-lg w-5/6">Descrify's AI-powered tools help Amazon sellers generate compelling titles and descriptions, boosting their product visibility and sales.</p>
          </div>
          <div className="">
            <Image src="/feature-image.png" width={1000} height={1000} />
          </div>
        </div>
    </div>
  )
}

export default Feature