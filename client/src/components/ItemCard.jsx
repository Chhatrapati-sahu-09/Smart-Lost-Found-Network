export default function ItemCard({ item }) {
  return (
    <div className="border rounded-lg p-3 shadow-md">
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-40 object-cover rounded"
      />

      <h3 className="text-lg font-bold mt-2">{item.title}</h3>

      <p className="text-sm text-gray-600">{item.description}</p>

      <p
        className={`mt-2 font-semibold ${
          item.type === "lost" ? "text-red-500" : "text-green-600"
        }`}
      >
        {item.type.toUpperCase()}
      </p>

      <p className="text-xs text-gray-500">📍 {item.location?.address}</p>
    </div>
  );
}
