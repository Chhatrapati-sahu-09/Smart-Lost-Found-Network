import { useState } from "react";
import API from "../services/api";

export default function PostItem() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    type: "lost",
    address: "",
  });
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.keys(form).forEach((key) => data.append(key, form[key]));
    if (image) data.append("image", image);

    await API.post("/items", data);
    alert("Item posted!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Title"
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />

      <textarea
        placeholder="Description"
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />

      <select onChange={(e) => setForm({ ...form, type: e.target.value })}>
        <option value="lost">Lost</option>
        <option value="found">Found</option>
      </select>

      <input
        placeholder="Location"
        onChange={(e) => setForm({ ...form, address: e.target.value })}
      />

      <input type="file" onChange={(e) => setImage(e.target.files[0])} />

      <button>Post Item</button>
    </form>
  );
}
