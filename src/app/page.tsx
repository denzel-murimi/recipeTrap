import Link from "next/link";
import { cakes } from "./data";
import { ChefHat } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-50">
      {/* Header */}
      <header className="bg-white border-b border-neutral-200 py-6 px-10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-orange-500 rounded-lg text-white">
            <ChefHat size={24} />
          </div>
          <span className="font-bold text-xl tracking-tight text-neutral-900">DevBaker</span>
        </div>
        <nav className="text-sm font-medium text-neutral-500">
          Portfolio v2.4
        </nav>
      </header>

      {/* Gallery */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-4">
            The Collection
          </h1>
          <p className="text-neutral-500 max-w-lg mx-auto">
            A curated selection of my recent baking experiments. Click to view the full technical breakdown (recipes).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cakes.map((cake) => (
            <Link key={cake.id} href={`/recipe/${cake.slug}`} className="group cursor-pointer">
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-neutral-100">
                <div className="h-64 overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10" />
                  <img
                    src={cake.image}
                    alt={cake.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl text-neutral-900 mb-2 group-hover:text-orange-600 transition-colors">
                    {cake.name}
                  </h3>
                  <p className="text-neutral-500 text-sm line-clamp-2">
                    {cake.description}
                  </p>
                  <div className="mt-4 flex items-center text-sm font-medium text-orange-500 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
                    View Recipe &rarr;
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}