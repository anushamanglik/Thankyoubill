import { Link } from "react-router";
import { cocktails } from "../cocktail-data";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-6xl font-bold text-center mb-6 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
          Bill's Cocktail Book
        </h1>

        {/* Class Note */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg shadow-2xl p-8 mb-12 border border-slate-700">
          <p className="text-xl text-slate-200 leading-relaxed text-center mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
            Dear Bill,
          </p>
          <p className="text-lg text-slate-300 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
            As we raise our glasses to celebrate this milestone, we wanted to create something special for you. We've all chosen a cocktail that we love, or one that reminds us of you, or represents a moment we've had together. This collection is a gift for the mentorship and guidance you've given us through the last 2 years.
          </p>
          <p className="text-lg text-slate-300 leading-relaxed mt-4" style={{ fontFamily: 'Inter, sans-serif' }}>
            You've been more than just a professor to us, and our accomplishment is yours as well. Thank you, and here's to you!
          </p>
          <p className="text-xl text-slate-200 leading-relaxed text-center mt-6" style={{ fontFamily: 'Inter, sans-serif' }}>
            With love and gratitude,<br />
            <span className="font-semibold">The MS/MBA Biotech Class of 2026</span>
          </p>
        </div>

        {/* Cocktail Grid */}
        <div className="space-y-6">
          {cocktails.map((cocktail) => (
            <Link
              key={cocktail.id}
              to={`/cocktail/${cocktail.id}`}
              className="block group"
            >
              <div className="relative overflow-hidden rounded-lg shadow-xl transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/20 hover:scale-[1.02]">
                <img
                  src={cocktail.image}
                  alt={cocktail.name}
                  className="w-full h-80 object-cover brightness-90 group-hover:brightness-100 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent flex items-end">
                  <div className="p-6 w-full">
                    <h2 className="text-3xl font-bold text-white mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {cocktail.name}
                    </h2>
                    <p className="text-lg text-emerald-300" style={{ fontFamily: 'Inter, sans-serif' }}>
                      by {cocktail.studentName}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
