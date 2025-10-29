import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function CategoriesSection() {
  const navigate = useNavigate();

  const categories = [
    {
      name: "Breakfast",
      image:
        "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    },
    {
      name: "Lunch",
      image:
        "https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    },
    {
      name: "Dinner",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=60",
    },
    {
      name: "Snacks",
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=60",
    },
    {
      name: "Desserts",
      image:
        "https://plus.unsplash.com/premium_photo-1680172800885-61c5f1fc188e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
    },
  ];

  return (
    <section className="py-24 px-6 md:px-16 lg:px-24 bg-linear-to-b from-orange-50 to-white text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-12">
        🍴 Explore by Category
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 max-w-7xl mx-auto">
        {categories.map((cat) => (
          <motion.div
            key={cat.name}
            onClick={() => navigate(`/category/${cat.name.toLowerCase()}`)}
            className="relative group rounded-3xl overflow-hidden shadow-md hover:shadow-2xl cursor-pointer transition-all duration-500"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            {/* Image */}
            <img
              src={cat.image}
              alt={cat.name}
              className="h-48 w-full object-cover group-hover:opacity-75 transition-opacity duration-300"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent flex items-end justify-center">
              <h3 className="text-white text-lg sm:text-xl font-semibold mb-4 tracking-wide">
                {cat.name}
              </h3>
            </div>

            {/* Glow on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-orange-400/10 backdrop-blur-sm transition-all duration-300"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
