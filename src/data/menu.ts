import { Dish } from '../types/Dish';

export const menuItems: Dish[] = [
  {
    id: 1,
    name: "Classic Cheeseburger",
    price: 15,
    description: "Grilled beef patty topped with cheddar cheese, lettuce, tomato, and house sauce.",
    ingredients: ["100% Angus beef patty", "aged cheddar", "brioche bun", "lettuce", "tomato", "pickles", "house-made burger sauce"],
    image: "https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "mains"
  },
  {
    id: 2,
    name: "Buffalo Chicken Wings",
    price: 12,
    description: "Spicy crispy wings tossed in buffalo sauce with blue cheese dip.",
    ingredients: ["Chicken wings", "buffalo hot sauce", "butter", "celery sticks", "blue cheese dressing"],
    image: "https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "appetizers"
  },
  {
    id: 3,
    name: "Caesar Salad",
    price: 10,
    description: "Crisp romaine with parmesan, croutons, and creamy Caesar dressing.",
    ingredients: ["Romaine lettuce", "shaved parmesan", "garlic croutons", "anchovy Caesar dressing", "lemon wedge"],
    image: "https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "salads"
  },
  {
    id: 4,
    name: "BBQ Baby Back Ribs",
    price: 22,
    description: "Slow-cooked pork ribs glazed with smoky BBQ sauce.",
    ingredients: ["Pork baby back ribs", "house BBQ sauce", "smoked paprika rub", "coleslaw", "pickles"],
    image: "https://images.pexels.com/photos/1310777/pexels-photo-1310777.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "mains"
  },
  {
    id: 5,
    name: "Mac & Cheese Skillet",
    price: 12,
    description: "Creamy mac & cheese baked with crispy breadcrumbs.",
    ingredients: ["Elbow macaroni", "sharp cheddar", "cream", "butter", "panko breadcrumbs", "parmesan", "chives"],
    image: "https://images.pexels.com/photos/4518656/pexels-photo-4518656.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "sides"
  },
  {
    id: 6,
    name: "New England Clam Chowder",
    price: 9,
    description: "Rich and creamy clam chowder served with oyster crackers.",
    ingredients: ["Fresh clams", "diced potatoes", "onion", "celery", "cream", "bacon", "fresh thyme", "oyster crackers"],
    image: "https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "soups"
  },
  {
    id: 7,
    name: "Grilled Salmon Fillet",
    price: 18,
    description: "Wild-caught salmon served with roasted veggies and lemon butter.",
    ingredients: ["Wild salmon fillet", "olive oil", "garlic", "lemon zest", "seasonal roasted vegetables (zucchini, carrots, bell peppers)"],
    image: "https://images.pexels.com/photos/725992/pexels-photo-725992.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "mains"
  },
  {
    id: 8,
    name: "New York Cheesecake",
    price: 7,
    description: "Classic creamy cheesecake with berry compote.",
    ingredients: ["Cream cheese", "graham cracker crust", "eggs", "sugar", "vanilla", "fresh berry sauce (strawberries, blueberries, raspberries)"],
    image: "https://images.pexels.com/photos/8477/dessert-cheesecake-cake-sweet.jpg?auto=compress&cs=tinysrgb&w=800",
    category: "desserts"
  }
];