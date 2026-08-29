import { useState } from "react";

import {
  menu,
  logo,
  search,
  voiceSearch,
  notification,
  userProfile,
} from "../../assets/assets";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <nav className="h-15 px-3 sm:px-5 flex items-center justify-between border-b border-gray-200 bg-white gap-3">
      {/* Left */}
      <div className="flex items-center gap-3 shrink-0">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="w-8 h-8 flex items-center justify-center cursor-pointer"
        >
          <img src={menu} alt="Menu" className="w-6 h-6" />
        </button>

        <img
          src={logo}
          alt="VidTube"
          className="w-22.5 sm:w-26.25 cursor-pointer"
        />
      </div>

      {/* Search */}
      <div className="flex items-center justify-center gap-2 flex-1">
        {/* Search box */}
        <div className="hidden sm:flex items-center border border-gray-300 rounded-full overflow-hidden h-10 w-full max-w-150">
          <input
            type="text"
            placeholder="Search"
            className="flex-1 min-w-0 h-full pl-6! pr-3! outline-none text-sm "
          />

          <button className="w-14 h-full flex items-center justify-center bg-gray-50 border-l border-gray-300 shrink-0">
            <img src={search} alt="Search" className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile search */}
        <button className="sm:hidden w-9 h-9 flex items-center justify-center">
          <img src={search} alt="Search" className="w-5 h-5" />
        </button>

        {/* Voice */}
        <button className="hidden sm:flex w-10 h-10 rounded-full bg-gray-100 items-center justify-center shrink-0">
          <img src={voiceSearch} alt="Voice Search" className="w-5 h-5" />
        </button>
      </div>

      {/* Right */}
      <div className="flex items-center gap-3 sm:gap-5 shrink-0">
        <img
          src={notification}
          alt="Notifications"
          className="hidden sm:block w-6 h-6 cursor-pointer"
        />

        <img
          src={userProfile}
          alt="Profile"
          className="w-8 h-8 rounded-full cursor-pointer"
        />
      </div>
    </nav>
  );
};

export default Navbar;
