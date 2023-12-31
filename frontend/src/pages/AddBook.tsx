import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";

type FormData = {
  title: string;
  author: string;
  publishYear: string;
};

const AddBook = () => {
  const [formData, setFormData] = useState<FormData>({
    title: "",
    author: "",
    publishYear: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await axios
      .post("http://localhost:5555/books", formData)
      .then((res) => console.log(res.data))
      .catch((error) => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add Book</h1>
      <input
        id="title"
        name="title"
        type="text"
        placeholder="title"
        onChange={handleChange}
      />
      <input
        id="author"
        name="author"
        type="text"
        placeholder="author"
        onChange={handleChange}
      />
      <input
        id="publishYear"
        name="publishYear"
        type="text"
        placeholder="publishYear"
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  );
};

export default AddBook;
