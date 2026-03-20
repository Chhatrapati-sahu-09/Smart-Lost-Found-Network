import { useEffect, useState } from "react";
import API from "../services/api";
import ItemCard from "../components/ItemCard";
import Navbar from "../components/Navbar";

export default function Dashboard() {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  const toggleFav = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );
  };

  useEffect(() => {
    API.get("/items")
      .then((res) => setItems(res.data))
      .finally(() => setLoading(false));
  }, []);

  const filteredItems = items.filter((item) => {
    const matchesType = filter === "all" || item.type === filter;
    const matchesSearch = item.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesLocation =
      !location || item.location?.address?.includes(location);
    return matchesType && matchesSearch && matchesLocation;
  });

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
        <input
          placeholder="Search items..."
          className="border p-2 w-full mb-4"
          onChange={(e) => setSearch(e.target.value)}
        />

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

        <select
          className="border p-2 mb-4"
          onChange={(e) => setLocation(e.target.value)}
        >
          <option value="">All Locations</option>
          <option value="Delhi">Delhi</option>
          <option value="Gwalior">Gwalior</option>
        </select>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {filteredItems.map((item) => (
            <ItemCard
              key={item._id}
              item={item}
              isFavorite={favorites.includes(item._id)}
              onToggleFavorite={toggleFav}
            />
          ))}
        </div>
      </div>
    </>
  );
}
