import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";
import Navbar from "../components/Navbar";
import LoadingState from "../components/LoadingState";

export default function Matches() {
  const { id } = useParams();
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.get(`/match/${id}`)
      .then((res) => setMatches(res.data))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <>
        <Navbar />
        <LoadingState message="Finding matches..." />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Potential Matches</h2>

        {matches.length ? (
          <div className="space-y-4">
            {matches.map((m) => (
              <div
                key={m.item._id}
                className="border-l-4 border-blue-500 p-4 bg-gray-50 rounded"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold">{m.item.title}</h3>
                  <div className="flex items-center gap-2">
                    {m.score > 60 && (
                      <span className="text-green-600 font-bold">
                        Best Match
                      </span>
                    )}
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      Match: {m.score}%
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-700 mb-2">
                  {m.item.description}
                </p>
                <p className="text-xs text-gray-500">
                  📍 {m.item.location?.address}
                </p>
                <p className="text-xs text-gray-400 mb-3">
                  Posted: {new Date(m.item.date).toLocaleDateString()}
                </p>

                {m.item.image && (
                  <img
                    src={m.item.image}
                    alt={m.item.title}
                    className="w-full max-h-64 object-cover rounded mb-3"
                  />
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 mt-8">
            No matches found. Try adjusting your item details.
          </p>
        )}
      </div>
    </>
  );
}
