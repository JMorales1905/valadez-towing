import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div className="text-black">
      <nav className="py-4 px-8">
        <div className="mx-auto flex justify-between items-center">
          <a href="#" className=" text-xl font-bold">Logo</a>
          <ul className="flex space-x-4 text-xl">
            <li><a href="#" className=" hover:text-gray-300">Home</a></li>
            <li><a href="#" className=" hover:text-gray-300">About</a></li>
            <li><a href="#" className=" hover:text-gray-300">Services</a></li>
            <li><a href="#" className=" hover:text-gray-300">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero */}
      <section className="text-center py-20">
        <div className="container mx-auto">
          <h1 className="uppercase my-6 font-bold text-8xl">
            🛻valadez towing🛻
          </h1>
          <h2 className="text-4xl font-bold">For All Your Towing Needs, <span className="text-red-600 underline">24 HOURS</span> a Day</h2>
          <p className="mt-4 text-2xl">Valadez Towing is a family owned operating business. We transport vehicles,
            equipment and other cargo anywhere in the Coachella Valley. <br />Want a free quote?
            Give us a call or email us!
          </p>
        </div>

        {/* Cards */}
        <div className="my-8 px-[20%]">
          <div className="flex gap-x-10 justify-center items-center border-y-2 rounded-2xl p-4 shadow-lg shadow-gray-700">
            <div className="font-bold w-[400px] rounded-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-black text-2xl font-bold">Call Us!</h2>
                <p className="text-black mt-2 text-2xl font-medium">(909) 419-9806</p>
              </div>
            </div>
            <p className="text-3xl ">OR</p>
            <div className="w-[400px] rounded-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-2xl font-bold text-black">Email Us!</h2>
                <p className="mt-2 text-2xl font-medium text-black">jose@valadeztowing.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="flex">
        <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden text-center">
          <div className="">
            <Image
              src="/images/tow.jpg"
              width={800}
              height={800}
              alt="Picture of Tow Truck"
            />
            <h2 className="text-2xl font-bold text-gray-800">Light-duty Towing</h2>
            <a href="#" className="mt-4 inline-block bg-blue-600  px-6 py-2 rounded-lg hover:bg-blue-700">Info</a>
          </div>
        </div>
        <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden text-center">
          <div className="">
            <Image
              src="/images/tow.jpg"
              width={800}
              height={800}
              alt="Picture of Tow Truck"
            />
            <h2 className="text-2xl font-bold text-gray-800">Light-duty Towing</h2>
            <a href="#" className="mt-4 inline-block bg-blue-600  px-6 py-2 rounded-lg hover:bg-blue-700">Info</a>
          </div>
        </div>
        <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden text-center">
          <div className="">
            <Image
              src="/images/tow.jpg"
              width={800}
              height={800}
              alt="Picture of Tow Truck"
            />
            <h2 className="text-2xl font-bold text-gray-800">Light-duty Towing</h2>
            <a href="#" className="mt-4 inline-block bg-blue-600  px-6 py-2 rounded-lg hover:bg-blue-700">Info</a>
          </div>
        </div>
      </section>


      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">

      </footer>
    </div>
  );
}
