import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

export default function CategoryPage() {
  const { name } = useParams();

  
  const recipes = {
    breakfast: [
      {
        title: "Avocado Toast",
        image:
          "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=60",
        description: "Crispy bread topped with avocado, olive oil & chili flakes.",
      },
      {
        title: "Pancakes with Maple Syrup",
        image:
          "https://images.unsplash.com/photo-1528301392571-0dfab3c00216?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UGFuY2FrZXMlMjB3aXRoJTIwTWFwbGUlMjBTeXJ1cHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
        description: "Fluffy pancakes served with butter and sweet maple syrup.",
      },
      {
        title: "Oatmeal Bowl",
        image:
          "https://images.unsplash.com/photo-1610406765661-57646c40da59?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8T2F0bWVhbCUyMEJvd2x8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
        description: "Warm oats topped with fruits and honey for a healthy start.",
      },
    ],
    lunch: [
      {
        title: "Grilled Chicken Salad",
        image:
          "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?auto=format&fit=crop&w=800&q=60",
        description: "Fresh salad with grilled chicken, lettuce, and cherry tomatoes.",
      },
      {
        title: "Vegetable Biryani",
        image:
          "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEJpcnlhbml8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
        description: "Fragrant rice dish cooked with aromatic spices and vegetables.",
      },
      {
        title: "Thai Curry",
        image:
          "https://images.unsplash.com/photo-1618449840665-9ed506d73a34?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VGhhaSUyMEN1cnJ5fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
        description: "A fragrant and flavorful dish that perfectly balances spice, sweetness, and creaminess.",
      },
    ],
    dinner: [
      {
        title: "Pasta Alfredo",
        image:
          "https://images.unsplash.com/photo-1662197480393-2a82030b7b83?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UGFzdGElMjBBbGZyZWRvfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
        description: "Creamy pasta with garlic, cheese, and herbs.",
      },
      {
        title: "Paneer Tikka Masala",
        image:
          "https://media.istockphoto.com/id/2220198464/photo/delicious-veg-platter-with-appetizers.webp?a=1&b=1&s=612x612&w=0&k=20&c=k_D5yM8J0wkOw8W4X7hUP7o5O8vXQ1voQ6I9UPBXvzQ=",
        description: "Spicy Indian curry made with cottage cheese cubes.",
      },
      {
        title: "Chicken Masala ",
        image:
        "https://plus.unsplash.com/premium_photo-1661419883163-bb4df1c10109?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2hpY2tlbiUyMGN1cnJ5fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600"  ,   
           description: "Spicy Indian curry made with chicken.",
      },
    ],
    snacks: [
      {
        title: "Veg Sandwich",
        image:
          "https://plus.unsplash.com/premium_photo-1738802845911-809a01acfa50?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmVnJTIwc2FuZHdpY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
        description: "Grilled sandwich filled with veggies and cheese.",
      },
      {
        title: "Noodles",
        image:
          "https://plus.unsplash.com/premium_photo-1694670234085-4f38b261ce5b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bm9vZGxlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
        description: "Noodles with veggies.",
      },
      {
        title: "Pizza",
        image:
          "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGl6emF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
        description: "Freshly hand toast pizza.",
      },
    ],
    desserts: [
      {
        title: "Chocolate Brownie",
        image:
          "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hvY29sYXRlJTIwYnJvd25pZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
        description: "Rich and gooey brownies made with dark chocolate.",
      },
      {
        title: "Tiramisu",
        image:
          "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VGlyYW1pc3V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
        description: "An Italian classic with layers of espresso-soaked ladyfingers and creamy mascarpone.",
      },
      {
        title: "Chocolate Lava Cake",
        image:
          "https://images.unsplash.com/photo-1617305855058-336d24456869?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q2hvY29sYXRlJTIwTGF2YSUyMENha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
        description: "Warm, rich chocolate cake with a molten center that oozes pure indulgence.",
      }
    ],
  };

  const currentRecipes = recipes[name.toLowerCase()] || [];

  return (
    <div className="min-h-screen w-screen bg-linear-to-b from-orange-50 to-white py-20 px-6 md:px-16 lg:px-24 text-center">
      <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
        {name.charAt(0).toUpperCase() + name.slice(1)} Recipes 🍽️
      </h1>
      <p className="text-gray-600 mb-12">
        Discover the best {name.toLowerCase()} recipes for your next meal.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {currentRecipes.length > 0 ? (
          currentRecipes.map((recipe, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-3xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-all"
            >
              <img
                src={recipe.image}
                alt={recipe.title}
                className="h-56 w-full object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {recipe.title}
                </h3>
                <p className="text-gray-600 text-sm">{recipe.description}</p>
              </div>
            </motion.div>
          ))
        ) : (
          <p className="text-gray-500 text-lg">No recipes found for this category.</p>
        )}
      </div>
    </div>
  );
}
