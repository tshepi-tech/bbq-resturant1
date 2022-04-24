//NPM package
import { createContext, useContext, useState } from "react";

const Context = createContext(null);

export function RestaurantProvider({ children }) {
  //state
  const [menu, setMenu] = useState([]);

  //Properties
  const values = { menu, addCategory };

  //Methods
  function addCategory({ content }) {
    const { title, description, imageURL, imageAlt, id } = content;
    const newCategory = {
      title: title,
      description: description,
      imageURL: imageURL,
      imageAlt: imageAlt,
      id: title,
    };
    setMenu([...menu, newCategory]);
  }

  return <Context.Provider value={values}>{children}</Context.Provider>;
}
export function useRestaurant() {
  const context = useContext(Context);
  const errorText =
    "To use useRestaurant(), you need to wrap the parent component with <RestaurantProvider/>";

  // Safeguards
  if (!context) throw new Error(errorText);

  return context;
}
