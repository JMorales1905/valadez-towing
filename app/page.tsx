import { url } from "inspector";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (


    <div className="text-black">
      <nav className="py-4 px-8 shadow-md shadow-gray-700 bg-gray-100 fixed w-screen">
        <div className="mx-auto flex justify-between items-center">
          <a href="#" className=" text-xl font-bold">
            <Image src={"/images/logo.png"} alt="logo" height={100} width={100} />
          </a>
          <ul className="flex space-x-4 text-xl">
            <li><a href="#services" className="hover:text-red-800">Services</a></li>
            <li><a href="#gallery" className=" hover:text-red-800">Gallery</a></li>
            <li><a href="#about-us" className=" hover:text-red-800">About Us</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero */}
      <section className="text-center py-20">
        <div className="container mx-auto mt-[60px]">
          <h1 className="uppercase mb-10 font-bold text-8xl" id="home">
            {/* <img src="/images/tow.jpg" alt="back-tow" width={400} height={400} className="absolute opacity-50 right-{850]" /> */}
            <span className="text-red-800" >valadez</span> towing
          </h1>
          <h2 className="text-4xl font-bold">For All Your Towing Needs, <span className="text-red-600 underline">24 HOURS</span> a Day</h2>
          <p className="mt-4 text-2xl">Valadez Towing is a family owned operating business. We transport vehicles,
            equipment and other cargo anywhere in the Coachella Valley. <br />Want a free quote?
            Give us a call or email us!
          </p>
        </div>

        {/* Cards */}
        <div className="my-8 px-[20%]" id="services">
          <div className="flex gap-x-10 justify-center items-center border-y-2 rounded-2xl p-6 shadow-lg shadow-gray-700">
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
      <h1 className="flex justify-center text-7xl content-center p-4 bg-gray-100">Services</h1>
      <section className="flex p-2 mb-[30px] bg-gray-100">
        <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden text-center">
          <div className="">
            <Image
              src={"/images/photo-5.jpg"}
              width={800}
              height={800}
              alt="Picture of Tow Truck"
              className="hover:scale-105 transition-all ease-in-out"
            />
            <h2 className="text-2xl font-bold text-gray-800">Light-duty Towing</h2>
            <a href="#" className="my-4 inline-block bg-blue-600  px-6 py-2 rounded-lg hover:bg-blue-700">Info</a>
          </div>
        </div>
        <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden text-center">
          <div className="">
            <Image
              src="/images/photo-4.jpg"
              width={800}
              height={800}
              alt="Picture of Tow Truck"
            />
            <h2 className="text-2xl font-bold text-gray-800">Heavy-duty Towing</h2>
            <a href="#" className="my-4 inline-block bg-blue-600  px-6 py-2 rounded-lg hover:bg-blue-700">Info</a>
          </div>
        </div>
        <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden text-center">
          <div className="">
            <Image
              src="/images/photo-3.jpg"
              width={800}
              height={800}
              alt="Picture of Tow Truck"
            />
            <h2 className="text-2xl font-bold text-gray-800">Equipment Transportation</h2>
            <a href="#" className="my-4 inline-block bg-blue-600  px-6 py-2 rounded-lg hover:bg-blue-700">Info</a>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <h1 className="text-7xl flex justify-center" id="gallery"> Gallery </h1>
      <section className="h-[100vh]">
        <div>

        </div>
      </section>


      <section className="p-6" id="about-us">
        <div className="flex">
          <Image src="/images/photo-1.jpg" alt="photo-1" width={1000} height={1000} className="px-6" />
          <div className="flex-1 justify-cnter content-center">
            <h2 className="flex justify-center text-5xl font-bold my-6">Inidividualy Owned and Operated</h2>
            <p className="text-center text-3xl">Valadez Towing was founded by <span className="text-red-800 font-bold">Jose Valadez</span>, aiming to serve the people of
              and the surrounding areas of the Coachella Valley for all towing needs. Our number one objective when you
              call us is
              to ensure our customers and their vehicles are safetly transported. Choose us as your favorite towing and recovery
              service provider and we will give our all to get the job done in a timely and effective manner.</p>
          </div>
        </div>
      </section>


      <footer>
        <section className="p-6 bg-gray-100">
          <div className="flex items-center justify-around">
            <h2>Call Us:</h2>
            <div className="flex space-x-8">
              <h2 className="align-content-middle">Follow Us!</h2>
              <a
                href="https://www.facebook.com/search/top?q=valadez%20towing"
                className="p-3 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f fa-fw" ></i>
              </a>

              <a
                href="https://www.instagram.com/valadeztowingservices/"
                className="p-3 bg-pink-500 text-white rounded-md shadow-md hover:bg-pink-600 transition"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram fa-fw"></i>
              </a>
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
}
