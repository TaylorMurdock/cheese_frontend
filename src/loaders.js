// This file contains functions for loading data from the server.

// Import the baseUrl for API requests.
import { baseUrl } from "./baseUrl";

// Define a function to load a list of cheese items.
export const cheeseLoader = async () => {
  // Fetch the list of cheese items from the server.
  const response = await fetch(`${baseUrl}/cheese`);
  const cheese = await response.json();
  return cheese;
};

// Define a function to load a single cheese item.
export const oneCheeseLoader = async ({ params }) => {
  // Get the ID of the cheese item from the parameters.
  const id = params.id;

  // Fetch the specific cheese item using its ID from the server.
  const response = await fetch(`${baseUrl}/cheese/${id}`);
  const cheese = await response.json();
  return cheese;
};
