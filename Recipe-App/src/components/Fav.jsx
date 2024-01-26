import React, { useEffect, useState } from "react";
import { useRecipe } from "./RecipeContext";
import { FaHeart } from "react-icons/fa";

export const Fav = () => {
  const { favlist, setfavlist } = useRecipe();
  const [fav, setfav] = useState(Array(favlist.length).fill(true));
  useEffect(() => {
    setfav(Array(favlist.length).fill(true));
    console.log(fav);
  }, [favlist]);
  // console.log(favlist);
  function handlefav(index) {
    setfavlist((prev) => prev.filter((item, i) => i != index));
  }
  return (
    <div>
      <div className="searchbased mt-9 ">
        <div className="text-2xl  flex font-bold mb-4 items-center justify-center ">
          <h1>Your Favourites</h1>
        </div>
        <div className="listing  flex flex-wrap justify-center gap-12">
          {favlist &&
            favlist.map((item, index) => {
              return (
                <div
                  key={Math.random()}
                  className="card1 border border-blue-700 bg-blue-300 w-[27%] rounded-lg overflow-hidden shadow-xl"
                >
                  <img
                    loading="lazy"
                    src={item && item[0].strMealThumb}
                    className="w-full h-40 object-cover"
                    alt="photo"
                  />
                  <div onClick={() => handlefav(index)} className="fav">
                    {fav[index] ? <FaHeart /> : null}
                  </div>
                  <div className="recipe-title text-lg font-semibold mb-2">
                    {item && item[0].strMeal}
                  </div>
                  <div className="allcontainer flex">
                    <div className="ingredientcontainer ">
                      <div className="ingredient1 text-gray-700 text-sm mb-1">
                        {item && item[0].strIngredient1}
                      </div>
                      <div className="ingredient2 text-gray-700 text-sm mb-1">
                        {item && item[0].strIngredient2}
                      </div>
                      <div className="ingredient3 text-gray-700 text-sm mb-1">
                        {item && item[0].strIngredient3}
                      </div>
                      <div className="ingredient4 text-gray-700 text-sm mb-1">
                        {item && item[0].strIngredient4}
                      </div>
                      <div className="ingredient5 text-gray-700 text-sm mb-1">
                        {item && item[0].strIngredient5}
                      </div>
                      <div className="ingredient6 text-gray-700 text-sm mb-1">
                        {item && item[0].strIngredient6}
                      </div>
                      <div className="ingredient7 text-gray-700 text-sm mb-1">
                        {item && item[0].strIngredient7}
                      </div>
                      <div className="ingredient8 text-gray-700 text-sm mb-1">
                        {item && item[0].strIngredient8}
                      </div>
                      <div className="ingredient9 text-gray-700 text-sm mb-1">
                        {item && item[0].strIngredient9}
                      </div>
                      <div className="ingredient10 text-gray-700 text-sm mb-1">
                        {item && item[0].strIngredient10}
                      </div>
                    </div>
                    <div className="amountcontainer">
                      <div className="amount text-gray-600 text-sm">
                        {item && item[0].strMeasure1}
                      </div>

                      <div className="amount text-gray-600 text-sm">
                        {item && item[0].strMeasure2}
                      </div>

                      <div className="amount text-gray-600 text-sm">
                        {item && item[0].strMeasure3}
                      </div>

                      <div className="amount text-gray-600 text-sm">
                        {item && item[0].strMeasure4}
                      </div>

                      <div className="amount text-gray-600 text-sm">
                        {item && item[0].strMeasure5}
                      </div>

                      <div className="amount text-gray-600 text-sm">
                        {item && item[0].strMeasure6}
                      </div>

                      <div className="amount text-gray-600 text-sm">
                        {item && item[0].strMeasure7}
                      </div>

                      <div className="amount text-gray-600 text-sm">
                        {item && item[0].strMeasure8}
                      </div>

                      <div className="amount text-gray-600 text-sm">
                        {item && item[0].strMeasure9}
                      </div>

                      <div className="amount text-gray-600 text-sm">
                        {item && item[0].strMeasure10}
                      </div>
                    </div>
                  </div>
                  <div className="youtubelink text-blue-500 hover:underline">
                    <a href={item && item[0].strYoutube}>Watch Tutorial</a>
                  </div>
                  <div className="country text-gray-600 text-sm mt-2">
                    {item && item[0].strArea}
                  </div>

                  <div className="sourcelink text-blue-500 hover:underline">
                    <a href={item && item[0].strSource}>Source Link</a>
                  </div>
                  <div className="category text-gray-600 text-sm mt-2">
                    {item && item[0].strCategory}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
