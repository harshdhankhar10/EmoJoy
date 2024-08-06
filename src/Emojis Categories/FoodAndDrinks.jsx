import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
const FoodAndDrinks = () => {
  const [copiedEmoji, setCopiedEmoji] = useState(null);
  const [search, setSearch] = useState("");

  const emojis =[
    {"name": "Bacon", "emoji": "🥓"},
    {"name": "Bagel", "emoji": "🥯"},
    {"name": "Baguette Bread", "emoji": "🥖"},
    {"name": "Bento Box", "emoji": "🍱"},
    {"name": "Bread", "emoji": "🍞"},
    {"name": "Breastfeeding", "emoji": "🍼"},
    {"name": "Broccoli", "emoji": "🥦"},
    {"name": "Burger", "emoji": "🍔"},
    {"name": "Cake", "emoji": "🍰"},
    {"name": "Candy", "emoji": "🍬"},
    {"name": "Canned Food", "emoji": "🥫"},
    {"name": "Carrot", "emoji": "🥕"},
    {"name": "Cheese Wedge", "emoji": "🧀"},
    {"name": "Cherries", "emoji": "🍒"},
    {"name": "Chicken Leg", "emoji": "🍗"},
    {"name": "Chocolate Bar", "emoji": "🍫"},
    {"name": "Cookies", "emoji": "🍪"},
    {"name": "Corn", "emoji": "🌽"},
    {"name": "Cucumber", "emoji": "🥒"},
    {"name": "Cupcake", "emoji": "🧁"},
    {"name": "Dango", "emoji": "🍡"},
    {"name": "Donut", "emoji": "🍩"},
    {"name": "Doughnut", "emoji": "🍩"},
    {"name": "Drink", "emoji": "🥤"},
    {"name": "Egg", "emoji": "🥚"},
    {"name": "Eggplant", "emoji": "🍆"},
    {"name": "French Fries", "emoji": "🍟"},
    {"name": "Garlic", "emoji": "🧄"},
    {"name": "Ginger", "emoji": "🫚"},
    {"name": "Green Apple", "emoji": "🍏"},
    {"name": "Green Salad", "emoji": "🥗"},
    {"name": "Honey", "emoji": "🍯"},
    {"name": "Hot Beverage", "emoji": "☕"},
    {"name": "Hot Dog", "emoji": "🌭"},
    {"name": "Ice Cream", "emoji": "🍦"},
    {"name": "Ice Pop", "emoji": "🍭"},
    {"name": "Lemon", "emoji": "🍋"},
    {"name": "Lollipop", "emoji": "🍭"},
    {"name": "Mango", "emoji": "🥭"},
    {"name": "Meat on Bone", "emoji": "🍖"},
    {"name": "Milk", "emoji": "🥛"},
    {"name": "Oden", "emoji": "🍢"},
    {"name": "Orange", "emoji": "🍊"},
    {"name": "Peanuts", "emoji": "🥜"},
    {"name": "Pear", "emoji": "🍐"},
    {"name": "Pizza", "emoji": "🍕"},
    {"name": "Popcorn", "emoji": "🍿"},
    {"name": "Ramen", "emoji": "🍜"},
    {"name": "Red Apple", "emoji": "🍎"},
    {"name": "Rice Ball", "emoji": "🍙"},
    {"name": "Rice Cracker", "emoji": "🍘"},
    {"name": "Rice", "emoji": "🍚"},
    {"name": "Roasted Sweet Potato", "emoji": "🍠"},
    {"name": "Salad", "emoji": "🥗"},
    {"name": "Sandwich", "emoji": "🥪"},
    {"name": "Sushi", "emoji": "🍣"},
    {"name": "Taco", "emoji": "🌮"},
    {"name": "Tea", "emoji": "🍵"},
    {"name": "Tomato", "emoji": "🍅"},
    {"name": "Tropical Drink", "emoji": "🍹"},
    {"name": "Turkey", "emoji": "🦃"},
    {"name": "Watermelon", "emoji": "🍉"},
    {"name": "Wine Glass", "emoji": "🍷"},
    {"name": "Bento Box", "emoji": "🍱"},
    {"name": "Avocado", "emoji": "🥑"},
    {"name": "Bowl with Spoon", "emoji": "🥣"},
    {"name": "Noodles", "emoji": "🍜"},
    {"name": "Coconut", "emoji": "🥥"},
    {"name": "Carrot", "emoji": "🥕"},
    {"name": "Peach", "emoji": "🍑"},
    {"name": "Cheese", "emoji": "🧀"},
    {"name": "Grapes", "emoji": "🍇"},
    {"name": "Strawberry", "emoji": "🍓"},
    {"name": "Ginger", "emoji": "🫚"},
    {"name": "Gingerbread Man", "emoji": "🎄"},
    {"name": "Salad", "emoji": "🥗"},
    {"name": "Kebab", "emoji": "🍢"},
    {"name": "Pasta", "emoji": "🍝"},
    {"name": "Cake Slice", "emoji": "🍰"},
    {"name": "Milkshake", "emoji": "🥤"},
    {"name": "Soda", "emoji": "🥤"},
    {"name": "Toast", "emoji": "🍞"},
    {"name": "Spaghetti", "emoji": "🍝"},
    {"name": "Pickles", "emoji": "🥒"},
    {"name": "Sausage", "emoji": "🌭"},
    {"name": "BBQ", "emoji": "🍖"},
    {"name": "Hot Chocolate", "emoji": "☕"},
    {"name": "Breadstick", "emoji": "🥯"},
    {"name": "Peas", "emoji": "🌱"},
    {"name": "Grapefruit", "emoji": "🍊"},
    {"name": "Doughnut", "emoji": "🍩"},
    {"name": "Pizza", "emoji": "🍕"},
    {"name": "Burger", "emoji": "🍔"},
    {"name": "Popcorn", "emoji": "🍿"},
    {"name": "Soup", "emoji": "🍲"},
    {"name": "Fried Shrimp", "emoji": "🍤"},
    {"name": "Burrito", "emoji": "🌯"},
    {"name": "Grilled Cheese", "emoji": "🧀"},
    {"name": "Fried Rice", "emoji": "🍚"},
    {"name": "Curry Rice", "emoji": "🍛"},
    {"name": "Kangaroo Meat", "emoji": "🦘"},
    {"name": "Sausage", "emoji": "🌭"},
    {"name": "Ramen", "emoji": "🍜"},
    {"name": "Cabbage", "emoji": "🥬"},
    {"name": "Bacon", "emoji": "🥓"},
    {"name": "Steak", "emoji": "🥩"},
    {"name": "Sushi Roll", "emoji": "🍣"},
    {"name": "Bowl of Rice", "emoji": "🍚"},
    {"name": "Cheese Pizza", "emoji": "🍕"},
    {"name": "Hot Sauce", "emoji": "🌶️"},
    {"name": "Pancakes", "emoji": "🥞"},
    {"name": "Onion Rings", "emoji": "🧅"},
    {"name": "Milk", "emoji": "🥛"},
    {"name": "Eggs", "emoji": "🥚"},
    {"name": "Soup Bowl", "emoji": "🍲"},
    {"name": "Spaghetti", "emoji": "🍝"},
    {"name": "Toast", "emoji": "🍞"},
    {"name": "Taco", "emoji": "🌮"},
    {"name": "Macaroon", "emoji": "🥥"},
    {"name": "Muffin", "emoji": "🧁"},
    {"name": "Fruit Salad", "emoji": "🍎"},
    {"name": "Cupcake", "emoji": "🧁"},
    {"name": "Baguette", "emoji": "🥖"},
    {"name": "Orange Juice", "emoji": "🍊"},
    {"name": "Green Tea", "emoji": "🍵"},
    {"name": "Milkshake", "emoji": "🥤"},
    {"name": "Apple Pie", "emoji": "🥧"},
    {"name": "Hotdog", "emoji": "🌭"},
    {"name": "Nachos", "emoji": "🧀"},
    {"name": "Cheeseburger", "emoji": "🍔"},
    {"name": "Ketchup", "emoji": "🍅"},
    {"name": "Noodles", "emoji": "🍜"},
    {"name": "Pizza Slice", "emoji": "🍕"},
    {"name": "Fruit", "emoji": "🍉"},
    {"name": "Hot Dog", "emoji": "🌭"},
    {"name": "Sushi Roll", "emoji": "🍣"},
    {"name": "Salad Bowl", "emoji": "🥗"},
    {"name": "Dessert", "emoji": "🍰"},
    {"name": "Pizza Slice", "emoji": "🍕"},
    {"name": "Milkshake", "emoji": "🥤"},
    {"name": "Donut", "emoji": "🍩"},
    {"name": "Strawberry Cake", "emoji": "🍰"},
    {"name": "Pasta", "emoji": "🍝"},
    {"name": "Fried Rice", "emoji": "🍚"},
    {"name": "Burger", "emoji": "🍔"},
    {"name": "French Fries", "emoji": "🍟"},
    {"name": "Pizza", "emoji": "🍕"},
    {"name": "Taco", "emoji": "🌮"},
    {"name": "Sandwich", "emoji": "🥪"},
    {"name": "Spaghetti", "emoji": "🍝"},
    {"name": "Hot Chocolate", "emoji": "☕"},
    {"name": "Milk", "emoji": "🥛"},
    {"name": "Burrito", "emoji": "🌯"},
    {"name": "Pancakes", "emoji": "🥞"},
    {"name": "Cheese", "emoji": "🧀"},
    {"name": "Fried Chicken", "emoji": "🍗"},
    {"name": "Donut", "emoji": "🍩"},
    {"name": "Ice Cream Cone", "emoji": "🍦"},
    {"name": "Cupcake", "emoji": "🧁"},
    {"name": "Macarons", "emoji": "🍰"},
    {"name": "Brownie", "emoji": "🍫"},
    {"name": "Apple", "emoji": "🍎"},
    {"name": "Grapes", "emoji": "🍇"},
    {"name": "Strawberry", "emoji": "🍓"},
    {"name": "Peach", "emoji": "🍑"},
    {"name": "Pineapple", "emoji": "🍍"},
    {"name": "Lemon", "emoji": "🍋"},
    {"name": "Mango", "emoji": "🥭"},
    {"name": "Watermelon", "emoji": "🍉"},
    {"name": "Avocado", "emoji": "🥑"},
    {"name": "Coconut", "emoji": "🥥"},
    {"name": "Pomegranate", "emoji": "🍑"},
    {"name": "Papaya", "emoji": "🍍"}
]


  const copyToClipboard = (emoji) => {
    navigator.clipboard.writeText(emoji.emoji);
    setCopiedEmoji(emoji);
    setTimeout(() => setCopiedEmoji(null), 2000);
  };

  const filteredEmojis = emojis.filter((emoji) => 
    emoji.name.toLowerCase().includes(search.toLowerCase()) ||
    emoji.emoji.includes(search)
  );

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Food & Drinks</h2>
        <input 
          type="text" 
          placeholder="Search" 
          className="w-1/2 border-2 border-gray-300 rounded-lg px-4 py-2 mb-4" 
          onChange={(e) => setSearch(e.target.value)} 
        />
      </div>
     
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12 gap-4">
        {filteredEmojis.map((emoji) => (
          <motion.div
            key={emoji.emoji}
            className="group relative flex items-center justify-center rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 h-20 w-20 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => copyToClipboard(emoji)}
          >
            <span className="text-4xl">{emoji.emoji}</span>
            <div className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-800 text-white text-xs rounded py-1 px-2 bottom-full left-1/2 transform -translate-x-1/2 mb-2 whitespace-nowrap">
              {emoji.name}
              <svg className="absolute text-gray-800 h-2 w-full left-0 top-full" x="0px" y="0px" viewBox="0 0 255 255" xmlSpace="preserve">
                <polygon className="fill-current" points="0,0 127.5,127.5 255,0"/>
              </svg>
            </div>
          </motion.div>
        ))}
      </div>
      
      {copiedEmoji && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg"
        >
          Copied: {copiedEmoji.emoji}
        </motion.div>
      )}
    </div>
  );
};

export default FoodAndDrinks;
