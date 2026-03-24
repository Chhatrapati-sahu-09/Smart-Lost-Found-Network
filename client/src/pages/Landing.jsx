import { Link } from "react-router-dom";

export default function Landing() {
  const token = localStorage.getItem("token");

  return (
    <div className="bg-surface text-on-surface font-body">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-md">
        <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-[#00236f]">
            Lost & Found Network
          </h1>

          <div className="hidden md:flex gap-6">
            <a href="#" className="font-semibold border-b-2 border-[#00236f]">
              Home
            </a>
            <a href="#">Browse</a>
            <a href="#">Post Item</a>
            <a href="#">Dashboard</a>
          </div>

          <div className="flex gap-4">
            {token ? (
              <Link
                to="/dashboard"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg"
              >
                Dashboard
              </Link>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-4 py-2 rounded-lg hover:bg-gray-100"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-6 py-2 bg-[#00236f] text-white rounded-lg"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 px-8 py-24 md:py-32">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="px-3 py-1 bg-gray-200 text-sm rounded-full">
              Trusted Network
            </span>

            <h1 className="text-5xl md:text-6xl font-bold mt-6 mb-6">
              Lost Something? <br />
              Found Something? <br />
              <span className="text-green-600">We’ve Got You.</span>
            </h1>

            <p className="text-gray-600 mb-8">
              Connect lost items with their rightful owners using our smart
              system.
            </p>

            <div className="flex gap-4">
              <button className="px-6 py-3 bg-blue-700 text-white rounded-xl">
                Post Item
              </button>
              <button className="px-6 py-3 border rounded-xl">
                Browse Items
              </button>
            </div>
          </div>

          <div>
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUnfQhRA0upOwHnvcUvWKA24gRNg2hh2DyYsGQOhsRo80gbthiGikg9nY3acRJX8wUB8qxhsgzy6U93BF1l9gg5UPhUSBuqoTDqflGz8rFjEYQdMCHEtBSJilmqjeUUQNCAdOV6kpwX2oeqmEHfWVDZIr5XkOe0u_TGesY_jtM8NWsASAn_YcuIFB5rzv5170LUSM9CiSoKxxXiijUZyYwFIRZXVsFYBcCzcK3pwtgcMGFYNpQ-XfGWpb2L2XOmY6H-AlkUTjFuA"
              alt="workspace"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-100 px-8">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Smart Features</h2>
          <p className="text-gray-600">
            Designed to recover items faster & safer
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="font-bold text-xl mb-2">Smart Matching</h3>
            <p className="text-gray-600">
              AI-based matching of lost and found items.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="font-bold text-xl mb-2">Real-time Chat</h3>
            <p className="text-gray-600">
              Communicate securely with item owners.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="font-bold text-xl mb-2">Secure Claims</h3>
            <p className="text-gray-600">
              Verified process to ensure rightful ownership.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center bg-blue-900 text-white px-8">
        <h2 className="text-4xl font-bold mb-4">
          Ready to find your lost items?
        </h2>
        <p className="mb-8">Join now and reconnect with your belongings.</p>

        <div className="flex justify-center gap-4">
          <Link to="/register" className="px-6 py-3 bg-green-500 rounded-xl">
            Join Now
          </Link>
          <button className="px-6 py-3 border border-white rounded-xl">
            Learn More
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center bg-gray-50">
        <p className="text-gray-600">
          © 2026 Lost & Found Network. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
