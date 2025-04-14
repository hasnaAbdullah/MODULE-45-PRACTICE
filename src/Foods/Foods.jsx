import React, { use } from "react";

function Foods({ foodCatsPromise }) {
  const foodCats = use(foodCatsPromise).categories;
  console.log(foodCats);
  return (
    <div>
      <ol className="list-decimal list-inside">
        {foodCats.map((category) => (
          <li className="" key={category.idCategory}>
            {category.strCategory}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Foods;
