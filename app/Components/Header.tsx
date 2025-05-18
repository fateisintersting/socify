
import React from 'react';
import { Heart, Users, MessageSquareHeart } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-swipverse-darkPurple border-b border-swipverse-purple/30 px-4 py-3 flex items-center justify-between">
      <div className="flex items-center">
        <h1 className="font-bold tracking-widest text-xl">S W I P E V E R S E</h1>
        <span className="text-xs text-swipverse-secondary ml-2 block mt-1">UNBIASED DATING APP</span>
      </div>
      
      <div className="hidden md:flex items-center space-x-8">
        <button className="nav-icon">
          <Heart className="w-6 h-6" />
          <span className="ml-2">FIND LOVE</span>
        </button>
        
        <button className="nav-icon">
          <Users className="w-6 h-6" />
          <span className="nav-badge">8</span>
          <span className="ml-2">LIKES YOU</span>
        </button>
        
        <button className="nav-icon">
          <MessageSquareHeart className="w-6 h-6" />
          <span className="nav-badge">1</span>
          <span className="ml-2">MATCHES</span>
        </button>
      </div>
      
      <div className="flex items-center">
        <div className="text-right mr-4 hidden sm:block">
          <div className="font-semibold">Vishal</div>
          <div className="text-xs text-swipverse-secondary">0x10.121</div>
        </div>
        <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
          <span>V</span>
        </div>
      </div>
    </header>
  );
};

export default Header;