const NewAd = () => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form as HTMLFormElement);
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);
      }}
    >
      <label>
        Titre de l&apos;annonce :
        <br />
        <input className="text-field" name="titre" />
      </label>
      <br />
      <label>
        Description :
        <br />
        <input className="text-field" name="description" />
      </label>
      <br />
      <label>
        Auteur :
        <br />
        <input className="text-field" name="author" />
      </label>
      <br />
      <label>
        Prix :
        <br />
        <input type="number" className="text-field" name="price" />
      </label>
      <br />
      <label>
        Image :
        <br />
        <input className="text-field" name="img_url" />
      </label>
      <br />
      <label>
        Ville :
        <br />
        <input className="text-field" name="city" />
      </label>
      <br />
      <label>
        Date de creation :
        <br />
        <input type="date" className="text-field" name="creation_date" />
      </label>{" "}
      <button className="button">Submit</button>
    </form>
  );
};
export default NewAd;
