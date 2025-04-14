import React from "react";
import { Link } from "react-router";

function User({ user }) {
  return (
    <li className="mt-4">
      {user["name"]}{" "}
      <Link
        to={`/users/${user.id}`}
        className="ml-4 border-2 border-amber-500 px-4 py-1 rounded-md bg-white text-black font-semibold cursor-pointer"
      >
        Details
      </Link>
    </li>
  );
}

export default User;
