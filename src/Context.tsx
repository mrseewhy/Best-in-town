import { createContext, useState, ReactNode } from "react";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  description: string;
  image: string;
  category: string;
  addedToCart: boolean;
}

interface Cart {
  plants: CartItem[];
  cartItems: CartItem[];
  totalQuantity: number;
  totalPrice: number;
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  addQuantity: (item: CartItem) => void;
  removeQuantity: (item: CartItem) => void;
  removeItem: (item: CartItem) => void;
}

// interface Cart {
//   totalQuantity: number;
//   changeQuantity: () => void;
// }

const plantsData: CartItem[] = [
  // Tropicals (6 plants)
  {
    id: 1,
    name: "Monstera Deliciosa",
    price: 34.99,
    quantity: 1,
    description: "Large leaves with natural holes   ",
    image: "../public/images/1.avif",
    category: "Tropicals",
    addedToCart: false,
  },
  {
    id: 2,
    name: "Bird of Paradise",
    price: 49.99,
    quantity: 1,
    description: "Exotic flowering tropical plant  ",
    image: "../public/images/2.avif",
    category: "Tropicals",
    addedToCart: false,
  },
  {
    id: 3,
    name: "Fiddle Leaf Fig",
    price: 39.99,
    quantity: 1,
    description: "Popular indoor tree with big leaves",
    image: "../public/images/3.png",
    category: "Tropicals",
    addedToCart: false,
  },
  {
    id: 4,
    name: "Parlor Palm",
    price: 24.99,
    quantity: 1,
    description: "Compact palm for small spaces    ",
    image: "../public/images/4.jpg",
    category: "Tropicals",
    addedToCart: false,
  },
  {
    id: 5,
    name: "Rubber Plant",
    price: 29.99,
    quantity: 1,
    description: "Glossy leaves, easy to care for  ",
    image: "../public/images/5.avif",
    category: "Tropicals",
    addedToCart: false,
  },
  {
    id: 6,
    name: "Calathea Orbifolia",
    price: 32.99,
    quantity: 1,
    description: "Striking patterned leaf tropical ",
    image: "../public/images/6.jpg",
    category: "Tropicals",
    addedToCart: false,
  },

  // Flowers (6 plants)
  {
    id: 7,
    name: "Peace Lily",
    price: 22.99,
    quantity: 1,
    description: "White blooms, purifies the air   ",
    image: "../public/images/1.avif",
    category: "Flowers",
    addedToCart: false,
  },
  {
    id: 8,
    name: "Orchid Phalaenopsis",
    price: 27.99,
    quantity: 1,
    description: "Elegant long-lasting flowering   ",
    image: "../public/images/2.avif",
    category: "Flowers",
    addedToCart: false,
  },
  {
    id: 9,
    name: "Gerbera Daisy",
    price: 14.99,
    quantity: 1,
    description: "Bright colorful daisy flowers    ",
    image: "../public/images/3.png",
    category: "Flowers",
    addedToCart: false,
  },
  {
    id: 10,
    name: "Hydrangea",
    price: 31.99,
    quantity: 1,
    description: "Large clusters of showy blooms   ",
    image: "../public/images/4.jpg",
    category: "Flowers",
    addedToCart: false,
  },
  {
    id: 11,
    name: "African Violet",
    price: 12.99,
    quantity: 1,
    description: "Small flowering houseplant       ",
    image: "../public/images/5.avif",
    category: "Flowers",
    addedToCart: false,
  },
  {
    id: 12,
    name: "Anthurium",
    price: 28.99,
    quantity: 1,
    description: "Waxy red flowers, tropical look ",
    image: "../public/images/6.jpg",
    category: "Flowers",
    addedToCart: false,
  },

  // Succulents (6 plants)
  {
    id: 13,
    name: "Echeveria",
    price: 8.99,
    quantity: 1,
    description: "Rosette-shaped colorful succulent",
    image: "../public/images/1.avif",
    category: "Succulents",
    addedToCart: false,
  },
  {
    id: 14,
    name: "Haworthia",
    price: 7.99,
    quantity: 1,
    description: "Small striped windowed plant    ",
    image: "../public/images/2.avif",
    category: "Succulents",
    addedToCart: false,
  },
  {
    id: 15,
    name: "Jade Plant",
    price: 11.99,
    quantity: 1,
    description: "Thick stems with oval leaves    ",
    image: "../public/images/3.png",
    category: "Succulents",
    addedToCart: false,
  },
  {
    id: 16,
    name: "Aloe Vera",
    price: 9.99,
    quantity: 1,
    description: "Medicinal plant with gel inside ",
    image: "../public/images/4.jpg",
    category: "Succulents",
    addedToCart: false,
  },
  {
    id: 17,
    name: "String of Pearls",
    price: 15.99,
    quantity: 1,
    description: "Trailing succulent with beads    ",
    image: "../public/images/5.avif",
    category: "Succulents",
    addedToCart: false,
  },
  {
    id: 18,
    name: "Zebra Cactus",
    price: 10.99,
    quantity: 1,
    description: "White-striped spiky succulent   ",
    image: "../public/images/6.jpg",
    category: "Succulents",
    addedToCart: false,
  },

  // Herbs (6 plants)
  {
    id: 19,
    name: "Basil",
    price: 5.99,
    quantity: 1,
    description: "Aromatic leaves for cooking     ",
    image: "../public/images/1.avif",
    category: "Herbs",
    addedToCart: false,
  },
  {
    id: 20,
    name: "Mint",
    price: 4.99,
    quantity: 1,
    description: "Fast-growing refreshing herb   ",
    image: "../public/images/2.avif",
    category: "Herbs",
    addedToCart: false,
  },
  {
    id: 21,
    name: "Rosemary",
    price: 6.99,
    quantity: 1,
    description: "Woody herb with needle leaves   ",
    image: "../public/images/3.png",
    category: "Herbs",
    addedToCart: false,
  },
  {
    id: 22,
    name: "Thyme",
    price: 5.49,
    quantity: 1,
    description: "Small leaves, earthy flavor     ",
    image: "../public/images/4.jpg",
    category: "Herbs",
    addedToCart: false,
  },
  {
    id: 23,
    name: "Parsley",
    price: 4.49,
    quantity: 1,
    description: "Biennial herb with bright green ",
    image: "../public/images/5.avif",
    category: "Herbs",
    addedToCart: false,
  },
  {
    id: 24,
    name: "Cilantro",
    price: 5.29,
    quantity: 1,
    description: "Fresh leaves used in many dishes",
    image: "../public/images/6.jpg",
    category: "Herbs",
    addedToCart: false,
  },
];

