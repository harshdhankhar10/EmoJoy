import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
const AnimalsAndNature = () => {
  const [copiedEmoji, setCopiedEmoji] = useState(null);
  const [search, setSearch] = useState("");

  const emojis = [
    {"name": "Monkey Face", "emoji": "🐵"},
    {"name": "Monkey", "emoji": "🐒"},
    {"name": "Dog Face", "emoji": "🐶"},
    {"name": "Dog", "emoji": "🐕"},
    {"name": "Guide Dog", "emoji": "🐕‍🦺"},
    {"name": "Poodle", "emoji": "🐩"},
    {"name": "Cat Face", "emoji": "😺"},
    {"name": "Cat", "emoji": "🐈"},
    {"name": "Lion Face", "emoji": "🦁"},
    {"name": "Tiger Face", "emoji": "🐯"},
    {"name": "Tiger", "emoji": "🐅"},
    {"name": "Leopard", "emoji": "🐆"},
    {"name": "Horse Face", "emoji": "🐴"},
    {"name": "Horse", "emoji": "🐎"},
    {"name": "Unicorn", "emoji": "🦄"},
    {"name": "Zebra", "emoji": "🦓"},
    {"name": "Elephant", "emoji": "🐘"},
    {"name": "Ox", "emoji": "🐂"},
    {"name": "Water Buffalo", "emoji": "🐃"},
    {"name": "Cow Face", "emoji": "🐄"},
    {"name": "Cow", "emoji": "🐄"},
    {"name": "Pig Face", "emoji": "🐷"},
    {"name": "Pig", "emoji": "🐖"},
    {"name": "Boar", "emoji": "🐗"},
    {"name": "Pig Nose", "emoji": "🐽"},
    {"name": "Ram", "emoji": "🐏"},
    {"name": "Ewe", "emoji": "🐑"},
    {"name": "Goat", "emoji": "🐐"},
    {"name": "Camel", "emoji": "🐪"},
    {"name": "Two-Hump Camel", "emoji": "🐫"},
    {"name": "Giraffe", "emoji": "🦒"},
    {"name": "Elephant", "emoji": "🐘"},
    {"name": "Rhinoceros", "emoji": "🦏"},
    {"name": "Hippopotamus", "emoji": "🦛"},
    {"name": "Kangaroo", "emoji": "🦘"},
    {"name": "Badger", "emoji": "🦡"},
    {"name": "Paw Prints", "emoji": "🐾"},
    {"name": "Chipmunk", "emoji": "🐿️"},
    {"name": "Rat", "emoji": "🐀"},
    {"name": "Mouse", "emoji": "🐭"},
    {"name": "Hamster", "emoji": "🐹"},
    {"name": "Rabbit Face", "emoji": "🐰"},
    {"name": "Rabbit", "emoji": "🐇"},
    {"name": "Bear", "emoji": "🐻"},
    {"name": "Polar Bear", "emoji": "🐻‍❄️"},
    {"name": "Koala", "emoji": "🐨"},
    {"name": "Panda Face", "emoji": "🐼"},
    {"name": "Sloth", "emoji": "🦥"},
    {"name": "Otter", "emoji": "🦦"},
    {"name": "Skunk", "emoji": "🦨"},
    {"name": "Weasel", "emoji": "🦡"},
    {"name": "Tiger", "emoji": "🐅"},
    {"name": "Leopard", "emoji": "🐆"},
    {"name": "Octopus", "emoji": "🐙"},
    {"name": "Squid", "emoji": "🐙"},
    {"name": "Shell", "emoji": "🐚"},
    {"name": "Snail", "emoji": "🐌"},
    {"name": "Butterfly", "emoji": "🦋"},
    {"name": "Worm", "emoji": "🐛"},
    {"name": "Bee", "emoji": "🐝"},
    {"name": "Ant", "emoji": "🐜"},
    {"name": "Lady Beetle", "emoji": "🐞"},
    {"name": "Cricket", "emoji": "🦗"},
    {"name": "Cockroach", "emoji": "🪳"},
    {"name": "Spider", "emoji": "🕷️"},
    {"name": "Spider Web", "emoji": "🕸️"},
    {"name": "Scorpion", "emoji": "🦂"},
    {"name": "Mosquito", "emoji": "🦟"},
    {"name": "Fly", "emoji": "🪰"},
    {"name": "Frog", "emoji": "🐸"},
    {"name": "Crocodile", "emoji": "🐊"},
    {"name": "Turtle", "emoji": "🐢"},
    {"name": "Lizard", "emoji": "🦎"},
    {"name": "Snake", "emoji": "🐍"},
    {"name": "Dragon Face", "emoji": "🐲"},
    {"name": "Dragon", "emoji": "🐉"},
    {"name": "Pterodactyl", "emoji": "🦕"},
    {"name": "Sauropod", "emoji": "🦖"},
    {"name": "Whale", "emoji": "🐋"},
    {"name": "Whale Shark", "emoji": "🦈"},
    {"name": "Dolphin", "emoji": "🐬"},
    {"name": "Seal", "emoji": "🦭"},
    {"name": "Fish", "emoji": "🐟"},
    {"name": "Tropical Fish", "emoji": "🐠"},
    {"name": "Blowfish", "emoji": "🐡"},
    {"name": "Shark", "emoji": "🦈"},
    {"name": "Octopus", "emoji": "🐙"},
    {"name": "Squid", "emoji": "🦑"},
    {"name": "Butterfly", "emoji": "🦋"},
    {"name": "Rose", "emoji": "🌹"},
    {"name": "Sunflower", "emoji": "🌻"},
    {"name": "Tulip", "emoji": "🌷"},
    {"name": "Blossom", "emoji": "🌼"},
    {"name": "Cherry Blossom", "emoji": "🌸"},
    {"name": "Bamboo", "emoji": "🎋"},
    {"name": "Palm Tree", "emoji": "🌴"},
    {"name": "Cactus", "emoji": "🌵"},
    {"name": "Evergreen Tree", "emoji": "🌲"},
    {"name": "Deciduous Tree", "emoji": "🌳"},
    {"name": "Sheaf of Rice", "emoji": "🌾"},
    {"name": "Herb", "emoji": "🌿"},
    {"name": "Four Leaf Clover", "emoji": "🍀"},
    {"name": "Maple Leaf", "emoji": "🍁"},
    {"name": "Fallen Leaf", "emoji": "🍂"},
    {"name": "Leaf Fluttering in Wind", "emoji": "🍃"},
    {"name": "Seedling", "emoji": "🌱"},
    {"name": "Plant", "emoji": "🌿"},
    {"name": "Potato", "emoji": "🥔"},
    {"name": "Carrot", "emoji": "🥕"},
    {"name": "Corn", "emoji": "🌽"},
    {"name": "Hot Pepper", "emoji": "🌶️"},
    {"name": "Cucumber", "emoji": "🥒"},
    {"name": "Leafy Green", "emoji": "🥬"},
    {"name": "Broccoli", "emoji": "🥦"},
    {"name": "Garlic", "emoji": "🧄"},
    {"name": "Onion", "emoji": "🧅"},
    {"name": "Mushroom", "emoji": "🍄"},
    {"name": "Peanuts", "emoji": "🥜"},
    {"name": "Chestnut", "emoji": "🌰"},
    {"name": "Bread", "emoji": "🍞"},
    {"name": "Croissant", "emoji": "🥐"},
    {"name": "Baguette Bread", "emoji": "🥖"},
    {"name": "Pancakes", "emoji": "🥞"},
    {"name": "Waffle", "emoji": "🧇"},
    {"name": "Cheese Wedge", "emoji": "🧀"},
    {"name": "Meat on Bone", "emoji": "🍖"},
    {"name": "Poultry Leg", "emoji": "🍗"},
    {"name": "Bacon", "emoji": "🥓"},
    {"name": "Hamburger", "emoji": "🍔"},
    {"name": "Fries", "emoji": "🍟"},
    {"name": "Pizza", "emoji": "🍕"},
    {"name": "Hot Dog", "emoji": "🌭"},
    {"name": "Taco", "emoji": "🌮"},
    {"name": "Burrito", "emoji": "🌯"},
    {"name": "Stuffed Flatbread", "emoji": "🥙"},
    {"name": "Falafel", "emoji": "🥙"},
    {"name": "Egg", "emoji": "🥚"},
    {"name": "Cooked Rice", "emoji": "🍚"},
    {"name": "Rice Ball", "emoji": "🍙"},
    {"name": "Rice Cracker", "emoji": "🍘"},
    {"name": "Sushi", "emoji": "🍣"},
    {"name": "Bento Box", "emoji": "🍱"},
    {"name": "Rice Noodle", "emoji": "🍜"},
    {"name": "Spaghetti", "emoji": "🍝"},
    {"name": "Sweet Potato", "emoji": "🍠"},
    {"name": "Eggplant", "emoji": "🍆"},
    {"name": "Peach", "emoji": "🍑"},
    {"name": "Melon", "emoji": "🍈"},
    {"name": "Watermelon", "emoji": "🍉"},
    {"name": "Grapes", "emoji": "🍇"},
    {"name": "Strawberry", "emoji": "🍓"},
    {"name": "Kiwi Fruit", "emoji": "🥝"},
    {"name": "Pineapple", "emoji": "🍍"},
    {"name": "Mango", "emoji": "🥭"},
    {"name": "Banana", "emoji": "🍌"},
    {"name": "Apple", "emoji": "🍎"},
    {"name": "Green Apple", "emoji": "🍏"},
    {"name": "Tangerine", "emoji": "🍊"},
    {"name": "Lemon", "emoji": "🍋"},
    {"name": "Avocado", "emoji": "🥑"},
    {"name": "Pear", "emoji": "🍐"},
    {"name": "Coconut", "emoji": "🥥"},
    {"name": "Kiwi Fruit", "emoji": "🥝"},
    {"name": "Grapefruit", "emoji": "🍊"},
    {"name": "Lemon", "emoji": "🍋"},
    {"name": "Cherry", "emoji": "🍒"},
    {"name": "Pineapple", "emoji": "🍍"},
    {"name": "Mango", "emoji": "🥭"},
    {"name": "Watermelon", "emoji": "🍉"},
    {"name": "Peach", "emoji": "🍑"},
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
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Animals & Nature</h2>
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

export default AnimalsAndNature;
