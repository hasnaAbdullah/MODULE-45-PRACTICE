import React, { useEffect, useState } from "react";

function FoodIngradients() {
  const [ingradients, setIngradients] = useState([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast")
      .then((res) => res.json())
      .then((data) => setIngradients(data.meals));
  }, [setIngradients]);
  return (
    <div>
      <div className="flex flex-wrap gap-4 ">
        {ingradients.length === 0
          ? null
          : ingradients.map((ing) => (
              <div>
                <img
                  className="w-16 h-16 object-cover"
                  src={ing.strMealThumb}
                  alt=""
                />
                <h2 className="text-xs w-24 ">{ing.strMeal} </h2>
              </div>
            ))}
      </div>
    </div>
  );
}

export default FoodIngradients;
