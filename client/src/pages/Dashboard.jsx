import { useEffect, useState } from "react";
import API from "../services/api";
import ItemCard from "../components/ItemCard";
import Navbar from "../components/Navbar";

export default function Dashboard() {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.get("/items")
      .then((res) => setItems(res.data))
      .finally(() => setLoading(false));
  }, []);

  const filteredItems =
    filter === "all" ? items : items.filter((item) => item.type === filter);

  if (loading) {
    return (
      <>
        <Navbar />
        <p className="text-center mt-10">Loading items...</p>
      </>
    );
  }

  if (!items.length) {
    return (
      <>
        <Navbar />
        <p className="text-center mt-10">No items found 🚫</p>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="p-4">
        <div className="mb-4 space-x-2">
          <button onClick={() => setFilter("all")} className="btn">
            All
          </button>
          <button onClick={() => setFilter("lost")} className="btn">
            Lost
          </button>
          <button onClick={() => setFilter("found")} className="btn">
            Found
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {filteredItems.map((item) => (
            <ItemCard key={item._id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}
