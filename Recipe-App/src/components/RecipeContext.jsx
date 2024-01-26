import { createContext, useContext, useState } from "react";

export const RecipeContext = createContext();

export const RecipeContextProvider = ({ children }) => {
  let [yourrecipes, setrecipes] = useState([]);
  const [islogin, setislogin] = useState(false);
  const [first, setfirst] = useState();
  const [selectoption, setselectoption] = useState();
  const [result, setresult] = useState([]);
  const [input, setinput] = useState("");
  const [favlist, setfavlist] = useState([]);
  let value = {
    yourrecipes,
    setrecipes,
    islogin,
    setislogin,
    selectoption,
    setselectoption,
    first,
    setfirst,
    result,
    setresult,
    input,
    setinput,
    favlist,
    setfavlist,
  };
  return (
    <RecipeContext.Provider value={value}>{children}</RecipeContext.Provider>
  );
};

export const useRecipe = () => {
  return useContext(RecipeContext);
};
