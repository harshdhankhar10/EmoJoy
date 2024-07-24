import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
const SmileysAndEmotion = () => {
  const [copiedEmoji, setCopiedEmoji] = useState(null);
  const [search, setSearch] = useState("");

  const emojis =[
    {"emoji": "😀", "name": "Grinning Face"},
    {"emoji": "😁", "name": "Grinning Face with Smiling Eyes"},
    {"emoji": "😂", "name": "Face with Tears of Joy"},
    {"emoji": "🤣", "name": "Rolling on the Floor Laughing"},
    {"emoji": "😃", "name": "Smiling Face with Open Mouth"},
    {"emoji": "😄", "name": "Smiling Face with Open Mouth and Smiling Eyes"},
    {"emoji": "😅", "name": "Smiling Face with Open Mouth and Cold Sweat"},
    {"emoji": "😆", "name": "Smiling Face with Open Mouth and Tightly-Closed Eyes"},
    {"emoji": "😉", "name": "Winking Face"},
    {"emoji": "😊", "name": "Smiling Face with Smiling Eyes"},
    {"emoji": "😋", "name": "Face Savoring Delicious Food"},
    {"emoji": "😎", "name": "Smiling Face with Sunglasses"},
    {"emoji": "😍", "name": "Smiling Face with Heart-Shaped Eyes"},
    {"emoji": "😘", "name": "Face Throwing a Kiss"},
    {"emoji": "😗", "name": "Kissing Face"},
    {"emoji": "😙", "name": "Kissing Face with Smiling Eyes"},
    {"emoji": "😚", "name": "Kissing Face with Closed Eyes"},
    {"emoji": "☺️", "name": "Smiling Face"},
    {"emoji": "🙂", "name": "Slightly Smiling Face"},
    {"emoji": "🤗", "name": "Hugging Face"},
    {"emoji": "🤩", "name": "Star-Struck"},
    {"emoji": "🤔", "name": "Thinking Face"},
    {"emoji": "🤨", "name": "Face with Raised Eyebrow"},
    {"emoji": "😐", "name": "Neutral Face"},
    {"emoji": "😑", "name": "Expressionless Face"},
    {"emoji": "😶", "name": "Face Without Mouth"},
    {"emoji": "🙄", "name": "Face with Rolling Eyes"},
    {"emoji": "😏", "name": "Smirking Face"},
    {"emoji": "😣", "name": "Persevering Face"},
    {"emoji": "😥", "name": "Sad but Relieved Face"},
    {"emoji": "😮", "name": "Face with Open Mouth"},
    {"emoji": "🤐", "name": "Zipper-Mouth Face"},
    {"emoji": "😯", "name": "Hushed Face"},
    {"emoji": "😪", "name": "Sleepy Face"},
    {"emoji": "😫", "name": "Tired Face"},
    {"emoji": "😴", "name": "Sleeping Face"},
    {"emoji": "😌", "name": "Relieved Face"},
    {"emoji": "🤓", "name": "Nerd Face"},
    {"emoji": "😛", "name": "Face with Stuck-Out Tongue"},
    {"emoji": "😜", "name": "Face with Stuck-Out Tongue and Winking Eye"},
    {"emoji": "😝", "name": "Face with Stuck-Out Tongue and Tightly-Closed Eyes"},
    {"emoji": "🤤", "name": "Drooling Face"},
    {"emoji": "😒", "name": "Unamused Face"},
    {"emoji": "😓", "name": "Face with Cold Sweat"},
    {"emoji": "😔", "name": "Pensive Face"},
    {"emoji": "😕", "name": "Confused Face"},
    {"emoji": "🙃", "name": "Upside-Down Face"},
    {"emoji": "🤑", "name": "Money-Mouth Face"},
    {"emoji": "😲", "name": "Astonished Face"},
    {"emoji": "☹️", "name": "Frowning Face"},
    {"emoji": "🙁", "name": "Slightly Frowning Face"},
    {"emoji": "😖", "name": "Confounded Face"},
    {"emoji": "😞", "name": "Disappointed Face"},
    {"emoji": "😟", "name": "Worried Face"},
    {"emoji": "😤", "name": "Face with Steam From Nose"},
    {"emoji": "😢", "name": "Crying Face"},
    {"emoji": "😭", "name": "Loudly Crying Face"},
    {"emoji": "😦", "name": "Frowning Face with Open Mouth"},
    {"emoji": "😧", "name": "Anguished Face"},
    {"emoji": "😨", "name": "Fearful Face"},
    {"emoji": "😩", "name": "Weary Face"},
    {"emoji": "🤯", "name": "Exploding Head"},
    {"emoji": "😬", "name": "Grimacing Face"},
    {"emoji": "😰", "name": "Face with Open Mouth and Cold Sweat"},
    {"emoji": "😱", "name": "Face Screaming in Fear"},
    {"emoji": "🥵", "name": "Hot Face"},
    {"emoji": "🥶", "name": "Cold Face"},
    {"emoji": "😳", "name": "Flushed Face"},
    {"emoji": "🤪", "name": "Zany Face"},
    {"emoji": "😵", "name": "Dizzy Face"},
    {"emoji": "🥴", "name": "Woozy Face"},
    {"emoji": "😠", "name": "Angry Face"},
    {"emoji": "😡", "name": "Pouting Face"},
    {"emoji": "🤬", "name": "Face with Symbols on Mouth"},
    {"emoji": "🤥", "name": "Lying Face"},
    {"emoji": "😷", "name": "Face with Medical Mask"},
    {"emoji": "🤒", "name": "Face with Thermometer"},
    {"emoji": "🤕", "name": "Face with Head-Bandage"},
    {"emoji": "🤢", "name": "Nauseated Face"},
    {"emoji": "🤮", "name": "Face Vomiting"},
    {"emoji": "🤧", "name": "Sneezing Face"},
    {"emoji": "🥳", "name": "Partying Face"},
    {"emoji": "🥸", "name": "Disguised Face"},
    {"emoji": "😎", "name": "Smiling Face with Sunglasses"},
    {"emoji": "🤓", "name": "Nerd Face"},
    {"emoji": "🧐", "name": "Face with Monocle"},
    {"emoji": "😕", "name": "Confused Face"},
    {"emoji": "😟", "name": "Worried Face"},
    {"emoji": "😲", "name": "Astonished Face"},
    {"emoji": "☹️", "name": "Frowning Face"},
    {"emoji": "🙁", "name": "Slightly Frowning Face"},
    {"emoji": "😖", "name": "Confounded Face"},
    {"emoji": "😞", "name": "Disappointed Face"},
    {"emoji": "😤", "name": "Face with Steam From Nose"},
    {"emoji": "😢", "name": "Crying Face"},
    {"emoji": "😭", "name": "Loudly Crying Face"},
    {"emoji": "😦", "name": "Frowning Face with Open Mouth"},
    {"emoji": "😧", "name": "Anguished Face"},
    {"emoji": "😨", "name": "Fearful Face"},
    {"emoji": "😩", "name": "Weary Face"},
    {"emoji": "🤯", "name": "Exploding Head"},
    {"emoji": "😬", "name": "Grimacing Face"},
    {"emoji": "😰", "name": "Face with Open Mouth and Cold Sweat"},
    {"emoji": "😱", "name": "Face Screaming in Fear"},
    {"emoji": "🥵", "name": "Hot Face"},
    {"emoji": "🥶", "name": "Cold Face"},
    {"emoji": "😳", "name": "Flushed Face"},
    {"emoji": "🤪", "name": "Zany Face"},
    {"emoji": "😵", "name": "Dizzy Face"},
    {"emoji": "🥴", "name": "Woozy Face"},
    {"emoji": "😠", "name": "Angry Face"},
    {"emoji": "😡", "name": "Pouting Face"},
    {"emoji": "🤬", "name": "Face with Symbols on Mouth"},
    {"emoji": "🤥", "name": "Lying Face"},
    {"emoji": "😷", "name": "Face with Medical Mask"},
    {"emoji": "🤒", "name": "Face with Thermometer"},
    {"emoji": "🤕", "name": "Face with Head-Bandage"},
    {"emoji": "🤢", "name": "Nauseated Face"},
    {"emoji": "🤮", "name": "Face Vomiting"},
    {"emoji": "🤧", "name": "Sneezing Face"},
    {"emoji": "🥳", "name": "Partying Face"},
    {"emoji": "🥸", "name": "Disguised Face"},
    {"emoji": "😵", "name": "Dizzy Face"},
    {"emoji": "😴", "name": "Sleeping Face"},
    {"emoji": "😴", "name": "Sleeping Face"},
    {"emoji": "🥱", "name": "Yawning Face"},
    {"emoji": "😈", "name": "Smiling Face with Horns"},
    {"emoji": "👿", "name": "Angry Face with Horns"},
    {"emoji": "👹", "name": "Japanese Ogre"},
    {"emoji": "👺", "name": "Japanese Goblin"},
    {"emoji": "💀", "name": "Skull"},
    {"emoji": "☠️", "name": "Skull and Crossbones"},
    {"emoji": "👻", "name": "Ghost"},
    {"emoji": "👽", "name": "Alien"},
    {"emoji": "👾", "name": "Alien Monster"},
    {"emoji": "🤖", "name": "Robot Face"},
    {"emoji": "💩", "name": "Pile of Poo"},
    {"emoji": "😺", "name": "Grinning Cat Face with Smiling Eyes"},
    {"emoji": "😸", "name": "Grinning Cat Face with Smiling Eyes"},
    {"emoji": "😹", "name": "Cat Face with Tears of Joy"},
    {"emoji": "😻", "name": "Smiling Cat Face with Heart-Eyes"},
    {"emoji": "😼", "name": "Cat Face with Wry Smile"},
    {"emoji": "😽", "name": "Kissing Cat Face with Closed Eyes"},
    {"emoji": "🙀", "name": "Weary Cat Face"},
    {"emoji": "😿", "name": "Crying Cat Face"},
    {"emoji": "😾", "name": "Pouting Cat Face"},
    {"emoji": "👋", "name": "Waving Hand"},
    {"emoji": "🤚", "name": "Raised Back of Hand"},
    {"emoji": "🖐️", "name": "Hand with Fingers Splayed"},
    {"emoji": "✋", "name": "Raised Hand"},
    {"emoji": "🖖", "name": "Vulcan Salute"},
    {"emoji": "👌", "name": "OK Hand"},
    {"emoji": "✌️", "name": "Victory Hand"},
    {"emoji": "🤞", "name": "Crossed Fingers"},
    {"emoji": "🤟", "name": "Love-You Gesture"},
    {"emoji": "🤘", "name": "Sign of the Horns"},
    {"emoji": "🤙", "name": "Call Me Hand"},
    {"emoji": "👈", "name": "Backhand Index Pointing Left"},
    {"emoji": "👉", "name": "Backhand Index Pointing Right"},
    {"emoji": "👆", "name": "Backhand Index Pointing Up"},
    {"emoji": "🖕", "name": "Middle Finger"},
    {"emoji": "👇", "name": "Backhand Index Pointing Down"},
    {"emoji": "☝️", "name": "Index Pointing Up"},
    {"emoji": "👍", "name": "Thumbs Up"},
    {"emoji": "👎", "name": "Thumbs Down"},
    {"emoji": "✊", "name": "Raised Fist"},
    {"emoji": "👊", "name": "Oncoming Fist"},
    {"emoji": "🤛", "name": "Left-Facing Fist"},
    {"emoji": "🤜", "name": "Right-Facing Fist"},
    {"emoji": "👏", "name": "Clapping Hands"},
    {"emoji": "🙌", "name": "Raising Hands"},
    {"emoji": "👐", "name": "Open Hands"},
    {"emoji": "🤲", "name": "Palms Up Together"},
    {"emoji": "🤝", "name": "Handshake"},
    {"emoji": "🙏", "name": "Folded Hands"},
    {"emoji": "✍️", "name": "Writing Hand"},
    {"emoji": "💅", "name": "Nail Polish"},
    {"emoji": "🤳", "name": "Selfie"},
    {"emoji": "💪", "name": "Flexed Biceps"},
    {"emoji": "🦾", "name": "Mechanical Arm"},
    {"emoji": "🦿", "name": "Mechanical Leg"},
    {"emoji": "🦵", "name": "Leg"},
    {"emoji": "🦶", "name": "Foot"},
    {"emoji": "👂", "name": "Ear"},
    {"emoji": "🦻", "name": "Ear with Hearing Aid"},
    {"emoji": "👃", "name": "Nose"},
    {"emoji": "🧠", "name": "Brain"},
    {"emoji": "🫀", "name": "Anatomical Heart"},
    {"emoji": "🫁", "name": "Lungs"},
    {"emoji": "🦷", "name": "Tooth"},
    {"emoji": "🦴", "name": "Bone"},
    {"emoji": "👀", "name": "Eyes"},
    {"emoji": "👁️", "name": "Eye"},
    {"emoji": "👅", "name": "Tongue"},
    {"emoji": "👄", "name": "Mouth"}
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
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Smileys & Emotion</h2>
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

export default SmileysAndEmotion;
