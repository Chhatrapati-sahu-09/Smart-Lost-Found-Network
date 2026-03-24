import { Link } from "react-router-dom";
import {
  CheckCircle,
  Sparkles,
  MessageSquare,
  Shield,
  Check,
  Share2,
  Globe,
} from "lucide-react";

// Local Images - Make sure to place your images in the client/src/images folder

export default function Landing() {
  const token = localStorage.getItem("token");

  return (
    <div className="bg-surface text-on-surface antialiased selection:bg-primary-fixed selection:text-on-primary-fixed">
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-[#141b2b]/80 backdrop-blur-md shadow-[0_32px_64px_-12px_rgba(182,196,255,0.06)] font-['Inter'] antialiased">
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between relative">
          <div className="text-xl font-bold tracking-tight text-[#00236f] dark:text-[#f9f9ff]">
            Lost & Found Network
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a
              className="text-[#00236f] dark:text-[#f9f9ff] font-semibold border-b-2 border-[#00236f] dark:border-[#b6c4ff] pb-1 transition-all"
              href="#"
            >
              Home
            </a>
            <a
              className="text-[#444651] dark:text-[#c5c5d3] hover:text-[#00236f] dark:hover:text-[#f9f9ff] transition-colors"
              href="#"
            >
              Browse
            </a>
            <a
              className="text-[#444651] dark:text-[#c5c5d3] hover:text-[#00236f] dark:hover:text-[#f9f9ff] transition-colors"
              href="#"
            >
              Post Item
            </a>
            <a
              className="text-[#444651] dark:text-[#c5c5d3] hover:text-[#00236f] dark:hover:text-[#f9f9ff] transition-colors"
              href="#"
            >
              Dashboard
            </a>
          </div>
          <div className="flex items-center gap-4">
            {token ? (
              <Link
                to="/dashboard"
                className="bg-primary text-on-primary px-6 py-2 rounded-xl font-medium shadow-sm hover:opacity-90 transition-all active:scale-95"
              >
                Dashboard
              </Link>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-[#444651] dark:text-[#c5c5d3] hover:bg-[#f1f3ff] dark:hover:bg-[#1e3a8a]/20 px-4 py-2 rounded-lg transition-all active:scale-95"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-primary text-on-primary px-6 py-2 rounded-xl font-medium shadow-sm hover:opacity-90 transition-all active:scale-95"
                >
                  Register
                </Link>
              </>
            )}
          </div>
          <div className="bg-[#f1f3ff] dark:bg-[#1e3a8a]/10 h-[1px] w-full absolute bottom-0 left-0"></div>
        </div>
      </nav>

      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative px-8 py-24 md:py-32 overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="z-10">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high text-primary font-medium text-xs tracking-wider uppercase mb-6">
                <span className="w-2 h-2 rounded-full bg-secondary"></span>
                Trusted Network
              </span>
              <h1 className="text-5xl md:text-7xl font-extrabold text-primary leading-[1.1] tracking-tight mb-8">
                Lost Something? <br />
                Found Something? <br />
                <span className="text-secondary">We've Got You.</span>
              </h1>
              <p className="text-lg text-on-surface-variant max-w-lg mb-10 leading-relaxed">
                The definitive curator for reclaiming your peace of mind. Our
                high-precision smart matching engine connects lost valuables
                with their finders in minutes, not days.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to={token ? "/post" : "/login"}
                  className="px-8 py-4 bg-primary-container text-on-primary rounded-xl text-lg font-semibold hover:opacity-95 transition-all shadow-lg active:scale-95"
                >
                  Post Item
                </Link>
                <Link
                  to="/dashboard"
                  className="px-8 py-4 bg-surface-container-lowest text-primary border border-primary-fixed rounded-xl text-lg font-semibold hover:bg-surface-container-low transition-all active:scale-95"
                >
                  Browse Items
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary-fixed-dim/20 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-secondary-fixed-dim/20 rounded-full blur-3xl -z-10"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-[0_32px_64px_-12px_rgba(0,35,111,0.12)] bg-surface-container-lowest p-4">
                <img
                  alt="Professional Workspace"
                  className="rounded-2xl w-full object-cover aspect-[4/3]"
                  src="https://via.placeholder.com/800x600"
                />
                <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center gap-4 border border-white/50">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-white">
                    <CheckCircle
                      className="h-6 w-6"
                      fill="white"
                      stroke="none"
                    />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-on-surface uppercase tracking-widest">
                      Match Found
                    </p>
                    <p className="text-sm text-on-surface-variant">
                      MacBook Pro Silver
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Bento Grid */}
        <section className="py-24 bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex flex-col items-center mb-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Precision Engineering for Peace of Mind
              </h2>
              <p className="text-on-surface-variant max-w-2xl">
                Advanced recovery tools designed to handle your claims with the
                security of a vault and the speed of a curator.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="md:col-span-2 bg-surface-container-lowest p-10 rounded-[2rem] flex flex-col md:flex-row items-center gap-12 group transition-all hover:shadow-xl">
                <div className="flex-1">
                  <div className="w-14 h-14 rounded-2xl bg-primary-fixed mb-6 flex items-center justify-center text-primary">
                    <Sparkles className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    Smart Matching Engine
                  </h3>
                  <p className="text-on-surface-variant leading-relaxed">
                    Our AI-powered algorithm analyzes visual features, location
                    telemetry, and timeframes to cross-reference every lost
                    report against found items instantly.
                  </p>
                </div>
                <div className="flex-1 w-full aspect-video rounded-2xl overflow-hidden">
                  <img
                    alt="Data analytics"
                    className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                    src="https://via.placeholder.com/400x225"
                  />
                </div>
              </div>
              {/* Feature 2 */}
              <div className="bg-primary text-on-primary p-10 rounded-[2rem] flex flex-col justify-between group transition-all hover:bg-primary-container">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-white/10 mb-6 flex items-center justify-center">
                    <MessageSquare className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Real-time Chat</h3>
                  <p className="text-on-primary/80 leading-relaxed">
                    Coordinate safe handovers through our end-to-end encrypted
                    messaging platform. No personal info shared until you're
                    ready.
                  </p>
                </div>
                <div className="mt-8 flex justify-end">
                  <Shield className="h-12 w-12 opacity-20 group-hover:opacity-50 transition-all" />
                </div>
              </div>
              {/* Feature 3 */}
              <div className="bg-secondary-container text-on-secondary-container p-10 rounded-[2rem] md:col-span-3 flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-4">
                    Secure Claim System
                  </h3>
                  <p className="text-on-secondary-container/80 text-lg mb-8 leading-relaxed">
                    Every claim undergoes a 3-step verification process.
                    Multi-factor ownership proof ensures items only go back to
                    their rightful guardians.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 font-semibold">
                      <Check className="h-6 w-6 text-secondary" />
                      Identity Verification
                    </li>
                    <li className="flex items-center gap-3 font-semibold">
                      <Check className="h-6 w-6 text-secondary" />
                      Visual Proof Upload
                    </li>
                    <li className="flex items-center gap-3 font-semibold">
                      <Check className="h-6 w-6 text-secondary" />
                      Mutual Confirmation
                    </li>
                  </ul>
                </div>
                <div className="flex-1 w-full">
                  <div className="bg-white/30 backdrop-blur-xl p-6 rounded-3xl border border-white/20">
                    <div className="flex justify-between items-center mb-6">
                      <span className="label-md font-bold uppercase tracking-widest opacity-60">
                        Claim Status
                      </span>
                      <span className="bg-secondary text-white px-3 py-1 rounded-full text-xs font-bold uppercase">
                        Authorized
                      </span>
                    </div>
                    <div className="space-y-4">
                      <div className="h-12 bg-white/40 rounded-xl flex items-center px-4">
                        <div className="w-8 h-8 rounded-full bg-secondary/20 mr-4"></div>
                        <div className="h-2 w-32 bg-secondary/20 rounded-full"></div>
                      </div>
                      <div className="h-12 bg-white/40 rounded-xl flex items-center px-4">
                        <div className="w-8 h-8 rounded-full bg-secondary/20 mr-4"></div>
                        <div className="h-2 w-48 bg-secondary/20 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works (Asymmetric Layout) */}
        <section className="py-32 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-24">
              <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-6">
                The Curator's Journey
              </h2>
              <p className="text-on-surface-variant text-xl">
                A seamless three-step recovery process.
              </p>
            </div>
            <div className="relative">
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row gap-16 items-start mb-32 relative">
                <div className="md:w-1/3">
                  <div className="text-[8rem] font-black text-surface-container-high leading-none -mb-8">
                    01
                  </div>
                  <h3 className="text-3xl font-bold text-primary mb-4">
                    Post your item
                  </h3>
                  <p className="text-on-surface-variant leading-relaxed">
                    Whether you've lost a vintage timepiece or found a set of
                    keys, detailing the specifics on our platform takes less
                    than 60 seconds.
                  </p>
                </div>
                <div className="md:w-2/3 h-80 bg-surface-container rounded-3xl overflow-hidden">
                  <img
                    alt="Posting an item"
                    className="w-full h-full object-cover"
                    src="https://via.placeholder.com/800x320"
                  />
                </div>
              </div>
              {/* Step 2 */}
              <div className="flex flex-col md:flex-row-reverse gap-16 items-start mb-32 relative">
                <div className="md:w-1/3">
                  <div className="text-[8rem] font-black text-surface-container-high leading-none -mb-8">
                    02
                  </div>
                  <h3 className="text-3xl font-bold text-primary mb-4">
                    System finds matches
                  </h3>
                  <p className="text-on-surface-variant leading-relaxed">
                    Our curation engine goes to work immediately, scanning
                    thousands of entries to find the perfect pairing based on
                    your criteria.
                  </p>
                </div>
                <div className="md:w-2/3 h-80 bg-surface-container rounded-3xl overflow-hidden">
                  <img
                    alt="Matching process"
                    className="w-full h-full object-cover"
                    src="https://via.placeholder.com/800x320"
                  />
                </div>
              </div>
              {/* Step 3 */}
              <div className="flex flex-col md:flex-row gap-16 items-start relative">
                <div className="md:w-1/3">
                  <div className="text-[8rem] font-black text-surface-container-high leading-none -mb-8">
                    03
                  </div>
                  <h3 className="text-3xl font-bold text-primary mb-4">
                    Connect &amp; resolve
                  </h3>
                  <p className="text-on-surface-variant leading-relaxed">
                    Once a match is confirmed, use our secure platform to
                    arrange a return. We provide guidance on safe public meet-up
                    points.
                  </p>
                </div>
                <div className="md:w-2/3 h-80 bg-surface-container rounded-3xl overflow-hidden">
                  <img
                    alt="Meeting and handshake"
                    className="w-full h-full object-cover"
                    src="https://via.placeholder.com/800x320"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-primary-container rounded-[3rem] p-12 md:p-24 text-center text-on-primary overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-container to-secondary/20 opacity-50"></div>
              <div className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-extrabold mb-8">
                  Ready to find what's missing?
                </h2>
                <p className="text-xl text-on-primary-container max-w-2xl mx-auto mb-12">
                  Join thousands of people reuniting with their belongings
                  daily. Start your recovery journey now.
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                  <Link
                    to={token ? "/post" : "/register"}
                    className="bg-secondary-container text-on-secondary-container px-10 py-5 rounded-2xl text-xl font-bold hover:scale-105 transition-all shadow-xl"
                  >
                    Join the Network
                  </Link>
                  <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-2xl text-xl font-bold hover:bg-white/20 transition-all">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-[#f1f3ff] dark:border-[#1e3a8a]/20 bg-[#f9f9ff] dark:bg-[#141b2b]">
        <div className="max-w-7xl mx-auto px-8 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-lg font-bold text-[#00236f] dark:text-[#f9f9ff]">
              Lost &amp; Found Network
            </span>
            <p className="text-sm font-['Inter'] text-[#444651] dark:text-[#c5c5d3]">
              © 2024 Lost &amp; Found Network. All rights reserved.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            <a
              className="text-sm font-['Inter'] text-[#444651] dark:text-[#c5c5d3] hover:text-[#00236f] dark:hover:text-[#f9f9ff] transition-colors"
              href="#"
            >
              Privacy Policy
            </a>
            <a
              className="text-sm font-['Inter'] text-[#444651] dark:text-[#c5c5d3] hover:text-[#00236f] dark:hover:text-[#f9f9ff] transition-colors"
              href="#"
            >
              Terms of Service
            </a>
            <a
              className="text-sm font-['Inter'] text-[#444651] dark:text-[#c5c5d3] hover:text-[#00236f] dark:hover:text-[#f9f9ff] transition-colors"
              href="#"
            >
              Help Center
            </a>
            <a
              className="text-sm font-['Inter'] text-[#444651] dark:text-[#c5c5d3] hover:text-[#00236f] dark:hover:text-[#f9f9ff] transition-colors"
              href="#"
            >
              Contact Support
            </a>
          </div>
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-primary hover:bg-primary-fixed transition-all cursor-pointer">
              <Share2 className="h-5 w-5" />
            </div>
            <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-primary hover:bg-primary-fixed transition-all cursor-pointer">
              <Globe className="h-5 w-5" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
