import { cakes } from "@/app/data";
import ValentineTrap from "@/app/components/ValentinesTrap";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

// NOTE: In Next.js 15, params is a Promise, so we type it as Promise<{ slug: string }>
export default async function RecipePage({ params }: { params: Promise<{ slug: string }> }) {
  
  // 1. Await the params to get the actual slug
  const { slug } = await params;
  
  // 2. Find the cake using the awaited slug
  const cake = cakes.find((c) => c.slug === slug);

  // 3. 404 Handling
  if (!cake) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
        <h1 className="text-2xl font-mono text-red-500 mb-2">Error 404: Cake Not Found</h1>
        <p className="text-zinc-500">
          Debug info: Searched for slug <strong>"{slug}"</strong>
        </p>
        <Link href="/" className="mt-8 text-blue-400 hover:underline">
          Return Home
        </Link>
      </div>
    );
  }

  // --- THE LOGIC SWITCH ---
  if (cake.isTrap) {
    return <ValentineTrap />;
  }

  // --- STANDARD RECIPE UI ---
  return (
    <main className="min-h-screen bg-stone-50 p-6 md:p-12">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center text-stone-500 hover:text-stone-800 mb-6">
           <ArrowLeft className="w-4 h-4 mr-2"/> Back to Gallery
        </Link>
        
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="h-64 md:h-96 w-full relative">
            <img 
              src={cake.image} 
              alt={cake.name} 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="p-8 md:p-12">
            <span className="text-orange-500 font-bold tracking-widest text-xs uppercase">Dessert</span>
            <h1 className="text-4xl font-serif text-stone-900 mt-2 mb-4">{cake.name}</h1>
            <p className="text-stone-600 text-lg mb-8 leading-relaxed">{cake.description}</p>
            
            <div className="border-t border-stone-100 pt-8">
              <h3 className="font-bold text-xl mb-4 text-stone-800">Ingredients</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {cake.ingredients.map((ing, i) => (
                  <li key={i} className="flex items-center text-stone-600">
                    <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
                    {ing}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}