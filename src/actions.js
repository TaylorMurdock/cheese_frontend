// This file contains functions related to CRUD actions on cheese items.

// Import the baseUrl for API requests.
import { baseUrl } from "./baseUrl";

// Import the 'redirect' function from the 'react-router-dom'.
import { redirect } from "react-router-dom";

// Define a function for creating a new cheese item.
export const createAction = async ({ request }) => {
  // Get form data from the request.
  const formData = await request.formData();

  // Create a new cheese object from form data.
  const newCheese = {
    name: formData.get("name"),
    countryOfOrigin: formData.get("countryOfOrigin"),
    image: formData.get("image"),
  };

  // Send a POST request to create the new cheese.
  await fetch(`${baseUrl}/cheese`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newCheese),
  });

  // Redirect to the main page.
  return redirect("/");
};

// Define a function for updating a cheese item.
export const updateAction = async ({ request, params }) => {
  // Get the cheese ID from the parameters.
  const id = params.id;

  // Get form data from the request.
  const formData = await request.formData();

  // Create an updated cheese object from form data.
  const updatedCheese = {
    name: formData.get("name"),
    countryOfOrigin: formData.get("countryOfOrigin"),
    image: formData.get("image"),
  };

  // Send a PUT request to update the cheese.
  const freshCheese = await fetch(`${baseUrl}/cheese/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedCheese),
  });
  console.log(freshCheese);
  // Redirect to the updated cheese's page.
  return redirect(`/${id}`);
};

// Define a function for deleting a cheese item.
export const deleteAction = async ({ params }) => {
  // Get the cheese ID from the parameters.
  const id = params.id;

  // Send a DELETE request to delete the cheese.
  await fetch(`${baseUrl}/cheese/${id}`, {
    method: "DELETE",
  });

  // Redirect to the main page.
  return redirect("/");
};
