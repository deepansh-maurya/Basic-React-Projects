import React, { useEffect, useContext } from "react";
import { useState } from "react";
import { useRecipe } from "./RecipeContext.jsx";

export const YourRecipe = () => {
  let { yourrecipes, setrecipes } = useRecipe();
  const [recipedata, setrecipedata] = useState({
    chef: "",
    recipename: "",
    recipecategory: "",
    ingridientnumber: "",
    instructions: "",
    tutorial: "",
    ingredients: [],
    area: "",
    keyword: "",
    recipeImage: "",
  });

  // console.log(recipedata);
  function handleingredient(e) {
    e.preventDefault();
    console.log("aa gya");
    let number = recipedata.ingridientnumber;
    console.log(number, "number");
    let ingredient = Array.from({ length: number }, (_, index) => ({
      ingredientname: "",
      ingredientamount: "",
    }));
    console.log(ingredient);
    setrecipedata((prev) => ({ ...prev, ingredients: ingredient }));
  }
  function handlechanges(e) {
    setrecipedata((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  function handletype(e) {
    let checked = e.target.checked;
    let value;
    checked ? (value = e.target.id) : null;
    setrecipedata((prev) => ({ ...prev, keyword: value }));
  }
  function handlesubmit(e) {
    e.preventDefault();
    let data = { ...recipedata };
    // console.log(data, "data");
    let toUpdateRecipe = [...yourrecipes];
    toUpdateRecipe.push(data);
    setrecipes(toUpdateRecipe);
    // console.log(yourrecipes, "yourrecipes");
    // console.log(recipedata, "recipedata");

    let newdata = {
      chef: "",
      recipename: "",
      recipecategory: "",
      ingridientnumber: "",
      instructions: "",
      tutorial: "",
      ingredients: [],
      area: "",
      keyword: "",
      recipeImage: "",
    };
    setrecipedata(newdata);
  }
  const [filename, setfilename] = useState("");
  function handleImageUpload(e) {
    const file = e.target.files[0];
    // console.log(file.name);
    // setfilename(file.name);
    if (file) {
      setrecipedata((prev) => ({
        ...prev,
        recipeImage: file.name,
      }));
    }
  }
  console.log(yourrecipes);
  console.log(recipedata);
  return (
    <div className="p-4">
      <div className="text-2xl font-bold text-center mb-4">
        Chef's Corner: Add Your Recipe
      </div>
      <div className="myrecipes  flex flex-wrap justify-center gap-12">
        {yourrecipes.map((item, index) => {
          return (
            <div
              key={index}
              className="card1 border border-blue-700 bg-blue-300 w-[27%] rounded-lg overflow-hidden shadow-xl"
            >
              <img
                src={item.recipeImage}
                className="w-full h-40 object-cover"
                alt="photo"
              />
              <div className="recipe-title text-lg font-semibold mb-2">
                {item.chef}
              </div>
              <div className="recipe-title text-lg font-semibold mb-2">
                {item.recipename}
              </div>
              <div className="allcontainer flex">
                <div className="ingredientcontainer ">
                  {item.ingredients.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="ingredient text-gray-600 text-sm"
                      >
                        {item.ingredientname}
                      </div>
                    );
                  })}
                </div>
                <div className="amountcontainer">
                  {item.ingredients.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="ingredient text-gray-600 text-sm"
                      >
                        {item.ingredientamount}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="instructions">{item.instructions}</div>

              {/* <div className="youtubelink text-blue-500 hover:underline">
              <a href={item.meals[0].strYoutube}>Watch Tutorial</a>
            </div> */}
              <div className="country text-gray-600 text-sm mt-2">
                {item.area}
              </div>

              <div className="sourcelink text-blue-500 hover:underline">
                <a href={item.tutorial}>Tutorial</a>
              </div>
              <div className="category text-gray-600 text-sm mt-2">
                {item.recipecategory}
              </div>
              <div className="type text-gray-600 text-sm mt-2">
                {item.keyword}
              </div>
            </div>
          );
        })}
      </div>
      <form onSubmit={handlesubmit} className="max-w-md mx-auto">
        <input
          type="file"
          name="recipeImage"
          id="recipeImage"
          accept="image/*"
          // value={filename}
          className="w-full mb-3 mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          onChange={handleImageUpload}
        />

        <input
          value={recipedata.chef}
          className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring focus:border-blue-300"
          type="text"
          name="chef"
          id=""
          placeholder="Name of the Cheff"
          // required
          onChange={handlechanges}
        />
        <input
          value={recipedata.recipename}
          className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring focus:border-blue-300"
          type="text"
          name="recipename"
          // required
          onChange={handlechanges}
          placeholder="Enter the Name of the Recipe"
        />
        <input
          value={recipedata.recipecategory}
          className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring focus:border-blue-300"
          type="text"
          name="recipecategory"
          // required
          placeholder="Enter the category of the Recipe"
          onChange={handlechanges}
        />
        <div className="mb-4">
          <input
            value={recipedata.ingridientnumber}
            className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            type="text"
            name="ingridientnumber"
            // required
            id=""
            placeholder="Total number of ingredients"
            onChange={(e) => {
              setrecipedata((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }));
            }}
          />
          <button
            className="bg-blue-500 text-white mt-3 p-2 ml-2 rounded"
            onClick={handleingredient}
          >
            Proceed
          </button>
        </div>
        {recipedata.ingredients.map((item, index) => {
          return (
            <div className="mb-4 flex gap-5">
              <div className="w-[48%]">
                {
                  <input
                    className="w-full p-2 mb-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                    type="text"
                    name="ingredientname"
                    // required
                    id=""
                    placeholder="Name of the ingredient"
                    onChange={(e) => {
                      let data = [...recipedata.ingredients];
                      data[index].ingredientname = e.target.value;
                      setrecipedata((prev) => ({
                        ...prev,
                        ingredients: data,
                      }));
                    }}
                  />
                }
              </div>
              <div className="w-[48%]">
                {
                  <input
                    className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                    type="text"
                    name="ingredientamount"
                    // required
                    id=""
                    placeholder="Amount of the ingredient"
                    onChange={(e) => {
                      let data = [...recipedata.ingredients];
                      data[index].ingredientamount = e.target.value;
                      setrecipedata((prev) => ({
                        ...prev,
                        ingredients: data,
                      }));
                    }}
                  />
                }
              </div>
            </div>
          );
        })}
        <input
          value={recipedata.area}
          className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring focus:border-blue-300"
          type="text"
          name="area"
          id=""
          placeholder="Enter the Meal Area"
          onChange={handlechanges}
        />
        <textarea
          value={recipedata.instructions}
          className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring focus:border-blue-300"
          name="instructions"
          id=""
          cols="30"
          rows="10"
          placeholder="Add Instructions for your recipe"
          onChange={handlechanges}
        ></textarea>
        <input
          value={recipedata.tutorial}
          className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring focus:border-blue-300"
          type="text"
          name="tutorial"
          id=""
          placeholder="Add link of Tutorial (Optional)"
          onChange={handlechanges}
        />

        <div className="text-lg font-bold mb-2">Select Type of the Food</div>
        <div className="flex items-center flex-wrap gap-3">
          <input
            onChange={handletype}
            type="radio"
            name="keyword"
            id="Vegetarian"
            checked={recipedata.keyword === "Vegetarian"}
          />
          <label htmlFor="Vegetarian">Vegetarian</label>
          <input
            onChange={handletype}
            type="radio"
            name="keyword"
            id="Non-Vegetarian"
          />
          <label htmlFor="Non-Vegetarian">Non Vegetarian</label>
          <input
            onChange={handletype}
            type="radio"
            checked={recipedata.keyword === "Vegan"}
            name="keyword"
            id="Vegan"
          />
          <label htmlFor="Vegan">Vegan</label>
          <input
            onChange={handletype}
            type="radio"
            name="keyword"
            id="Gluten-Free"
            checked={recipedata.keyword === "Gluten-Free"}
          />

          <label htmlFor="Gluten-Free">Gluten-Free</label>
          <input
            onChange={handletype}
            type="radio"
            name="keyword"
            id="Dairy-Free"
            checked={recipedata.keyword === "Dairy-Free"}
          />
          <label htmlFor="Dairy-Free">Dairy-Free</label>
          <input
            onChange={handletype}
            type="radio"
            name="keyword"
            id="Comfort-Food"
            checked={recipedata.keyword === "Comfort-Food"}
          />
          <label htmlFor="Comfort-Food">Comfort Food</label>
          <input
            onChange={handletype}
            type="radio"
            name="keyword"
            id="Low-Calorie"
            checked={recipedata.keyword === "Low-Calorie"}
          />
          <label htmlFor="Low-Calorie">Low-Calorie</label>
          <input
            onChange={handletype}
            type="radio"
            name="keyword"
            id="Low-Carb"
            checked={recipedata.keyword === "Low-Carb"}
          />
          <label htmlFor="Low-Carb">Low-Carb</label>
          <input
            checked={recipedata.keyword === "Spicy"}
            onChange={handletype}
            type="radio"
            name="keyword"
            id="Spicy"
          />
          <label htmlFor="Spicy">Spicy</label>
          <input
            onChange={handletype}
            type="radio"
            name="keyword"
            id="Appetizer"
            checked={recipedata.keyword === "Appetizer"}
          />
          <label htmlFor="Appetizer">Appetizer</label>
          <input
            onChange={handletype}
            checked={recipedata.keyword === "Snack"}
            type="radio"
            name="keyword"
            id="Snack"
          />
          <label htmlFor="Snack">Snack</label>
        </div>
        <button className="bg-green-500 mt-5 text-white p-2 rounded">
          Add Your Recipe
        </button>
      </form>
    </div>
  );
};
