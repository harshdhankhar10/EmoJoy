import React, { useState } from 'react';

const categories = [
  'Smileys & Emotion', 'People & Body', 'Animals & Nature', 'Food & Drink',
  'Travel & Places', 'Activities', 'Objects', 'Symbols', 'Flags'
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex-shrink-0 flex items-center">
              <span className="text-3xl mr-2" role="img" aria-label="emoji">😊</span>
              <div>
                <h1 className="font-bold text-gray-800 text-xl">EmoJoy</h1>
                <p className="text-xs text-gray-500">Your Ultimate Emoji Directory</p>
              </div>
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-1">
            {categories.map((category, index) => (
              
                <a key={category}
                href={`#${category.toLowerCase().replace(/\s+/g, '-')}`}
                className={`py-4 px-2 text-sm font-medium transition duration-300
                  ${index === 0 ? 'text-indigo-500 border-b-2 border-indigo-500' : 'text-gray-500 hover:text-indigo-500 hover:border-b-2 hover:border-indigo-500'}
                `}
              >
                {category}
              </a>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="outline-none mobile-menu-button">
              <svg className="w-6 h-6 text-gray-500 hover:text-indigo-500"
                fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {categories.map((category) => (
              
               <a key={category}
                href={`#${category.toLowerCase().replace(/\s+/g, '-')}`}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-500 hover:bg-gray-50"
              >
                {category}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;