

function Counter() {
  return (
    <div className="px-10 flex flex-col gap-5 lg:flex-row justify-around lg:my-14">
        <span className="flex flex-col items-center gap-1">
            <h3 className="text-2xl text-primary font-black">10+</h3>
            <p>Years in the Market</p>
        </span>

        <span className="flex flex-col items-center gap-1">
            <h3 className="text-2xl text-primary font-black">10,000+</h3>
            <p>Happy Customers</p>
        </span>

        <span className="flex flex-col items-center gap-1">
            <h3 className="text-2xl text-primary font-black">99%</h3>
            <p>Uptime</p>
        </span>

        <span className="flex flex-col items-center gap-1">
            <h3 className="text-2xl text-primary font-black">98%</h3>
            <p>Customer Retention</p>
        </span>

        <span className="flex flex-col items-center gap-1">
            <h3 className="text-2xl text-primary font-black">24/7</h3>
            <p>Customer Support</p>
        </span>
    </div>
  )
}

export default Counter