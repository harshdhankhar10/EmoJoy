import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
const PeoplesAndBody = () => {
  const [copiedEmoji, setCopiedEmoji] = useState(null);
  const [search, setSearch] = useState("");

  const emojis = [
    {"emoji": "👶", "name": "Baby"},
    {"emoji": "🧒", "name": "Child"},
    {"emoji": "👦", "name": "Boy"},
    {"emoji": "👧", "name": "Girl"},
    {"emoji": "🧑", "name": "Person"},
    {"emoji": "👨", "name": "Man"},
    {"emoji": "👩", "name": "Woman"},
    {"emoji": "🧔", "name": "Person with Beard"},
    {"emoji": "🧓", "name": "Older Person"},
    {"emoji": "👴", "name": "Old Man"},
    {"emoji": "👵", "name": "Old Woman"},
    {"emoji": "👨‍⚕️", "name": "Man Health Worker"},
    {"emoji": "👩‍⚕️", "name": "Woman Health Worker"},
    {"emoji": "👨‍🎓", "name": "Man Student"},
    {"emoji": "👩‍🎓", "name": "Woman Student"},
    {"emoji": "👨‍🏫", "name": "Man Teacher"},
    {"emoji": "👩‍🏫", "name": "Woman Teacher"},
    {"emoji": "👨‍⚖️", "name": "Man Judge"},
    {"emoji": "👩‍⚖️", "name": "Woman Judge"},
    {"emoji": "👨‍🌾", "name": "Man Farmer"},
    {"emoji": "👩‍🌾", "name": "Woman Farmer"},
    {"emoji": "👨‍🍳", "name": "Man Cook"},
    {"emoji": "👩‍🍳", "name": "Woman Cook"},
    {"emoji": "👨‍🔧", "name": "Man Mechanic"},
    {"emoji": "👩‍🔧", "name": "Woman Mechanic"},
    {"emoji": "👨‍🏭", "name": "Man Factory Worker"},
    {"emoji": "👩‍🏭", "name": "Woman Factory Worker"},
    {"emoji": "👨‍💼", "name": "Man Office Worker"},
    {"emoji": "👩‍💼", "name": "Woman Office Worker"},
    {"emoji": "👨‍🔬", "name": "Man Scientist"},
    {"emoji": "👩‍🔬", "name": "Woman Scientist"},
    {"emoji": "👨‍💻", "name": "Man Technologist"},
    {"emoji": "👩‍💻", "name": "Woman Technologist"},
    {"emoji": "👨‍🎤", "name": "Man Singer"},
    {"emoji": "👩‍🎤", "name": "Woman Singer"},
    {"emoji": "👨‍🎨", "name": "Man Artist"},
    {"emoji": "👩‍🎨", "name": "Woman Artist"},
    {"emoji": "👨‍✈️", "name": "Man Pilot"},
    {"emoji": "👩‍✈️", "name": "Woman Pilot"},
    {"emoji": "👨‍🚀", "name": "Man Astronaut"},
    {"emoji": "👩‍🚀", "name": "Woman Astronaut"},
    {"emoji": "👨‍🚒", "name": "Man Firefighter"},
    {"emoji": "👩‍🚒", "name": "Woman Firefighter"},
    {"emoji": "👮‍♂️", "name": "Man Police Officer"},
    {"emoji": "👮‍♀️", "name": "Woman Police Officer"},
    {"emoji": "🕵️‍♂️", "name": "Man Detective"},
    {"emoji": "🕵️‍♀️", "name": "Woman Detective"},
    {"emoji": "💂‍♂️", "name": "Man Guard"},
    {"emoji": "💂‍♀️", "name": "Woman Guard"},
    {"emoji": "👷‍♂️", "name": "Man Construction Worker"},
    {"emoji": "👷‍♀️", "name": "Woman Construction Worker"},
    {"emoji": "🤴", "name": "Prince"},
    {"emoji": "👸", "name": "Princess"},
    {"emoji": "👳‍♂️", "name": "Man with Turban"},
    {"emoji": "👳‍♀️", "name": "Woman with Turban"},
    {"emoji": "👲", "name": "Man with Chinese Cap"},
    {"emoji": "🧕", "name": "Woman with Headscarf"},
    {"emoji": "🤵", "name": "Man in Tuxedo"},
    {"emoji": "👰", "name": "Bride with Veil"},
    {"emoji": "🤰", "name": "Pregnant Woman"},
    {"emoji": "🤱", "name": "Breast-Feeding"},
    {"emoji": "👩‍🍼", "name": "Woman Feeding Baby"},
    {"emoji": "👨‍🍼", "name": "Man Feeding Baby"},
    {"emoji": "🧑‍🍼", "name": "Person Feeding Baby"},
    {"emoji": "👼", "name": "Baby Angel"},
    {"emoji": "🎅", "name": "Santa Claus"},
    {"emoji": "🤶", "name": "Mrs. Claus"},
    {"emoji": "🧑‍🎄", "name": "Mx Claus"},
    {"emoji": "🦸‍♂️", "name": "Man Superhero"},
    {"emoji": "🦸‍♀️", "name": "Woman Superhero"},
    {"emoji": "🦸", "name": "Superhero"},
    {"emoji": "🦹‍♂️", "name": "Man Supervillain"},
    {"emoji": "🦹‍♀️", "name": "Woman Supervillain"},
    {"emoji": "🦹", "name": "Supervillain"},
    {"emoji": "🧙‍♂️", "name": "Man Mage"},
    {"emoji": "🧙‍♀️", "name": "Woman Mage"},
    {"emoji": "🧙", "name": "Mage"},
    {"emoji": "🧚‍♂️", "name": "Man Fairy"},
    {"emoji": "🧚‍♀️", "name": "Woman Fairy"},
    {"emoji": "🧚", "name": "Fairy"},
    {"emoji": "🧛‍♂️", "name": "Man Vampire"},
    {"emoji": "🧛‍♀️", "name": "Woman Vampire"},
    {"emoji": "🧛", "name": "Vampire"},
    {"emoji": "🧜‍♂️", "name": "Merman"},
    {"emoji": "🧜‍♀️", "name": "Mermaid"},
    {"emoji": "🧜", "name": "Merperson"},
    {"emoji": "🧝‍♂️", "name": "Man Elf"},
    {"emoji": "🧝‍♀️", "name": "Woman Elf"},
    {"emoji": "🧝", "name": "Elf"},
    {"emoji": "🧞‍♂️", "name": "Man Genie"},
    {"emoji": "🧞‍♀️", "name": "Woman Genie"},
    {"emoji": "🧞", "name": "Genie"},
    {"emoji": "🧟‍♂️", "name": "Man Zombie"},
    {"emoji": "🧟‍♀️", "name": "Woman Zombie"},
    {"emoji": "🧟", "name": "Zombie"},
    {"emoji": "💆‍♂️", "name": "Man Getting Massage"},
    {"emoji": "💆‍♀️", "name": "Woman Getting Massage"},
    {"emoji": "💇‍♂️", "name": "Man Getting Haircut"},
    {"emoji": "💇‍♀️", "name": "Woman Getting Haircut"},
    {"emoji": "🚶‍♂️", "name": "Man Walking"},
    {"emoji": "🚶‍♀️", "name": "Woman Walking"},
    {"emoji": "🧍‍♂️", "name": "Man Standing"},
    {"emoji": "🧍‍♀️", "name": "Woman Standing"},
    {"emoji": "🧎‍♂️", "name": "Man Kneeling"},
    {"emoji": "🧎‍♀️", "name": "Woman Kneeling"},
    {"emoji": "👨‍🦯", "name": "Man with White Cane"},
    {"emoji": "👩‍🦯", "name": "Woman with White Cane"},
    {"emoji": "🧑‍🦯", "name": "Person with White Cane"},
    {"emoji": "👨‍🦼", "name": "Man in Motorized Wheelchair"},
    {"emoji": "👩‍🦼", "name": "Woman in Motorized Wheelchair"},
    {"emoji": "🧑‍🦼", "name": "Person in Motorized Wheelchair"},
    {"emoji": "👨‍🦽", "name": "Man in Manual Wheelchair"},
    {"emoji": "👩‍🦽", "name": "Woman in Manual Wheelchair"},
    {"emoji": "🧑‍🦽", "name": "Person in Manual Wheelchair"},
    {"emoji": "🏃‍♂️", "name": "Man Running"},
    {"emoji": "🏃‍♀️", "name": "Woman Running"},
    {"emoji": "💃", "name": "Woman Dancing"},
    {"emoji": "🕺", "name": "Man Dancing"},
    {"emoji": "🕴️", "name": "Person in Suit Levitating"},
    {"emoji": "👯‍♂️", "name": "Men with Bunny Ears"},
    {"emoji": "👯‍♀️", "name": "Women with Bunny Ears"},
    {"emoji": "🧖‍♂️", "name": "Man in Steamy Room"},
    {"emoji": "🧖‍♀️", "name": "Woman in Steamy Room"},
    {"emoji": "🧗‍♂️", "name": "Man Climbing"},
    {"emoji": "🧗‍♀️", "name": "Woman Climbing"},
    {"emoji": "🤺", "name": "Person Fencing"},
    {"emoji": "🏇", "name": "Horse Racing"},
    {"emoji": "⛷️", "name": "Skier"},
    {"emoji": "🏂", "name": "Snowboarder"},
    {"emoji": "🏌️‍♂️", "name": "Man Golfing"},
    {"emoji": "🏌️‍♀️", "name": "Woman Golfing"},
    {"emoji": "🏄‍♂️", "name": "Man Surfing"},
    {"emoji": "🏄‍♀️", "name": "Woman Surfing"},
    {"emoji": "🚣‍♂️", "name": "Man Rowing Boat"},
    {"emoji": "🚣‍♀️", "name": "Woman Rowing Boat"},
    {"emoji": "🏊‍♂️", "name": "Man Swimming"},
    {"emoji": "🏊‍♀️", "name": "Woman Swimming"},
    {"emoji": "⛹️‍♂️", "name": "Man Bouncing Ball"},
    {"emoji": "⛹️‍♀️", "name": "Woman Bouncing Ball"},
    {"emoji": "🏋️‍♂️", "name": "Man Lifting Weights"},
    {"emoji": "🏋️‍♀️", "name": "Woman Lifting Weights"},
    {"emoji": "🚴‍♂️", "name": "Man Biking"},
    {"emoji": "🚴‍♀️", "name": "Woman Biking"},
    {"emoji": "🚵‍♂️", "name": "Man Mountain Biking"},
    {"emoji": "🚵‍♀️", "name": "Woman Mountain Biking"},
    {"emoji": "🤸‍♂️", "name": "Man Cartwheeling"},
    {"emoji": "🤸‍♀️", "name": "Woman Cartwheeling"},
    {"emoji": "🤼‍♂️", "name": "Men Wrestling"},
    {"emoji": "🤼‍♀️", "name": "Women Wrestling"},
    {"emoji": "🤽‍♂️", "name": "Man Playing Water Polo"},
    {"emoji": "🤽‍♀️", "name": "Woman Playing Water Polo"},
    {"emoji": "🤾‍♂️", "name": "Man Playing Handball"},
    {"emoji": "🤾‍♀️", "name": "Woman Playing Handball"},
    {"emoji": "🤹‍♂️", "name": "Man Juggling"},
    {"emoji": "🤹‍♀️", "name": "Woman Juggling"},
    {"emoji": "🧘‍♂️", "name": "Man in Lotus Position"},
    {"emoji": "🧘‍♀️", "name": "Woman in Lotus Position"},
    {"emoji": "🛀", "name": "Person Taking Bath"},
    {"emoji": "🛌", "name": "Person in Bed"},
    {"emoji": "🧑‍🤝‍🧑", "name": "People Holding Hands"},
    {"emoji": "👭", "name": "Women Holding Hands"},
    {"emoji": "👫", "name": "Woman and Man Holding Hands"},
    {"emoji": "👬", "name": "Men Holding Hands"},
    {"emoji": "💏", "name": "Kiss"},
    {"emoji": "👩‍❤️‍💋‍👨", "name": "Kiss: Woman, Man"},
    {"emoji": "👨‍❤️‍💋‍👨", "name": "Kiss: Man, Man"},
    {"emoji": "👩‍❤️‍💋‍👩", "name": "Kiss: Woman, Woman"},
    {"emoji": "💑", "name": "Couple with Heart"},
    {"emoji": "👩‍❤️‍👨", "name": "Couple with Heart: Woman, Man"},
    {"emoji": "👨‍❤️‍👨", "name": "Couple with Heart: Man, Man"},
    {"emoji": "👩‍❤️‍👩", "name": "Couple with Heart: Woman, Woman"},
    {"emoji": "👪", "name": "Family"},
    {"emoji": "👨‍👩‍👦", "name": "Family: Man, Woman, Boy"},
    {"emoji": "👨‍👩‍👧", "name": "Family: Man, Woman, Girl"},
    {"emoji": "👨‍👩‍👧‍👦", "name": "Family: Man, Woman, Girl, Boy"},
    {"emoji": "👨‍👩‍👦‍👦", "name": "Family: Man, Woman, Boy, Boy"},
    {"emoji": "👨‍👩‍👧‍👧", "name": "Family: Man, Woman, Girl, Girl"},
    {"emoji": "👨‍👨‍👦", "name": "Family: Man, Man, Boy"},
    {"emoji": "👨‍👨‍👧", "name": "Family: Man, Man, Girl"},
    {"emoji": "👨‍👨‍👧‍👦", "name": "Family: Man, Man, Girl, Boy"},
    {"emoji": "👨‍👨‍👦‍👦", "name": "Family: Man, Man, Boy, Boy"},
    {"emoji": "👨‍👨‍👧‍👧", "name": "Family: Man, Man, Girl, Girl"},
    {"emoji": "👩‍👩‍👦", "name": "Family: Woman, Woman, Boy"},
    {"emoji": "👩‍👩‍👧", "name": "Family: Woman, Woman, Girl"},
    {"emoji": "👩‍👩‍👧‍👦", "name": "Family: Woman, Woman, Girl, Boy"},
    {"emoji": "👩‍👩‍👦‍👦", "name": "Family: Woman, Woman, Boy, Boy"},
    {"emoji": "👩‍👩‍👧‍👧", "name": "Family: Woman, Woman, Girl, Girl"},
    {"emoji": "👨‍👦", "name": "Family: Man, Boy"},
    {"emoji": "👨‍👧", "name": "Family: Man, Girl"},
    {"emoji": "👨‍👧‍👦", "name": "Family: Man, Girl, Boy"},
    {"emoji": "👨‍👦‍👦", "name": "Family: Man, Boy, Boy"},
    {"emoji": "👨‍👧‍👧", "name": "Family: Man, Girl, Girl"},
    {"emoji": "👩‍👦", "name": "Family: Woman, Boy"},
    {"emoji": "👩‍👧", "name": "Family: Woman, Girl"},
    {"emoji": "👩‍👧‍👦", "name": "Family: Woman, Girl, Boy"},
    {"emoji": "👩‍👦‍👦", "name": "Family: Woman, Boy, Boy"},
    {"emoji": "👩‍👧‍👧", "name": "Family: Woman, Girl, Girl"}
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
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">People & Body</h2>
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

export default PeoplesAndBody;
