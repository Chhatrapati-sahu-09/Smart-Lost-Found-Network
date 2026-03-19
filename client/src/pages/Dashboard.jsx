import { useEffect, useState } from "react";
import API from "../services/api";

export default function Dashboard() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    API.get("/items").then((res) => setItems(res.data));
  }, []);

  return (
    <div>
      {items.map((item) => (
        <div key={item._id}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <p>{item.type}</p>
          <img src={item.image} width="100" />
        </div>
      ))}
    </div>
  );
}