const AppContext = createContext<Cart | null>(null);

const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [eachplants, setEachPlants] = useState<CartItem[]>(plantsData);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (item: CartItem) => {
    setCartItems((prevCartItems) => {
      const itemExists = prevCartItems.find(
        (cartItem) => cartItem.id === item.id
      );

      let updatedCart;
      if (itemExists) {
        // Update only the quantity of the existing item
        updatedCart = prevCartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        // Add new item with quantity 1
        updatedCart = [...prevCartItems, { ...item, quantity: 1 }];
      }

      // Calculate total price based on updated quantities
      const newTotalPrice = updatedCart.reduce(
        (sum, cartItem) => sum + cartItem.quantity * cartItem.price,
        0
      );

      setTotalPrice(newTotalPrice);
      setTotalQuantity(updatedCart.length); // total unique items only

      // ✅ Instead of mutating item directly, update eachplants
      setEachPlants((prevEachPlants) =>
        prevEachPlants.map((plant) =>
          plant.id === item.id ? { ...plant, addedToCart: true } : plant
        )
      );

      return updatedCart;
    });
  };

  const removeFromCart = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => setCartItems([]);

  const addQuantity = (item) => {
    setCartItems((prevCartItems) => {
      const itemExists = prevCartItems.find(
        (cartItem) => cartItem.id === item.id
      );

      let updatedCart;
      if (itemExists) {
        updatedCart = prevCartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }

      // Calculate total price
      const newTotalPrice = updatedCart.reduce(
        (sum, cartItem) => sum + cartItem.quantity * cartItem.price,
        0
      );
      setTotalPrice(newTotalPrice);

      // ✅ Here's the line you should change:
      const newTotalQuantity = updatedCart.reduce(
        (sum, cartItem) => sum + cartItem.quantity,
        0
      );
      setTotalQuantity(newTotalQuantity);

      return updatedCart;
    });
  };

  const removeQuantity = (item) => {
    setCartItems((prevCartItems) => {
      // Find if the item exists in the cart
      const itemExists = prevCartItems.find(
        (cartItem) => cartItem.id === item.id
      );

      let updatedCart;

      if (itemExists) {
        // If the quantity is more than 1, decrease it by 1
        if (itemExists.quantity > 1) {
          updatedCart = prevCartItems.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity - 1 }
              : cartItem
          );
        } else {
          // If the quantity is 1, remove the item completely from the cart
          setEachPlants((prevEachPlants) =>
            prevEachPlants.map((plant) =>
              plant.id === item.id ? { ...plant, addedToCart: false } : plant
            )
          );
          updatedCart = prevCartItems.filter(
            (cartItem) => cartItem.id !== item.id
          );
        }
      } else {
        // If the item doesn't exist, return the cart as is (no changes)
        setEachPlants((prevEachPlants) =>
          prevEachPlants.map((plant) =>
            plant.id === item.id ? { ...plant, addedToCart: false } : plant
          )
        );
        updatedCart = prevCartItems;
      }

      // Calculate total price based on updated quantities
      const newTotalPrice = updatedCart.reduce(
        (sum, cartItem) => sum + cartItem.quantity * cartItem.price,
        0
      );
      setTotalPrice(newTotalPrice);

      // Calculate total quantity of all items combined
      const newTotalQuantity = updatedCart.reduce(
        (sum, cartItem) => sum + cartItem.quantity,
        0
      );
      setTotalQuantity(newTotalQuantity);

      return updatedCart;
    });
  };

  const removeItem = (item) => {
    setCartItems((prevCartItems) => {
      // Remove the item completely from the cart
      const updatedCart = prevCartItems.filter(
        (cartItem) => cartItem.id !== item.id
      );

      // Recalculate total price based on the updated cart
      const newTotalPrice = updatedCart.reduce(
        (sum, cartItem) => sum + cartItem.quantity * cartItem.price,
        0
      );
      setTotalPrice(newTotalPrice);

      // Recalculate total quantity of all items combined
      const newTotalQuantity = updatedCart.reduce(
        (sum, cartItem) => sum + cartItem.quantity,
        0
      );
      setTotalQuantity(newTotalQuantity);
      setEachPlants((prevEachPlants) =>
        prevEachPlants.map((plant) =>
          plant.id === item.id ? { ...plant, addedToCart: false } : plant
        )
      );

      return updatedCart;
    });
  };

  const value: Cart = {
    plants: eachplants,
    cartItems,
    totalQuantity,
    totalPrice,
    addToCart,
    removeFromCart,
    clearCart,
    addQuantity,
    removeQuantity,
    removeItem,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContext, AppContextProvider };
