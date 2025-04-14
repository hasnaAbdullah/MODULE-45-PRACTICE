import User from "../User/User";
import React from "react";
import { useLoaderData } from "react-router";

function Users() {
  const usersData = useLoaderData();
  // console.log(usersData);
  return (
    <div>
      <h2>this is users</h2>
      <ol className="list-decimal list-inside">
        {usersData.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </ol>
    </div>
  );
}

export default Users;
