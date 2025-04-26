import Footer from "../components/Footer";
import Header from "../components/Header";
import Product from "../components/Product";
import { useContext } from "react";
import { AppContext } from "../Context";

const ProductListing = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("SomeComponent must be used within an AppContextProvider");
  }
  const { plants } = context;

  return (
    <div>
      <Header />
      <div>
        <h2 className="text-center text-3xl font-bold mt-24">Tropicals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 container mx-auto my-12">
          {plants &&
            plants
              .filter((plant) => plant.category === "Tropicals")
              .map((plant) => (
                <div key={plant.id}>
                  <Product
                    name={plant.name}
                    image={plant.image}
                    price={plant.price}
                    description={plant.description}
                    plant={plant}
                  />
                </div>
              ))}
        </div>
      </div>
      <div>
        <h2 className="text-center text-3xl font-bold mt-24">Flowers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 container mx-auto my-12">
          {plants &&
            plants
              .filter((plant) => plant.category === "Flowers")
              .map((plant) => (
                <div key={plant.id}>
                  <Product
                    name={plant.name}
                    image={plant.image}
                    price={plant.price}
                    description={plant.description}
                    plant={plant}
                  />
                </div>
              ))}
        </div>
      </div>

      <div>
        <h2 className="text-center text-3xl font-bold mt-24">Succulents</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 container mx-auto my-12">
          {plants &&
            plants
              .filter((plant) => plant.category === "Succulents")
              .map((plant) => (
                <div key={plant.id}>
                  <Product
                    name={plant.name}
                    image={plant.image}
                    price={plant.price}
                    description={plant.description}
                    plant={plant}
                  />
                </div>
              ))}
        </div>
      </div>
      <div>
        <h2 className="text-center text-3xl font-bold mt-24">Herbs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 container mx-auto my-12">
          {plants &&
            plants
              .filter((plant) => plant.category === "Herbs")
              .map((plant) => (
                <div key={plant.id}>
                  <Product
                    name={plant.name}
                    image={plant.image}
                    price={plant.price}
                    description={plant.description}
                    plant={plant}
                  />
                </div>
              ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductListing;
