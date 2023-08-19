// Import necessary dependencies and components.
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

// Define the main 'App' component.
function App() {
  return (
    <div className="App">
      {/* Render the 'Header' component */}
      <Header />

      {/* Render the content based on the current route */}
      <Outlet />
    </div>
  );
}

// Export the 'App' component.
export default App;
