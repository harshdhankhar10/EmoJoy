import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
const Activities = () => {
  const [copiedEmoji, setCopiedEmoji] = useState(null);
  const [search, setSearch] = useState("");

  const emojis = [
    {"name": "Soccer", "emoji": "⚽"},
    {"name": "Basketball", "emoji": "🏀"},
    {"name": "Baseball", "emoji": "⚾"},
    {"name": "Tennis", "emoji": "🎾"},
    {"name": "Volleyball", "emoji": "🏐"},
    {"name": "Badminton", "emoji": "🏸"},
    {"name": "Rugby", "emoji": "🏉"},
    {"name": "Golf", "emoji": "🏌️"},
    {"name": "Running", "emoji": "🏃"},
    {"name": "Cycling", "emoji": "🚴"},
    {"name": "Swimming", "emoji": "🏊"},
    {"name": "Diving", "emoji": "🤿"},
    {"name": "Surfing", "emoji": "🏄"},
    {"name": "Skiing", "emoji": "⛷️"},
    {"name": "Snowboarding", "emoji": "🏂"},
    {"name": "Skateboarding", "emoji": "🛹"},
    {"name": "Rock Climbing", "emoji": "🧗"},
    {"name": "Fishing", "emoji": "🎣"},
    {"name": "Hiking", "emoji": "🥾"},
    {"name": "Camping", "emoji": "🏕️"},
    {"name": "Picnic", "emoji": "🧺"},
    {"name": "Hunting", "emoji": "🏹"},
    {"name": "Archery", "emoji": "🏹"},
    {"name": "Yoga", "emoji": "🧘"},
    {"name": "Weight Lifting", "emoji": "🏋️"},
    {"name": "Martial Arts", "emoji": "🥋"},
    {"name": "Dancing", "emoji": "💃"},
    {"name": "Singing", "emoji": "🎤"},
    {"name": "Playing Guitar", "emoji": "🎸"},
    {"name": "Playing Piano", "emoji": "🎹"},
    {"name": "Drumming", "emoji": "🥁"},
    {"name": "Reading", "emoji": "📖"},
    {"name": "Writing", "emoji": "✍️"},
    {"name": "Painting", "emoji": "🎨"},
    {"name": "Drawing", "emoji": "🖍️"},
    {"name": "Crafting", "emoji": "🧵"},
    {"name": "Cooking", "emoji": "👩‍🍳"},
    {"name": "Baking", "emoji": "🥐"},
    {"name": "Gardening", "emoji": "🌱"},
    {"name": "Traveling", "emoji": "✈️"},
    {"name": "Shopping", "emoji": "🛍️"},
    {"name": "Eating Out", "emoji": "🍽️"},
    {"name": "Going to the Movies", "emoji": "🎥"},
    {"name": "Going to the Theater", "emoji": "🎭"},
    {"name": "Sightseeing", "emoji": "🏛️"},
    {"name": "Visiting Museum", "emoji": "🏛️"},
    {"name": "Going to the Beach", "emoji": "🏖️"},
    {"name": "Swimming Pool", "emoji": "🏊"},
    {"name": "Ice Skating", "emoji": "⛸️"},
    {"name": "Sledding", "emoji": "🛷"},
    {"name": "Snowball Fight", "emoji": "☃️"},
    {"name": "Building a Snowman", "emoji": "⛄"},
    {"name": "Making Snow Angels", "emoji": "⛄"},
    {"name": "Picnicking", "emoji": "🧺"},
    {"name": "Barbecue", "emoji": "🍖"},
    {"name": "Picnic", "emoji": "🧺"},
    {"name": "Wine Tasting", "emoji": "🍷"},
    {"name": "Beer Tasting", "emoji": "🍺"},
    {"name": "Cocktail Making", "emoji": "🍹"},
    {"name": "Happy Hour", "emoji": "🍹"},
    {"name": "Food Tasting", "emoji": "🍴"},
    {"name": "Camping", "emoji": "🏕️"},
    {"name": "Horseback Riding", "emoji": "🏇"},
    {"name": "Sailing", "emoji": "⛵"},
    {"name": "Surfing", "emoji": "🏄"},
    {"name": "Kayaking", "emoji": "🛶"},
    {"name": "Scuba Diving", "emoji": "🤿"},
    {"name": "Mountain Biking", "emoji": "🚵"},
    {"name": "Roller Skating", "emoji": "🛼"},
    {"name": "Indoor Rock Climbing", "emoji": "🧗"},
    {"name": "Trampoline", "emoji": "🤸"},
    {"name": "Parkour", "emoji": "🏃‍♂️"},
    {"name": "Juggling", "emoji": "🤹"},
    {"name": "Magic Tricks", "emoji": "🪄"},
    {"name": "Circus", "emoji": "🎪"},
    {"name": "Card Tricks", "emoji": "🃏"},
    {"name": "Puzzle Solving", "emoji": "🧩"},
    {"name": "Escape Room", "emoji": "🔐"},
    {"name": "Board Games", "emoji": "🎲"},
    {"name": "Video Games", "emoji": "🎮"},
    {"name": "Tabletop Games", "emoji": "🎲"},
    {"name": "Fishing", "emoji": "🎣"},
    {"name": "Bird Watching", "emoji": "🐦"},
    {"name": "Stargazing", "emoji": "🌌"},
    {"name": "Photography", "emoji": "📷"},
    {"name": "Blogging", "emoji": "📝"},
    {"name": "Podcasting", "emoji": "🎙️"},
    {"name": "Vlogging", "emoji": "📹"},
    {"name": "Travel Blogging", "emoji": "🗺️"},
    {"name": "Creating Art", "emoji": "🎨"},
    {"name": "Video Editing", "emoji": "🎬"},
    {"name": "Voice Acting", "emoji": "🎙️"},
    {"name": "DJing", "emoji": "🎧"},
    {"name": "Karaoke", "emoji": "🎤"},
    {"name": "Dance Party", "emoji": "💃"},
    {"name": "Virtual Reality", "emoji": "🕶️"},
    {"name": "Augmented Reality", "emoji": "🕶️"},
    {"name": "Escape Games", "emoji": "🕵️"},
    {"name": "Crafting", "emoji": "🧵"},
    {"name": "Sculpting", "emoji": "🗿"},
    {"name": "Ceramics", "emoji": "🏺"},
    {"name": "Pottery", "emoji": "🏺"},
    {"name": "Woodworking", "emoji": "🪵"},
    {"name": "Leathercraft", "emoji": "👜"},
    {"name": "Metalworking", "emoji": "⚒️"},
    {"name": "Jewelry Making", "emoji": "💍"},
    {"name": "Beading", "emoji": "📿"},
    {"name": "Sewing", "emoji": "🪡"},
    {"name": "Knitting", "emoji": "🧶"},
    {"name": "Crocheting", "emoji": "🧶"},
    {"name": "Embroidery", "emoji": "🪡"},
    {"name": "Weaving", "emoji": "🧵"},
    {"name": "Origami", "emoji": "🦢"},
    {"name": "Photography", "emoji": "📸"},
    {"name": "Drawing", "emoji": "✏️"},
    {"name": "Painting", "emoji": "🎨"},
    {"name": "Collage", "emoji": "🖼️"},
    {"name": "Digital Art", "emoji": "💻"},
    {"name": "Tattooing", "emoji": "💉"},
    {"name": "Body Art", "emoji": "🎨"},
    {"name": "Face Painting", "emoji": "🎨"},
    {"name": "Perfume Making", "emoji": "💧"},
    {"name": "Soap Making", "emoji": "🧼"},
    {"name": "Candlemaking", "emoji": "🕯️"},
    {"name": "DIY Projects", "emoji": "🛠️"},
    {"name": "Hobby", "emoji": "🎨"},
    {"name": "Collecting", "emoji": "🗃️"},
    {"name": "Card Collecting", "emoji": "🃏"},
    {"name": "Coin Collecting", "emoji": "🪙"},
    {"name": "Stamp Collecting", "emoji": "📮"},
    {"name": "Antique Collecting", "emoji": "🕰️"},
    {"name": "Wine Collecting", "emoji": "🍷"},
    {"name": "Book Collecting", "emoji": "📚"},
    {"name": "Music Collecting", "emoji": "🎵"},
    {"name": "Art Collecting", "emoji": "🖼️"},
    {"name": "Vintage Cars", "emoji": "🚗"},
    {"name": "Model Trains", "emoji": "🚂"},
    {"name": "Dioramas", "emoji": "🖼️"},
    {"name": "Miniatures", "emoji": "🏠"},
    {"name": "Role-Playing Games", "emoji": "🎲"},
    {"name": "Tabletop RPG", "emoji": "🎲"},
    {"name": "Collectible Figures", "emoji": "🧸"},
    {"name": "Action Figures", "emoji": "🧸"},
    {"name": "Model Kits", "emoji": "🔧"},
    {"name": "Puzzle Solving", "emoji": "🧩"},
    {"name": "Escape Room Games", "emoji": "🔐"},
    {"name": "Board Games", "emoji": "🎲"},
    {"name": "Card Games", "emoji": "🃏"},
    {"name": "Trivia Games", "emoji": "🤓"},
    {"name": "Quiz Games", "emoji": "❓"},
    {"name": "Strategy Games", "emoji": "♟️"},
    {"name": "Adventure Games", "emoji": "🗺️"},
    {"name": "Puzzle Games", "emoji": "🧩"},
    {"name": "Educational Games", "emoji": "📚"},
    {"name": "Creative Writing", "emoji": "✍️"},
    {"name": "Fan Fiction", "emoji": "📚"},
    {"name": "Poetry", "emoji": "📜"},
    {"name": "Novels", "emoji": "📚"},
    {"name": "Short Stories", "emoji": "📚"},
    {"name": "Writing Challenges", "emoji": "🖊️"},
    {"name": "Storytelling", "emoji": "📖"},
    {"name": "Screenwriting", "emoji": "🎬"},
    {"name": "Writing Prompts", "emoji": "📝"},
    {"name": "Blogging", "emoji": "📝"},
    {"name": "Journalism", "emoji": "📰"},
    {"name": "Editing", "emoji": "✍️"},
    {"name": "Publishing", "emoji": "📚"},
    {"name": "Self-Publishing", "emoji": "📖"},
    {"name": "Book Reviews", "emoji": "📚"},
    {"name": "Book Clubs", "emoji": "📚"}
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
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Activities</h2>
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

export default Activities;
