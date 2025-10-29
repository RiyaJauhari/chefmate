import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, Star } from "lucide-react";
import { generateRecipe } from "../services/ai";
import CategoriesSection from "../components/CategorySection";
import Categories from "./categories";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
    const [query, setQuery] = useState("");
    const [recipe, setRecipe] = useState("");
    const [loading, setLoading] = useState(false);
const navigate=useNavigate()
    const handleGenerate = async () => {
        if (!query.trim()) return;
        setLoading(true);
        const result = await generateRecipe(query);
        setRecipe(result);
        setLoading(false);
    };
 const handleClick=async()=>{
          navigate("/search")
 }


    return (
        <div className="min-h-screen bg-linear-to-b w-screen overflow-x-hidden from-orange-50 to-white text-gray-800">
            {/* Hero Section */}
            <section
                className="relative flex flex-col justify-center items-center text-center text-white w-screen h-[90vh] overflow-hidden"
            >
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1920&q=80')",
                    }}
                ></div>

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/50"></div>

                <div className="relative z-10 max-w-3xl px-4 md:px-6">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-md">
                        Cook. Taste. Enjoy.
                    </h1>
                    <p className="text-lg md:text-xl mb-8 text-gray-100 drop-shadow-sm">
                        Discover recipes tailored to your ingredients, mood, and cooking time.
                    </p>

                    {/* Search bar */}
                    <div className="w-full max-w-2xl mx-auto flex bg-white rounded-full overflow-hidden shadow-xl">
                        <input
                            type="text"
                            onClick={handleClick}
                            placeholder="Search recipes..."
                            className="flex-1 px-6 py-4 text-gray-700 text-lg outline-none cursor-pointer"
                        />
                        <button className="bg-orange-500 px-8 py-4 text-white font-semibold hover:bg-orange-600 transition">
                            <Search size={24} />
                        </button>
                    </div>
                   
                </div>
            </section>

            {/* AI Integration Section */}
            <section className="py-16 px-6 md:px-12 text-center bg-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                    🍳 Ask AI for a Recipe
                </h2>
                <p className="text-gray-600 mb-8">
                    Type your ingredients or mood — let AI create something delicious!
                </p>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-2xl mx-auto">
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="e.g., I have mushrooms and rice"
                        className="flex-1 px-5 py-3 border border-gray-300 rounded-full outline-none focus:ring-2 focus:ring-orange-400"
                    />
                    <button
                        onClick={handleGenerate}
                        disabled
                        className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition disabled:opacity-50"
                    >
                        {loading ? "Cooking..." : "Generate Recipe"}
                    </button>

                </div>

                {recipe && (
                    <div className="mt-10 max-w-3xl mx-auto bg-orange-50 p-6 rounded-2xl shadow text-left whitespace-pre-wrap">
                        {recipe}
                    </div>
                )}
            </section>



            {/* Categories Section */}
            <section className="py-20 px-6 md:px-16 lg:px-24  xl:ox-30 text-center">
                <CategoriesSection/>
            </section>
            {/* Footer */}
            <footer className="py-8 text-center text-gray-600 text-sm bg-orange-50 border-t border-orange-100">
                © {new Date().getFullYear()} FoodieApp. All rights reserved.
            </footer>
        </div>
    );
}
