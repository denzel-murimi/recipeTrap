// app/data.ts

export type Cake = {
  id: string;
  slug: string;
  name: string;
  description: string;
  image: string;
  ingredients: string[];
  isTrap: boolean;
};

export const cakes: Cake[] = [
  {
    id: "1",
    slug: "velvet-berry",
    name: "Velvet Berry Cheesecake",
    description: "A rich, creamy filling topped with a fresh strawberry reduction.",
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=1000&auto=format&fit=crop",
    ingredients: ["Cream Cheese", "Graham Crackers", "Strawberries", "Sugar"],
    isTrap: false,
  },
  {
    id: "2",
    slug: "dark-truffle",
    name: "Midnight Truffle",
    description: "70% Dark Chocolate ganache with a sea-salt finish.",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1000&auto=format&fit=crop",
    ingredients: ["Dark Chocolate", "Heavy Cream", "Sea Salt", "Espresso Powder"],
    isTrap: false,
  },
  {
    id: "3",
    slug: "biscoff-cloud",
    name: "The Biscoff Cloud",
    description: "A caramelized biscuit dream. The texture is unreal.",
    image: "https://images.unsplash.com/photo-1586985289906-406988974504?q=80&w=1000&auto=format&fit=crop",
    ingredients: ["Lotus Biscoff Spread", "Whipped Cream", "Magic", "Love"],
    isTrap: true, // THE TRIGGER
  },
  {
    id: "4",
    slug: "lemon-drizzle",
    name: "Zesty Lemon Drizzle",
    description: "Light, airy, and perfect for a summer afternoon.",
    image: "https://images.unsplash.com/photo-1519340333755-56e9c1d04579?q=80&w=1000&auto=format&fit=crop",
    ingredients: ["Lemons", "Flour", "Butter", "Icing Sugar"],
    isTrap: false,
  },
];