import React, { useState } from "react";
import Ingredients from "./Ingredients";

export default function Main() {
  const [ingredients, setIngredients] = useState({
    meat: [0],
    salad: [0],
    bacon: [0],
    cheese: [0],
  });

  const addIngredient = (type) => {
    setIngredients((prevIngredients) => {
      const lastValue = prevIngredients[type][prevIngredients[type].length - 1];
      const newIngredients = {
        ...prevIngredients,
        [type]: [...prevIngredients[type], lastValue + 1],
      };
      return newIngredients;
    });
  };

  const removeIngredient = (type) => {
    setIngredients((prevIngredients) => {
      if (prevIngredients[type].length > 0) {
        const newIngredients = {
          ...prevIngredients,
          [type]: prevIngredients[type].slice(0, -1),
        };
        console.log(newIngredients);
        return newIngredients;
      }
      return prevIngredients;
    });
  };

  return (
    <div className="flex flex-col gap-2  items-center">
      <div className="w-[300px] h-32 rounded-t-[50%] rounded-b-[0] bg-orange-400 "></div>
      {ingredients.bacon.length > 0 &&
        ingredients.bacon.map((ing, index) => {
          return (
            <div className="w-[400px] h-5 rounded bg-red-700" key={index}></div>
          );
        })}
      {ingredients.cheese.length > 0 &&
        ingredients.cheese.map((ing, index) => {
          return (
            <div
              className="w-[350px] h-8 rounded bg-yellow-300"
              key={index}
            ></div>
          );
        })}

      {ingredients.meat.length > 0 &&
        ingredients.meat.map((ing, index) => {
          return (
            <div
              className="w-[300px] h-14 rounded bg-[rgb(121,50,6)]"
              key={index}
            ></div>
          );
        })}

      {ingredients.salad.length > 0 &&
        ingredients.salad.map((ing, index) => {
          return (
            <div
              className="w-[400px] h-5 rounded bg-green-500"
              key={index}
            ></div>
          );
        })}

      <div className="w-[300px] h-32 rounded-t-[0] rounded-b-[50%] bg-orange-400"></div>

      <Ingredients
        addIngredient={addIngredient}
        removeIngredient={removeIngredient}
      />
    </div>
  );
}
