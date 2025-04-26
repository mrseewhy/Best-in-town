import { Link } from "react-router-dom";

const Hero = () => {
  const bg = {
    backgroundImage: `url(images/bg.jpg)`,
    backgroundColor: "green",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div>
      <div style={bg} className="w-full h-screen relative text-white">
        <div className="absolute inset-0 bg-black/50">
          <div className="container mx-auto px-3 sm:px-0 h-full">
            <div className=" flex  flex-col sm:flex-row items-center justify-center w-full h-full gap-12 sm:gap-32">
              <div className="w-full sm:w-1/3 flex flex-col items-center justify-center">
                <h2 className="font-bold text-3xl text-center">
                  Welcome To Best-In-Town Greenery
                </h2>
                <p className="h-1 w-12 bg-green-400 text-center mt-6"></p>
                <p className="font-bold text-lg text-center mt-8 mb-6">
                  Where Green Meeting Serenity{" "}
                </p>
                <div className="flex items-center justify-center mb-8 mt-2">
                  <Link
                    to="/product-listings"
                    className="text-sm flex items-center justify-center h-10 w-28 bg-green-600 text-white border border-green-200 shadow-2xl hover:bg-green-500 duration-200 rounded-sm"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
              <div className="w-full sm:w-2/3 ">
                <p className="text-center text-xl mb-8 font-semibold">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorem.
                </p>
                <p className="text-justify mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Incidunt molestiae, in reprehenderit odio ut rem eius dolorem
                  doloremque, consectetur optio commodi recusandae, blanditiis
                  quaerat placeat quam magnam fugit hic pariatur? Lorem ipsum
                  dolor sit amet consectetur adipisicing elit.
                </p>
                <p className="text-justify mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Incidunt molestiae, in reprehenderit odio ut rem eius dolorem
                  doloremque, consectetur optio commodi recusandae, blanditiis
                  quaerat placeat quam magnam fugit hic pariatur? Lorem ipsum
                  dolor sit amet consectetur adipisicing elit.
                </p>

                <p className="text-justify mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Incidunt molestiae, in reprehenderit odio ut rem eius dolorem
                  doloremque, consectetur optio commodi recusandae
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
