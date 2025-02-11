import Image from "next/image";


export default function Home() {
  return (


    <div className="text-black">
      <nav className="py-4 lg:px-8 shadow-md shadow-gray-700 bg-gray-100 fixed lg:w-screen">
        <div className="mx-auto flex justify-between items-center">
          <a href="#" className="lg:flex-1 w-screen justify-center flex lg:justify-start">
            <Image src={"/images/logo.png"} alt="logo" height={100} width={100} />
          </a>
          <ul className="flex-1 space-x-4 text-2xl justify-around hidden lg:flex">
            <li><a href="#services" className="hover:text-red-800 hover:underline">Services</a></li>
            <li><a href="#gallery" className=" hover:text-red-800 hover:underline">Gallery</a></li>
            <li><a href="#about-us" className=" hover:text-red-800 hover:underline">About Us</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero */}
      <section className="text-center pt-20">
        <div className="mx-auto lg:mt-[60px]">
          <div className="uppercase lg:pb-10 font-bold lg:text-8xl text-4xl lg:h-[30vh] h-[15vh] flex justify-center items-center underline" id="home">
            <img src="/images/back-logo.png" alt="back-tow" width={380} height={300} className="absolute -z-10 object-top lg:hidden opacity-50" />
            <img src="/images/back-logo.png" alt="back-tow" width={1500} height={300} className="absolute -z-10 left-[15%] opacity-50 top-[8%] hidden lg:block" />
            <h1>valadez towing</h1>
          </div>
          <div className="bg-white grid">
            <h2 className="lg:text-4xl font-bold bg-white lg:py-6">For All Your Towing Needs, <span className="text-red-600 underline">24 HOURS</span> a Day</h2>
            <p className="lg:py-4 lg:text-2xl bg-white ">Valadez Towing is a family owned operating business. We transport vehicles,
              equipment and other cargo anywhere in the Coachella Valley. <br />Want a free quote?
              Give us a call or email us!
            </p>
          </div>
        </div>

        <div className="lg:py-8 lg:p-6 px-[20%] bg-white" id="services">
          <div className="lg:flex hidden gap-x-10 justify-center items-center lg:border-y-2 rounded-2xl lg:p-6 lg:shadow-lg lg:shadow-gray-700">
            <a className="w-[400px] rounded-lg overflow-hidden" href="tel:9094199806">
              <div className="lg:p-6 lg:text-2xl hidden lg:block">
                <h2 className="text-black font-bold p-4 lg:p-0 shadow-lg lg:shadow-none shadow-slate-800 lg:shadow-transparent rounded-lg">Call Us!</h2>
                <p className="text-black mt-2 font-medium hidden lg:block">(909) 419-9806</p>
              </div>
            </a>
            <p className="lg:text-3xl hidden lg:block">OR</p>
            <a className="w-[400px] rounded-lg overflow-hidden" href="emailto:jose@valadeztowing.com">
              <div className="lg:p-6 lg:text-2xl">
                <h2 className="font-bold text-black">Email Us!</h2>
                <p className="mt-2 font-medium text-black hidden lg:block hover:underline hover:text-red-600">jose@valadeztowing.com</p>
              </div>
            </a>
          </div>
        </div>

        {/* Phone section */}
        <div className="p-6 lg:hidden flex justify-center gap-x-6">
          <a href="tel:9094199806" className="p-4 bg-red-300 rounded-lg active:bg-red-800">Call Us!</a>
          <a href="mailto:jose@valadeztowing.com" className="p-4 bg-red-300 rounded-lg active:bg-red-800">Email Us!</a>
        </div>
      </section>

      {/* Cards */}
      <h1 className="lg:flex justify-center lg:text-7xl text-2xl content-center p-4 bg-gray-100 hidden">Services</h1>
      <section className="flex p-2 lg:pb-[30px] lg:bg-gray-100">
        <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden hidden lg:block text-center">
          <div className="">
            <Image
              src={"/images/photo-5.JPG"}
              width={800}
              height={800}
              alt="Picture of Tow Truck"
              className="hover:scale-105 transition-all ease-in-out"
            />
            <h2 className="text-2xl font-bold text-gray-800">Light-duty Towing</h2>
            <a href="#" className="my-4 inline-block bg-blue-600  px-6 py-2 rounded-lg hover:bg-blue-700">Info</a>
          </div>
        </div>
        <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden text-center hidden lg:block">
          <div className="">
            <Image
              src="/images/photo-4.JPG"
              width={800}
              height={800}
              alt="Picture of Tow Truck"
            />
            <h2 className="text-2xl font-bold text-gray-800">Heavy-duty Towing</h2>
            <a href="#" className="my-4 inline-block bg-blue-600  px-6 py-2 rounded-lg hover:bg-blue-700">Info</a>
          </div>
        </div>
        <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden text-center hidden lg:block">
          <div className="">
            <Image
              src="/images/photo-3.JPG"
              width={800}
              height={800}
              alt="Picture of Tow Truck"
            />
            <h2 className="text-2xl font-bold text-gray-800">Equipment Transportation</h2>
            <a href="#" className="my-4 inline-block bg-blue-600  px-6 py-2 rounded-lg hover:bg-blue-700">Info</a>
          </div>
        </div>
      </section>

      <section className="grid gap-y-4 lg:hidden">
        <h1 className="flex justify-center lg:text-7xl text-2xl content-center p-4 bg-gray-100">Services</h1>

        {/* Phone image 1 */}
        <div className="max-w-[200px] mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-4 active:bg-red-300">
          <div className="grid">
            <Image
              src={"/images/photo-5.JPG"}
              width={210}
              height={800}
              alt="Picture of Tow Truck"
              className="hover:scale-105 transition-all ease-in-out"
            />
            <h2 className="text-xl font-bold text-gray-800 text-center p-2">Light-duty Towing</h2>
          </div>
        </div>

        {/* Phone image 2 */}
        <div className="max-w-[200px] mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-4 active:bg-red-300">
          <div className="grid">
            <Image
              src={"/images/photo-4.JPG"}
              width={210}
              height={800}
              alt="Picture of Tow Truck"
              className="hover:scale-105 transition-all ease-in-out"
            />
            <h2 className="text-xl font-bold text-gray-800 text-center p-2">Heavy-duty Towing</h2>
          </div>
        </div>

        {/* Phone image 3 */}
        <div className="max-w-[200px] mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-4 active:bg-red-300">
          <div className="grid">
            <Image
              src={"/images/photo-2.JPG"}
              width={210}
              height={800}
              alt="Picture of Tow Truck"
              className="hover:scale-105 transition-all ease-in-out"
            />
            <h2 className="text-xl font-bold text-gray-800 text-center p-2">Equipment Transportation</h2>
          </div>
        </div>
      </section>


      {/* Image Gallery */}
      <section className="lg:h-[100vh] my-4">
        <h1 className="lg:text-7xl text-2xl flex justify-center p-4" id="gallery"> Gallery </h1>
        <div>

        </div>
      </section>


      <section className="p-6" id="about-us">
        <div className="flex">
          <Image src="/images/photo-1.JPG" alt="photo-1" width={1000} height={1000} className="px-6 hidden lg:block" />
          <div className="flex-1 justify-cnter content-center">
            <h2 className="flex justify-center lg:text-5xl text-2xl font-bold text-center my-6">Inidividualy Owned and Operated</h2>
            <p className="text-center lg:text-3xl">Valadez Towing was founded by <span className="text-red-800 font-bold">Jose Valadez</span>, aiming to serve the people of
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
            <a className="hidden lg:block lg:text-3xl" href="emailto:jose@valadeztowing.com">Mail Us: <span className="text-red-600 hover:underline underline-red-600">jose@valadeztowing.com</span></a>
            <div className="flex space-x-8 items-center">
              <h2 className="hidden lg:block lg:text-3xl">Follow Us:</h2>
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
              <a
                href="tel:9094199806"
                className="p-3 lg:hidden bg-pink-500 text-white rounded-md shadow-md hover:bg-pink-600 transition"
                aria-label="Phone"
              >
                <i className="fa-solid fa-phone"></i>
              </a>
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
}
