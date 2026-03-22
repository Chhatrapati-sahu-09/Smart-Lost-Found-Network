import { useEffect, useState } from "react";
import API from "../services/api";
import ItemCard from "../components/ItemCard";
import Navbar from "../components/Navbar";
import LoadingState from "../components/LoadingState";

export default function Dashboard() {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sort, setSort] = useState("latest");

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

  const filteredItems = items
    .filter((item) => {
      const matchesType = filter === "all" || item.type === filter;
      const matchesSearch = item.title
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchesLocation =
        !location || item.location?.address?.includes(location);
      return matchesType && matchesSearch && matchesLocation;
    })
    .sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return sort === "latest" ? dateB - dateA : dateA - dateB;
    });

  if (loading) {
    return (
      <>
        <Navbar />
        <LoadingState message="Loading items..." />
      </>
    );
  }

  if (!items.length) {
    return (
      <>
        <Navbar />
        <p className="text-center mt-10 text-gray-500">
          No items yet. Start by posting one
        </p>
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

        <div className="flex gap-6 mb-4 bg-gray-100 p-3 rounded">
          <div className="text-sm font-semibold">
            Total: <span className="text-blue-600">{items.length}</span>
          </div>
          <div className="text-sm font-semibold">
            Lost:{" "}
            <span className="text-red-600">
              {items.filter((i) => i.type === "lost").length}
            </span>
          </div>
          <div className="text-sm font-semibold">
            Found:{" "}
            <span className="text-green-600">
              {items.filter((i) => i.type === "found").length}
            </span>
          </div>
        </div>

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

        <select
          className="border p-2 mb-4 ml-2"
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="latest">Latest First</option>
          <option value="oldest">Oldest First</option>
        </select>

        {filteredItems.length ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredItems.map((item) => (
              <div key={item._id}>
                {item.matchFound && (
                  <p className="text-green-600 font-semibold mb-2">
                    Match Found!
                  </p>
                )}
                <ItemCard
                  item={item}
                  isFavorite={favorites.includes(item._id)}
                  onToggleFavorite={toggleFav}
                />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center mt-8 text-gray-600">
            No matching items found. Try adjusting your filters.
          </p>
        )}
      </div>
    </>
  );
}
