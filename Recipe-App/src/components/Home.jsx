import React, { useEffect, useState } from "react";
import { useRecipe } from "./RecipeContext";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
export const Home = () => {
  const { result, setfavlist, favlist } = useRecipe();
  const [fav, setfav] = useState(Array(result.length).fill(false));
  useEffect(() => {
    setfav(Array(result.length).fill(false));
  }, [result]);
  const [recipe, setRecipe] = useState();
  const [india, setindia] = useState();
  async function getTheMeals() {
    try {
      const promises = Array.from({ length: 9 }, () =>
        fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      );

      const responses = await Promise.all(promises);

      const data = await Promise.all(
        responses.map((response) => response.json())
      );
      setRecipe(data);
    } catch (error) {
      console.error("Error fetching meals:", error);
    }
  }

  async function getTheMealsByIndia() {
    try {
      const promises = Array.from({ length: 5 }, () =>
        fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian")
      );

      const responses = await Promise.all(promises);

      const data = await Promise.all(
        responses.map((response) => response.json())
      );
      setindia(data);
    } catch (error) {
      console.error("Error fetching meals:", error);
    }
  }
  const [italy, setitaly] = useState();
  async function getTheMealsByItaly() {
    try {
      const promises = Array.from({ length: 5 }, () =>
        fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=Italian")
      );

      const responses = await Promise.all(promises);

      const data = await Promise.all(
        responses.map((response) => response.json())
      );
      setitaly(data);
    } catch (error) {
      console.error("Error fetching meals:", error);
    }
  }
  const [france, setfrance] = useState();
  async function getTheMealsByFrance() {
    try {
      const promises = Array.from({ length: 5 }, () =>
        fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=French")
      );

      const responses = await Promise.all(promises);

      const data = await Promise.all(
        responses.map((response) => response.json())
      );
      setfrance(data);
    } catch (error) {
      console.error("Error fetching meals:", error);
    }
  }
  const [china, setchina] = useState();
  async function getTheMealsByChina() {
    try {
      const promises = Array.from({ length: 5 }, () =>
        fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=Chinese")
      );

      const responses = await Promise.all(promises);

      const data = await Promise.all(
        responses.map((response) => response.json())
      );
      setchina(data);
    } catch (error) {
      console.error("Error fetching meals:", error);
    }
  }
  const [japan, setjapan] = useState();
  async function getTheMealsByJapan() {
    try {
      const promises = Array.from({ length: 5 }, () =>
        fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=Japanese")
      );

      const responses = await Promise.all(promises);

      const data = await Promise.all(
        responses.map((response) => response.json())
      );
      setjapan(data);
    } catch (error) {
      console.error("Error fetching meals:", error);
    }
  }
  const [category, setcategory] = useState();
  async function getTheMealsByCategory() {
    try {
      const responses = await fetch(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );

      const data = await responses.json();
      setcategory(data.categories);
    } catch (error) {
      console.error("Error fetching meals:", error);
    }
  }
  useEffect(() => {
    getTheMeals();
    getTheMealsByIndia();
    getTheMealsByItaly();
    getTheMealsByFrance();
    getTheMealsByChina();
    getTheMealsByJapan();
    getTheMealsByCategory();
  }, []);

  function handlefav(index) {
    console.log(index);
    setfav((prev) => prev.map((item, i) => (i == index ? true : item)));
    let list = result.filter((item, i) => i == index);
    setfavlist((prev) => [list, ...prev]);
  }
  // useEffect(() => {
  //   console.log(favlist);
  // }, [favlist]);
  return (
    <>
      <div className="home">
        <div className="searchbased mt-9 ">
          <div className="text-2xl  flex font-bold mb-4 items-center justify-center ">
            {result.length != 0 ? <h1>Search Result</h1> : <div></div>}
          </div>
          <div className="listing  flex flex-wrap justify-center gap-12">
            {result &&
              result.map((item, index) => {
                return (
                  <div
                    key={Math.random()}
                    className="card1 border border-blue-700 bg-blue-300 w-[27%] rounded-lg overflow-hidden shadow-xl"
                  >
                    <img
                      loading="lazy"
                      src={item && item.strMealThumb}
                      className="w-full h-40 object-cover"
                      alt="photo"
                    />
                    <div onClick={() => handlefav(index)} className="fav">
                      {fav[index] ? <FaHeart /> : <CiHeart />}
                    </div>
                    <div className="recipe-title text-lg font-semibold mb-2">
                      {item && item.strMeal}
                    </div>
                    <div className="allcontainer flex">
                      <div className="ingredientcontainer ">
                        <div className="ingredient1 text-gray-700 text-sm mb-1">
                          {item && item.strIngredient1}
                        </div>
                        <div className="ingredient2 text-gray-700 text-sm mb-1">
                          {item && item.strIngredient2}
                        </div>
                        <div className="ingredient3 text-gray-700 text-sm mb-1">
                          {item && item.strIngredient3}
                        </div>
                        <div className="ingredient4 text-gray-700 text-sm mb-1">
                          {item && item.strIngredient4}
                        </div>
                        <div className="ingredient5 text-gray-700 text-sm mb-1">
                          {item && item.strIngredient5}
                        </div>
                        <div className="ingredient6 text-gray-700 text-sm mb-1">
                          {item && item.strIngredient6}
                        </div>
                        <div className="ingredient7 text-gray-700 text-sm mb-1">
                          {item && item.strIngredient7}
                        </div>
                        <div className="ingredient8 text-gray-700 text-sm mb-1">
                          {item && item.strIngredient8}
                        </div>
                        <div className="ingredient9 text-gray-700 text-sm mb-1">
                          {item && item.strIngredient9}
                        </div>
                        <div className="ingredient10 text-gray-700 text-sm mb-1">
                          {item && item.strIngredient10}
                        </div>
                      </div>
                      <div className="amountcontainer">
                        <div className="amount text-gray-600 text-sm">
                          {item && item.strMeasure1}
                        </div>

                        <div className="amount text-gray-600 text-sm">
                          {item && item.strMeasure2}
                        </div>

                        <div className="amount text-gray-600 text-sm">
                          {item && item.strMeasure3}
                        </div>

                        <div className="amount text-gray-600 text-sm">
                          {item && item.strMeasure4}
                        </div>

                        <div className="amount text-gray-600 text-sm">
                          {item && item.strMeasure5}
                        </div>

                        <div className="amount text-gray-600 text-sm">
                          {item && item.strMeasure6}
                        </div>

                        <div className="amount text-gray-600 text-sm">
                          {item && item.strMeasure7}
                        </div>

                        <div className="amount text-gray-600 text-sm">
                          {item && item.strMeasure8}
                        </div>

                        <div className="amount text-gray-600 text-sm">
                          {item && item.strMeasure9}
                        </div>

                        <div className="amount text-gray-600 text-sm">
                          {item && item.strMeasure10}
                        </div>
                      </div>
                    </div>
                    <div className="youtubelink text-blue-500 hover:underline">
                      <a href={item && item.strYoutube}>Watch Tutorial</a>
                    </div>
                    <div className="country text-gray-600 text-sm mt-2">
                      {item && item.strArea}
                    </div>

                    <div className="sourcelink text-blue-500 hover:underline">
                      <a href={item && item.strSource}>Source Link</a>
                    </div>
                    <div className="category text-gray-600 text-sm mt-2">
                      {item && item.strCategory}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="popular mt-9 ">
          <div className="text-2xl  flex font-bold mb-4 items-center justify-center ">
            <h1>Popular</h1>
          </div>
          <div className="listing  flex flex-wrap justify-center gap-12">
            {recipe &&
              recipe.map((item) => {
                return (
                  <div
                    key={Math.random()}
                    className="card1 border border-blue-700 bg-blue-300 w-[27%] rounded-lg overflow-hidden shadow-xl"
                  >
                    <img
                      loading="lazy"
                      src={item.meals[0].strMealThumb}
                      className="w-full h-40 object-cover"
                      alt="photo"
                    />
                    <div className="recipe-title text-lg font-semibold mb-2">
                      {item.meals[0].strMeal}
                    </div>
                    <div className="allcontainer flex">
                      <div className="ingredientcontainer ">
                        <div className="ingredient1 text-gray-700 text-sm mb-1">
                          {item.meals[0].strIngredient1}
                        </div>
                        <div className="ingredient2 text-gray-700 text-sm mb-1">
                          {item.meals[0].strIngredient2}
                        </div>
                        <div className="ingredient3 text-gray-700 text-sm mb-1">
                          {item.meals[0].strIngredient3}
                        </div>
                        <div className="ingredient4 text-gray-700 text-sm mb-1">
                          {item.meals[0].strIngredient4}
                        </div>
                        <div className="ingredient5 text-gray-700 text-sm mb-1">
                          {item.meals[0].strIngredient5}
                        </div>
                        <div className="ingredient6 text-gray-700 text-sm mb-1">
                          {item.meals[0].strIngredient6}
                        </div>
                        <div className="ingredient7 text-gray-700 text-sm mb-1">
                          {item.meals[0].strIngredient7}
                        </div>
                        <div className="ingredient8 text-gray-700 text-sm mb-1">
                          {item.meals[0].strIngredient8}
                        </div>
                        <div className="ingredient9 text-gray-700 text-sm mb-1">
                          {item.meals[0].strIngredient9}
                        </div>
                        <div className="ingredient10 text-gray-700 text-sm mb-1">
                          {item.meals[0].strIngredient10}
                        </div>
                      </div>
                      <div className="amountcontainer">
                        <div className="amount text-gray-600 text-sm">
                          {item.meals[0].strMeasure1}
                        </div>

                        <div className="amount text-gray-600 text-sm">
                          {item.meals[0].strMeasure2}
                        </div>

                        <div className="amount text-gray-600 text-sm">
                          {item.meals[0].strMeasure3}
                        </div>

                        <div className="amount text-gray-600 text-sm">
                          {item.meals[0].strMeasure4}
                        </div>

                        <div className="amount text-gray-600 text-sm">
                          {item.meals[0].strMeasure5}
                        </div>

                        <div className="amount text-gray-600 text-sm">
                          {item.meals[0].strMeasure6}
                        </div>

                        <div className="amount text-gray-600 text-sm">
                          {item.meals[0].strMeasure7}
                        </div>

                        <div className="amount text-gray-600 text-sm">
                          {item.meals[0].strMeasure8}
                        </div>

                        <div className="amount text-gray-600 text-sm">
                          {item.meals[0].strMeasure9}
                        </div>

                        <div className="amount text-gray-600 text-sm">
                          {item.meals[0].strMeasure10}
                        </div>
                      </div>
                    </div>
                    {/* <div className="instructions">
                      {item.meals[0].strInstructions}
                    </div> */}

                    <div className="youtubelink text-blue-500 hover:underline">
                      <a href={item.meals[0].strYoutube}>Watch Tutorial</a>
                    </div>
                    <div className="country text-gray-600 text-sm mt-2">
                      {item.meals[0].strArea}
                    </div>

                    <div className="sourcelink text-blue-500 hover:underline">
                      <a href={item.meals[0].strSource}>Source Link</a>
                    </div>
                    <div className="category text-gray-600 text-sm mt-2">
                      {item.meals[0].strCategory}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="countries mt-10">
          <div className="title flex justify-center">
            <h1 className="font-bold h-3  ml-2 mb-4">
              Around the World Flavors
            </h1>
          </div>
          <div className="india mt-10 flex flex-col items-center">
            <div className="flex justify-center items-center space-x-4">
              <div className="text-2xl flex flex-col justify-center font-bold ml-2 mb-4">
                <span className="">I</span>
                <span className="">N</span>
                <span className="">D</span>
                <span className="">I</span>
                <span className="">A</span>
              </div>
              {india &&
                india.map((item, index) => {
                  return (
                    <div
                      key={Math.random()}
                      className="cardindia  flex flex-col items-center"
                    >
                      <img
                        loading="lazy"
                        className="rounded-full shadow-black w-[80%] shadow-2xl h-[80%] mb-2"
                        src={item.meals[index].strMealThumb}
                        alt="image"
                      />
                      <div className="mealtitle text-center">
                        {item.meals[index].strMeal}
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="italy  mt-10 ">
            <div className="flex justify-center items-center space-x-4">
              <div className="text-2xl flex flex-col justify-center font-bold ml-2 mb-4">
                <span className="">I</span>
                <span className="">T</span>
                <span className="">A</span>
                <span className="">L</span>
                <span className="">Y</span>
              </div>
              {italy &&
                italy.map((item, index) => {
                  return (
                    <div
                      key={Math.random()}
                      className="cardindia  flex flex-col items-center"
                    >
                      <img
                        className="rounded-full shadow-black shadow-2xl w-[80%] h-[80%] mb-2"
                        src={item.meals[index].strMealThumb}
                        alt="image"
                      />
                      <div className="mealtitle text-center">
                        {item.meals[index].strMeal}
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="france  mt-10 ">
            <div className="flex justify-center items-center space-x-4">
              <div className="text-2xl flex flex-col justify-center font-bold ml-2 mb-4">
                <span className="">F</span>
                <span className="">R</span>
                <span className="">A</span>
                <span className="">N</span>
                <span className="">C</span>
                <span className="">E</span>
              </div>
              {france &&
                france.map((item, index) => {
                  return (
                    <div
                      key={Math.random()}
                      className="cardindia  flex flex-col items-center"
                    >
                      <img
                        className="rounded-full shadow-2xl shadow-black w-[80%] h-[80%] mb-2"
                        src={item.meals[index].strMealThumb}
                        alt="image"
                      />
                      <div className="mealtitle text-center">
                        {item.meals[index].strMeal}
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="japan  mt-10 ">
            <div className="flex justify-center items-center space-x-4">
              <div className="text-2xl flex flex-col justify-center font-bold ml-2 mb-4">
                <span className="">J</span>
                <span className="">A</span>
                <span className="">P</span>
                <span className="">A</span>
                <span className="">N</span>
              </div>
              {japan &&
                japan.map((item, index) => {
                  return (
                    <div
                      key={Math.random()}
                      className="cardindia  flex flex-col items-center"
                    >
                      <img
                        loading="lazy"
                        className="rounded-full shadow-2xl shadow-black w-[80%] h-[80%] mb-2"
                        src={item.meals[index].strMealThumb}
                        alt="image"
                      />
                      <div className="mealtitle text-center">
                        {item.meals[index].strMeal}
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="china  mt-10 ">
            <div className="flex justify-center items-center space-x-4">
              <div className="text-2xl flex flex-col justify-center font-bold ml-2 mb-4">
                <span className="">C</span>
                <span className="">H</span>
                <span className="">I</span>
                <span className="">N</span>
                <span className="">A</span>
              </div>
              {china &&
                china.map((item, index) => {
                  return (
                    <div
                      key={Math.random()}
                      className="cardindia  flex flex-col items-center"
                    >
                      <img
                        className="rounded-full shadow-2xl shadow-black w-[80%] h-[80%] mb-2"
                        src={item.meals[index].strMealThumb}
                        alt="image"
                      />
                      <div className="mealtitle text-center">
                        {item.meals[index].strMeal}
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        <div className="category bg-white p-6 rounded-lg shadow-md">
          <div className="title mt-24 text-3xl text-center font-bold mb-4">
            Recipe Realms
          </div>
          <div className="cardcategory flex flex-wrap justify-center gap-3 ">
            {category &&
              category.map((item, index) => {
                return (
                  <div
                    key={Math.random()}
                    className="bg-gray-100 shadow-inner shadow-slate-500 p-4 rounded-md"
                  >
                    <img
                      src={item.strCategoryThumb}
                      alt=""
                      className="w-full h-32 object-cover mb-2 rounded-md"
                    />
                    <div className="text-center">{item.strCategory}</div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};
