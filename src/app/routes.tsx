import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import CocktailRecipe from "./pages/CocktailRecipe";

export const router = createBrowserRouter([ 
  { 
    path: "/", 
    Component: Home, 
  }, 
  { 
    path: "/cocktail/:id", 
    Component: CocktailRecipe, 
  }, 
], {
  // Add this configuration object
  basename: "/Thankyoubill", 
});
