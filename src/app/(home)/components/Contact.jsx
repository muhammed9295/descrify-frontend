import { Mail, Phone, MapPinned } from 'lucide-react';

function Contact() {
  return (
    <div className="py-10">
        <div className="grid gap-5">
            <p className="text-base font-semibold">Connect</p>
            <h2 className="text-4xl font-bold">Contact Descrify</h2>
            <p className="text-lg">Have a question or need assistance? Get in touch with the Descrify team.</p>
        </div>

        <div className="flex gap-20 my-10">
            <div className="flex flex-col gap-8">
            <Mail size={50}/>
                <span className="grid gap-5">
                    <h3 className="text-3xl font-bold">Email</h3>
                    <p className='text-lg'>Send us an email and we'll get back to you as soon as possible.</p>
                    <p className='underline italic cursor-pointer'>hello@descrify.com</p>
                </span>
            </div>

            <div className="flex flex-col gap-8">
            <Phone size={50} />
                <span className="grid gap-5">
                    <h3 className="text-3xl font-bold">Phone</h3>
                    <p className='text-lg'>Give us a call and speak directly with a member of our team.</p>
                    <p className='underline cursor-pointer'>+1 (555) 123-4567</p>
                </span>
            </div>

            <div className="flex flex-col gap-8">
            <MapPinned size={50} />
                <span className="grid gap-5">
                    <h3 className="text-3xl font-bold">Office</h3>
                    <p className='text-lg'>Visit our office and meet with our team in person.</p>
                    <p className='underline cursor-pointer'>123 Main St, Sydney NSW 2000 AU</p>
                </span>
            </div>
        </div>
    </div>
  )
}

export default Contact