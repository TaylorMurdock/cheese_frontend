// Import necessary components and hooks.
import { useLoaderData, Form } from "react-router-dom";

// Define the 'Show' component.
function Show(props) {
  // Load cheese data using the 'useLoaderData' hook.
  const cheese = useLoaderData();
  console.log(cheese);

  // Display cheese details, update form, and delete form.
  return (
    <div className="showpage">
      <h1>{cheese.name}</h1>
      <h2>{cheese.countryOfOrigin}</h2>
      <img src={cheese.image} alt={cheese.name} />

      <h2>Update {cheese.name}</h2>
      <Form action={`/update/${cheese._id}`} method="post">
        {/* Input fields with cheese data */}
        <input
          type="text"
          name="name"
          placeholder="cheese name"
          defaultValue={cheese.name}
        />
        <input
          type="text"
          name="countryOfOrigin"
          placeholder="Cheese's Place of Origin"
          defaultValue={cheese.countryOfOrigin}
        />
        <input
          type="text"
          name="image"
          placeholder="cheese image"
          defaultValue={cheese.image}
        />
        <input type="submit" value="Update cheese" />
      </Form>

      <h2>Delete cheese</h2>
      <Form action={`/delete/${cheese._id}`} method="post">
        <input type="submit" value="Delete cheese" />
      </Form>
    </div>
  );
}

// Export the 'Show' component.
export default Show;
