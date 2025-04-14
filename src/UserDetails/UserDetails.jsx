import React from "react";
import { useLoaderData } from "react-router";

function UserDetails() {
  const userDetails = useLoaderData();
  const { name, email, phone, website } = userDetails;
  console.log(userDetails);
  return (
    <div className="w-80 h-40 border-2 border-amber-500 p-4 rounded-md">
      <h2>Full Name: {name}</h2>
      <h2>Website: {website}</h2>
      <h2>Phone: {phone}</h2>
      <h2>E-mail: {email}</h2>
    </div>
  );
}

export default UserDetails;
