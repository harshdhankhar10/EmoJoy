import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
const TravelAndPlaces = () => {
  const [copiedEmoji, setCopiedEmoji] = useState(null);
  const [search, setSearch] = useState("");

  const emojis = [
    {"name": "Beach with Umbrella", "emoji": "🏖️"},
    {"name": "Desert", "emoji": "🏜️"},
    {"name": "National Park", "emoji": "🏞️"},
    {"name": "Camping", "emoji": "🏕️"},
    {"name": "Globe with Meridians", "emoji": "🌐"},
    {"name": "Mountain", "emoji": "🏔️"},
    {"name": "Volcano", "emoji": "🌋"},
    {"name": "Building Construction", "emoji": "🏗️"},
    {"name": "Tokyo Tower", "emoji": "🗼"},
    {"name": "Statue of Liberty", "emoji": "🗽"},
    {"name": "Ski Resort", "emoji": "🏂"},
    {"name": "Sunset", "emoji": "🌅"},
    {"name": "Sunrise", "emoji": "🌄"},
    {"name": "Desert Island", "emoji": "🏝️"},
    {"name": "Cityscape", "emoji": "🌆"},
    {"name": "Night with Stars", "emoji": "🌃"},
    {"name": "Mountain Snow", "emoji": "🏔️"},
    {"name": "Island", "emoji": "🏝️"},
    {"name": "World Map", "emoji": "🗺️"},
    {"name": "European Castle", "emoji": "🏰"},
    {"name": "House", "emoji": "🏠"},
    {"name": "House with Garden", "emoji": "🏡"},
    {"name": "Office Building", "emoji": "🏢"},
    {"name": "Japanese Castle", "emoji": "🏯"},
    {"name": "Hospital", "emoji": "🏥"},
    {"name": "Bank", "emoji": "🏦"},
    {"name": "Post Office", "emoji": "🏣"},
    {"name": "School", "emoji": "🏫"},
    {"name": "University", "emoji": "🏛️"},
    {"name": "Church", "emoji": "⛪"},
    {"name": "Mosque", "emoji": "🕌"},
    {"name": "Synagogue", "emoji": "🕍"},
    {"name": "Tent", "emoji": "⛺"},
    {"name": "Snow Capped Mountain", "emoji": "🏔️"},
    {"name": "Hot Springs", "emoji": "♨️"},
    {"name": "Shopping Mall", "emoji": "🏬"},
    {"name": "Factory", "emoji": "🏭"},
    {"name": "Hotel", "emoji": "🏨"},
    {"name": "Lighthouse", "emoji": "🏝️"},
    {"name": "Railway Track", "emoji": "🛤️"},
    {"name": "Motorway", "emoji": "🛣️"},
    {"name": "Bridge at Night", "emoji": "🌉"},
    {"name": "Fountain", "emoji": "⛲"},
    {"name": "Gardens", "emoji": "🌻"},
    {"name": "Statue", "emoji": "🗽"},
    {"name": "Palm Tree", "emoji": "🌴"},
    {"name": "Cactus", "emoji": "🌵"},
    {"name": "Snowflake", "emoji": "❄️"},
    {"name": "Sun", "emoji": "☀️"},
    {"name": "Umbrella on Ground", "emoji": "⛱️"},
    {"name": "Trolleybus", "emoji": "🚎"},
    {"name": "Taxi", "emoji": "🚖"},
    {"name": "Bus Stop", "emoji": "🚏"},
    {"name": "Subway", "emoji": "🚇"},
    {"name": "Airplane Departure", "emoji": "🛫"},
    {"name": "Airplane Arrival", "emoji": "🛬"},
    {"name": "Rocket", "emoji": "🚀"},
    {"name": "Helicopter", "emoji": "🚁"},
    {"name": "Boat", "emoji": "⛵"},
    {"name": "Passenger Ship", "emoji": "🚢"},
    {"name": "Kayak", "emoji": "🛶"},
    {"name": "Swimmer", "emoji": "🏊"},
    {"name": "Fishing Pole", "emoji": "🎣"},
    {"name": "Horse Racing", "emoji": "🏇"},
    {"name": "Bowling", "emoji": "🎳"},
    {"name": "Rock Climbing", "emoji": "🧗"},
    {"name": "Basketball", "emoji": "🏀"},
    {"name": "Soccer Ball", "emoji": "⚽"},
    {"name": "Golf", "emoji": "🏌️"},
    {"name": "Tennis", "emoji": "🎾"},
    {"name": "Baseball", "emoji": "⚾"},
    {"name": "American Football", "emoji": "🏈"},
    {"name": "Volleyball", "emoji": "🏐"},
    {"name": "Skiing", "emoji": "⛷️"},
    {"name": "Snowboarder", "emoji": "🏂"},
    {"name": "Running", "emoji": "🏃"},
    {"name": "Cycling", "emoji": "🚴"},
    {"name": "Horse", "emoji": "🐎"},
    {"name": "Racquetball", "emoji": "🏸"},
    {"name": "Track", "emoji": "🏃"},
    {"name": "Skateboard", "emoji": "🛹"},
    {"name": "Ice Skating", "emoji": "⛸️"},
    {"name": "Sled", "emoji": "🛷"},
    {"name": "Fishing", "emoji": "🎣"},
    {"name": "Diving Mask", "emoji": "🤿"},
    {"name": "Scuba Diver", "emoji": "🤿"},
    {"name": "Mountain Biking", "emoji": "🚵"},
    {"name": "Camping", "emoji": "🏕️"},
    {"name": "Forest", "emoji": "🌳"},
    {"name": "Park", "emoji": "🏞️"},
    {"name": "Camping", "emoji": "🏕️"},
    {"name": "Glamping", "emoji": "🏕️"},
    {"name": "Outdoor Fire", "emoji": "🔥"},
    {"name": "Lodge", "emoji": "🏡"},
    {"name": "Sunrise Over Mountains", "emoji": "🌄"},
    {"name": "Sunset Over Mountains", "emoji": "🌅"},
    {"name": "Paragliding", "emoji": "🪂"},
    {"name": "Hot Air Balloon", "emoji": "🎈"},
    {"name": "Chalet", "emoji": "🏡"},
    {"name": "Yacht", "emoji": "🛥️"},
    {"name": "Fishing Boat", "emoji": "⛴️"},
    {"name": "Submarine", "emoji": "🔱"},
    {"name": "Beach", "emoji": "🏖️"},
    {"name": "Shopping Bag", "emoji": "🛍️"},
    {"name": "Suitcase", "emoji": "🧳"},
    {"name": "Passport Control", "emoji": "🛂"},
    {"name": "Airplane", "emoji": "✈️"},
    {"name": "Baggage Claim", "emoji": "🛄"},
    {"name": "Train Station", "emoji": "🚉"},
    {"name": "Airport", "emoji": "🛫"},
    {"name": "Map", "emoji": "🗺️"},
    {"name": "Bus", "emoji": "🚌"},
    {"name": "Tram", "emoji": "🚋"},
    {"name": "Cable Car", "emoji": "🚡"},
    {"name": "Mountain Cableway", "emoji": "🚠"},
    {"name": "Ferry", "emoji": "⛴️"},
    {"name": "Taxi", "emoji": "🚖"},
    {"name": "Tourist Bus", "emoji": "🚍"},
    {"name": "Rental Car", "emoji": "🚗"},
    {"name": "Bike", "emoji": "🚲"},
    {"name": "Scooter", "emoji": "🛴"},
    {"name": "Moped", "emoji": "🛵"},
    {"name": "Electric Car", "emoji": "🚗"},
    {"name": "Road", "emoji": "🛣️"},
    {"name": "Highway", "emoji": "🛤️"},
    {"name": "Intersection", "emoji": "🛣️"},
    {"name": "Roundabout", "emoji": "🛤️"},
    {"name": "Pedestrian", "emoji": "🚶"},
    {"name": "Crosswalk", "emoji": "🚶"},
    {"name": "Road Sign", "emoji": "🚦"},
    {"name": "Speedometer", "emoji": "🚗"},
    {"name": "Rest Area", "emoji": "🛣️"},
    {"name": "Gas Station", "emoji": "⛽"},
    {"name": "Toll Booth", "emoji": "🚪"},
    {"name": "Emergency Exit", "emoji": "🚪"},
    {"name": "Street Light", "emoji": "💡"},
    {"name": "Signal", "emoji": "🚦"},
    {"name": "Parking Meter", "emoji": "🅿️"},
    {"name": "Parking", "emoji": "🅿️"}
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
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Travel & Places</h2>
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

export default TravelAndPlaces;
