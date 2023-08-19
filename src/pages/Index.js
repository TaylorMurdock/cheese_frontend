// This file defines the 'Index' component for displaying a list of cheese items and a form to create new cheese items.

// Import necessary components and hooks.
import { Link, useLoaderData, Form } from "react-router-dom";

// Define the 'Index' component.
function Index(props) {
  // Load cheese data using the 'useLoaderData' hook.
  const cheese = useLoaderData();
  console.log(cheese);

  // Display the 'Index' component's content.
  return (
    <div className="indexpage">
      {/* Form to create a new cheese item */}
      <div className="newcheeseform">
        <h2>Create one Cheese</h2>
        <Form action="/create" method="post">
          <input type="text" name="name" placeholder="Cheese Name" />
          <input
            type="text"
            name="countryOfOrigin"
            placeholder="Cheese place of origin"
          />
          <input type="text" name="image" placeholder="Cheese's Image" />
          <input type="submit" value="Create Cheese" />
        </Form>
      </div>

      {/* Display a list of cheese items */}
      <div className="showcheese">
        {cheese.map((cheese, index) => {
          return (
            <div key={cheese._id} className="cheese">
              {/* Link to the detailed page of each cheese */}
              <Link to={`/${cheese._id}`}>
                <h3>{cheese.name}</h3>
              </Link>
              <img src={cheese.image} alt={cheese.name} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Export the 'Index' component.
export default Index;
