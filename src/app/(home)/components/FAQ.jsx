import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

function FAQ() {
  return (
    <div className="py-20">
      <span className="grid gap-5">
        <h2 className="text-4xl font-bold">Frequently Asked Questions</h2>
        <p className="text-lg">
          Find answers to common questions about Descrify and its capabilities.
        </p>
      </span>

      <Accordion type="single" collapsible className="mt-10">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <p className="text-lg">What is Descrify?</p>
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-base">
              Descrify is an AI-powered SaaS tool designed to generate
              compelling titles and descriptions for Amazon products. It helps
              Amazon sellers sell their products faster by optimizing their
              product listings.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>
            <p className="text-lg">How does it work?</p>
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-base">
            Descrify uses advanced artificial intelligence algorithms to analyze product features, benefits, and target audience. It then generates highly optimized and persuasive titles and descriptions that attract more customers and improve conversion rates.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>
            <p className="text-lg">Is Descrify easy to use?</p>
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-base">
            Absolutely! Descrify is designed with user-friendliness in mind. Its intuitive interface and step-by-step guidance make it easy for Amazon sellers, regardless of their technical expertise, to generate high-quality titles and descriptions for their products.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>
            <p className="text-lg">Can I try Descrify for free?</p>
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-base">
            Yes, Descrify offers a free trial period for new users. You can sign up and experience the benefits of our AI-powered tool firsthand. Start optimizing your Amazon product listings today!
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger>
            <p className="text-lg">Is customer support available?</p>
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-base">
            Absolutely! Our dedicated customer support team is available to assist you with any questions or issues you may have. We are committed to providing excellent support to ensure your success with Descrify.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="grid gap-5 mt-10">
        <span className="flex flex-col gap-3">
            <h2 className="text-2xl font-semibold">Still have questions?</h2>
            <p className="text-lg">Contact us for further assistance.</p>
        </span>
        <Button className="w-36 bg-[#019b98] hover:bg-[#55ccc9]">Contact</Button>
      </div>
    </div>
  );
}

export default FAQ;
