//NPM package
import { createContext, useContext, useState } from "react";

const Context = createContext(null);

export function RestaurantProvider({ children }) {
  //Properties
  const values = { deleteCategory };

  //Methods
  function deleteCategory({ id, menu, setMenu }) {
    const clonedCategories = [...menu];
    const index = clonedCategories.findIndex((item) => item.id === id);

    clonedCategories.splice(index, 1);
    alert("Category deleted successfully");
    setMenu(clonedCategories);
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
