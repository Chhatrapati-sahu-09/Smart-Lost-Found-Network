import { useNavigate } from "react-router-dom";

export default function ItemCard({ item, isFavorite, onToggleFavorite }) {
  const navigate = useNavigate();

  return (
    <div className="border rounded-lg p-3 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-40 object-cover rounded"
      />

      <h3 className="text-lg font-bold mt-2">{item.title}</h3>

      <p className="text-sm text-gray-600">{item.description}</p>

      <div className="flex items-center gap-2 mt-2">
        <span
          className={`px-3 py-1 text-xs font-semibold rounded-full text-white ${
            item.type === "lost" ? "bg-red-500" : "bg-green-600"
          }`}
        >
          {item.type === "lost" ? "LOST" : "FOUND"}
        </span>
      </div>

      <p className="text-xs text-gray-500">📍 {item.location?.address}</p>

      <p className="text-xs text-gray-400">
        {new Date(item.date).toLocaleDateString()}
      </p>

      <div className="flex gap-2 mt-3">
        <button className="flex-1" onClick={() => onToggleFavorite(item._id)}>
          {isFavorite ? "⭐" : "☆"}
        </button>
        <button
          onClick={() => navigate(`/matches/${item._id}`)}
          className="flex-1 bg-blue-500 text-white p-2 rounded text-sm font-semibold hover:bg-blue-600"
        >
          View Matches
        </button>
      </div>
    </div>
  );
}
