import axios from "axios";

const NewCategory = () => (
  <form
    onSubmit={(e) => {
      e.preventDefault();
      const form = e.target;
      const formData = new FormData(form as HTMLFormElement);
      const formJson = Object.fromEntries(formData.entries());
      axios.post("http://localhost:3000/categories", formJson);
    }}
  >
    <label>
      Titre de la catégorie :<br />
      <input type="text" className="text-field" name="name" />
    </label>
    <button className="button">Submit</button>
  </form>
);

export default NewCategory;
