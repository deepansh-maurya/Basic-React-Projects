import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import Image from "./recipe-removebg-preview.png";
import { FaSearch } from "react-icons/fa";
import { useRecipe } from "./RecipeContext";

const Navbar = () => {
  const {
    islogin,
    setislogin,
    first,
    setfirst,
    selectoption,
    setselectoption,
    result,
    setresult,
    input,
    setinput,
  } = useRecipe();
  function handleoption(e) {
    setselectoption((prev) => e.target.value);
  }
  useEffect(() => {
    handleresult();
  }, [first]);
  async function handleresult() {
    if (selectoption === "By-Name") {
      let res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`
      );
      let data = await res.json();
      setresult(data.meals);
    } else if (selectoption === "By-letter") {
      let res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?f=${input}`
      );
      let data = await res.json();
      setresult(data.meals);
    } else if (selectoption === "By-category") {
      let res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${input}`
      );
      let data = await res.json();
      setresult(data.meals);
    } else if (selectoption === "By-ingredient") {
      console.log("ingredient");
      let res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${input}`
      );
      let data = await res.json();
      setresult(data.meals);
    } else if (selectoption == "By-Area") {
      let res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${input}`
      );
      let data = await res.json();
      setresult(data.meals);
    }
    setinput("");
    setselectoption("Select Option");
  }
  return (
    <>
      <nav className="bg-blue-600 p-3">
        <div className="container mx-auto flex w-[80%] justify-around items-center ">
          <div className="logo">
            <NavLink to="/">
              <img src={Image} alt="recipe" className="w-12 h-auto" />{" "}
            </NavLink>
          </div>

          <div className="search relative left-7 ml-4 flex-1">
            <input
              type="text"
              className="w-[70%] p-2 rounded-md border-none focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Search for recipes..."
              onChange={(e) => {
                setinput(e.target.value);
              }}
              value={input}
            />
            <button
              onClick={() => {
                setfirst(1);
                handleresult();
              }}
            >
              <FaSearch />
            </button>
            <select
              name="selectoption"
              id=""
              onChange={handleoption}
              value={selectoption}
            >
              <option value="Select Option">Select Option</option>
              <option value="By-Name">By-Name</option>
              <option value="By-letter">By-letter</option>
              <option value="By-category">By-category</option>
              <option value="By-ingredient">By-ingredient</option>
              <option value="By-Area">By-Area</option>
            </select>
          </div>

          <div className="flex text-lg space-x-4 relative right-2  ">
            <NavLink to="/" className="text-white">
              Home
            </NavLink>
            <NavLink to="/your-recipe" className="text-white">
              Your Recipe
            </NavLink>
            <NavLink to="/fav" className="text-white">
              Favorites
            </NavLink>
          </div>

          <div
            onClick={() => {
              setislogin(!islogin);
            }}
            className=" ml-5 flex items-center text-lg  space-x-4"
          >
            {islogin ? (
              <NavLink to="/login" className="text-white">
                Logout
              </NavLink>
            ) : (
              <NavLink to="/signup" className="text-white">
                Login
              </NavLink>
            )}
          </div>

          <NavLink to="/user" className="text-white ml-3 w-[8%]   text-center ">
            <FaRegUserCircle />
          </NavLink>
        </div>
      </nav>
      <div className="searchedresult">{}</div>
    </>
  );
};

export default Navbar;
