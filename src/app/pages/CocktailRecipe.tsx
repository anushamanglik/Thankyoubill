import { useParams, Link } from "react-router";
import { cocktails } from "../cocktail-data";
import { ArrowLeft } from "lucide-react";

export default function CocktailRecipe() {
  const { id } = useParams();
  const cocktail = cocktails.find((c) => c.id === Number(id));

  if (!cocktail) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Cocktail not found
          </h1>
          <Link
            to="/"
            className="text-emerald-400 hover:text-emerald-300 underline"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Return to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-6 pt-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="text-lg">Back to all cocktails</span>
        </Link>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-8 pb-16">
        {/* Cocktail Image */}
        <div className="rounded-lg overflow-hidden shadow-2xl mb-8">
          <img
            src={cocktail.image}
            alt={cocktail.name}
            className="w-full h-96 object-cover brightness-90"
          />
        </div>

        {/* Title */}
        <h1 className="text-5xl font-bold text-white mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
          {cocktail.name}
        </h1>
        <p className="text-2xl text-emerald-300 mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
          Created by {cocktail.studentName}
        </p>

        {/* Recipe Section */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg shadow-2xl p-8 mb-8 border border-slate-700">
          <h2 className="text-3xl font-bold text-white mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Recipe
          </h2>

          {/* Ingredients */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-slate-200 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Ingredients
            </h3>
            <ul className="space-y-2">
              {cocktail.ingredients.map((ingredient, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-lg text-slate-300"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  <span className="text-emerald-400 text-2xl leading-none">•</span>
                  <span>{ingredient}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Instructions */}
          <div>
            <h3 className="text-2xl font-semibold text-slate-200 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Instructions
            </h3>
            <ol className="space-y-3">
              {cocktail.instructions.map((instruction, index) => (
                <li
                  key={index}
                  className="flex items-start gap-4 text-lg text-slate-300"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  <span className="flex-shrink-0 w-8 h-8 bg-emerald-500 text-slate-900 rounded-full flex items-center justify-center font-semibold">
                    {index + 1}
                  </span>
                  <span className="pt-1">{instruction}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Student Note */}
        <div className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 backdrop-blur-sm rounded-lg shadow-2xl p-8 border border-emerald-500/30">
          <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            A Note from {cocktail.studentName}
          </h2>
          <p className="text-lg text-slate-200 leading-relaxed italic" style={{ fontFamily: 'Inter, sans-serif' }}>
            "{cocktail.studentNote}"
          </p>
        </div>
      </div>
    </div>
  );
}
