// This file defines the 'Header' component for displaying a header with a link to the main page.

// Import necessary component.
import { Link } from "react-router-dom";

// Define the 'Header' component.
const Header = () => {
  return (
    <div className="Header">
      {/* Link to the main page */}
      <Link to="/">
        <div>Cheese App</div>
      </Link>
    </div>
  );
};

// Export the 'Header' component.
export default Header;
