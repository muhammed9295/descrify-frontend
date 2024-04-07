import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Leaf, Check } from "lucide-react";

function Pricing() {
  return (
    <div className="py-20">
      <div className="flex flex-col items-center gap-6">
        <p>Simplified</p>
        <h2 className="text-4xl font-bold">Pricing Options</h2>
        <p className="text-lg">
          Choose the right plan for your Amazon business.
        </p>
      </div>
      <div className="pt-10 w-full">
        <Tabs
          defaultValue="account"
          className="mx-auto flex flex-col items-center gap-5"
        >
          <TabsList className="">
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
          <TabsContent value="account" className="flex flex-col gap-10 lg:flex-row">
            <div className="border-2 p-5 min-h-[500px] flex flex-col justify-between">
                <div className="">
              <div className="flex justify-between items-center gap-8">
                <div className="flex flex-col gap-4">
                  <Leaf size={24} />
                  <span>
                    <h3 className="text-xl font-semibold">Basic Plan</h3>
                    <p className="text-lg">
                      Ideal for new sellers starting out.
                    </p>
                  </span>
                </div>
                <h2 className="text-6xl font-bold">$19/mo</h2>
              </div>
              <Separator className="my-8" />
              <div className="flex flex-col gap-5">
                <p>Includes:</p>
                <div className="grid gap-8 grid-cols-2">
                  <ul>
                    <li className="flex gap-4"><Check /> <p>Keyword Research</p></li>
                    <li className="flex gap-4"><Check /> <p>Competitor Analysis</p></li>
                    <li className="flex gap-4"><Check /> <p>Product Research</p></li>
                  </ul>

                  <ul>
                    <li className="flex gap-4"><Check /> <p>Listing Optimization</p></li>
                    <li className="flex gap-4"><Check /> <p>Sales Analytics</p></li>
                    <li className="flex gap-4"><Check /> <p>Inventory Management</p></li>
                  </ul>
                </div>
              </div>
              </div>
              <Button>Get Started</Button>
            </div>

            <div className="border-2 p-5 min-h-[500px] flex flex-col justify-between">
                <div className="">
              <div className="flex justify-between items-center gap-8">
                <div className="flex flex-col gap-4">
                  <Leaf size={24} />
                  <span>
                    <h3 className="text-xl font-semibold">Basic Plan</h3>
                    <p className="text-lg">
                      Ideal for new sellers starting out.
                    </p>
                  </span>
                </div>
                <h2 className="text-6xl font-bold">$19/mo</h2>
              </div>
              <Separator className="my-8" />
              <div className="flex flex-col gap-5">
                <p>Includes:</p>
                <div className="grid gap-8 grid-cols-2">
                  <ul>
                    <li className="flex gap-4"><Check /> <p>Keyword Research</p></li>
                    <li className="flex gap-4"><Check /> <p>Competitor Analysis</p></li>
                    <li className="flex gap-4"><Check /> <p>Product Research</p></li>
                  </ul>

                  <ul>
                    <li className="flex gap-4"><Check /> <p>Listing Optimization</p></li>
                    <li className="flex gap-4"><Check /> <p>Sales Analytics</p></li>
                    <li className="flex gap-4"><Check /> <p>Inventory Management</p></li>
                  </ul>
                </div>
              </div>
              </div>
              <Button>Get Started</Button>
            </div>
          </TabsContent>
          <TabsContent value="password" className="flex flex-col gap-10 lg:flex-row">
          <div className="border-2 p-5 min-h-[500px] flex flex-col justify-between">
                <div className="">
              <div className="flex justify-between items-center gap-8">
                <div className="flex flex-col gap-4">
                  <Leaf size={24} />
                  <span>
                    <h3 className="text-xl font-semibold">Basic Plan</h3>
                    <p className="text-lg">
                      Ideal for new sellers starting out.
                    </p>
                  </span>
                </div>
                <h2 className="text-6xl font-bold">$19/mo</h2>
              </div>
              <Separator className="my-8" />
              <div className="flex flex-col gap-5">
                <p>Includes:</p>
                <div className="grid gap-8 grid-cols-2">
                  <ul>
                    <li className="flex gap-4"><Check /> <p>Keyword Research</p></li>
                    <li className="flex gap-4"><Check /> <p>Competitor Analysis</p></li>
                    <li className="flex gap-4"><Check /> <p>Product Research</p></li>
                  </ul>

                  <ul>
                    <li className="flex gap-4"><Check /> <p>Listing Optimization</p></li>
                    <li className="flex gap-4"><Check /> <p>Sales Analytics</p></li>
                    <li className="flex gap-4"><Check /> <p>Inventory Management</p></li>
                  </ul>
                </div>
              </div>
              </div>
              <Button>Get Started</Button>
            </div>

            <div className="border-2 p-5 min-h-[500px] flex flex-col justify-between">
                <div className="">
              <div className="flex justify-between items-center gap-8">
                <div className="flex flex-col gap-4">
                  <Leaf size={24} />
                  <span>
                    <h3 className="text-xl font-semibold">Basic Plan</h3>
                    <p className="text-lg">
                      Ideal for new sellers starting out.
                    </p>
                  </span>
                </div>
                <h2 className="text-6xl font-bold">$19/mo</h2>
              </div>
              <Separator className="my-8" />
              <div className="flex flex-col gap-5">
                <p>Includes:</p>
                <div className="grid gap-8 grid-cols-2">
                  <ul>
                    <li className="flex gap-4"><Check /> <p>Keyword Research</p></li>
                    <li className="flex gap-4"><Check /> <p>Competitor Analysis</p></li>
                    <li className="flex gap-4"><Check /> <p>Product Research</p></li>
                  </ul>

                  <ul>
                    <li className="flex gap-4"><Check /> <p>Listing Optimization</p></li>
                    <li className="flex gap-4"><Check /> <p>Sales Analytics</p></li>
                    <li className="flex gap-4"><Check /> <p>Inventory Management</p></li>
                  </ul>
                </div>
              </div>
              </div>
              <Button>Get Started</Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default Pricing;
