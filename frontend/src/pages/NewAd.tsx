import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
type Category = { id: number; name: string };
const NewAd = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [tags, setTags] = useState<
    { id: number; name: string; checked: boolean }[]
  >([]);
  useEffect(() => {
    const fetchCategories = async () => {
      const result = await axios.get<Category[]>(
        "http://localhost:3000/categories"
      );
      setCategories(result.data);
    };
    fetchCategories();
    const fetchTags = async () => {
      const tagsResult = await axios.get<{ id: number; name: string }[]>(
        "http://localhost:3000/tags"
      );
      setTags(tagsResult.data.map((el) => ({ ...el, checked: false })));
    };
    fetchTags();
  }, []);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form as HTMLFormElement);
        const formJson = Object.fromEntries(formData.entries());
        const dataForBackend = Object.assign(formJson, {
          tags: tags
            .filter((el) => el.checked === true)
            .map((el) => {
              return { id: el.id };
            }),
        });
        axios.post("http://localhost:3000/ads", dataForBackend);
      }}
    >
      <label>
        Titre de l&apos;annonce :
        <br />
        <input className="text-field" name="title" />
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
      </label>
      <br />
      <select name="category">
        {categories.map((el) => (
          <option value={el.id} key={el.id}>
            {el.name}
          </option>
        ))}
      </select>
      <br />
      {tags.map((tag) => (
        <React.Fragment key={tag.id}>
          <label>
            {tag.name}
            <input
              type="checkbox"
              checked={tag.checked}
              onChange={() => {
                setTags(
                  tags.map((prevStateTag) => {
                    if (prevStateTag.id === tag.id) {
                      return {
                        ...prevStateTag,
                        checked: !prevStateTag.checked,
                      };
                    } else {
                      return prevStateTag;
                    }
                  })
                );
              }}
            />
          </label>
          <br />
        </React.Fragment>
      ))}
      <button className="button">Submit</button>
    </form>
  );
};
export default NewAd;
