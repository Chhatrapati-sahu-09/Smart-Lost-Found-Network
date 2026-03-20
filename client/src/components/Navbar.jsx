import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex justify-between p-4 bg-black text-white">
      <h1 className="font-bold text-xl">Lost&Found</h1>

      <div className="space-x-4">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/post">Post Item</Link>
      </div>
    </div>
  );
}
