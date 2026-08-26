import {
  menu,
  logo,
  search,
  voiceSearch,
  notification,
  userProfile,
} from "../../assets/assets";

const Navbar = () => {
  return (
    <nav className="h-15 px-4 flex items-center justify-between border-b border-gray-200 bg-white">
      {/* Left */}
      <div className="flex items-center gap-4">
        <img src={menu} alt="Menu" className="w-6 h-6 cursor-pointer" />

        <img src={logo} alt="YouTube" className="w-27.5 cursor-pointer" />
      </div>

      {/* Center */}
      <div className="flex items-center gap-3 w-[45%]">
        <div className="flex items-center border border-gray-300 rounded-full overflow-hidden flex-1 h-10">
          <input
            type="text"
            placeholder="Search"
            className="flex-1 px-4 outline-none text-sm"
          />

          <button className="w-14 h-full flex items-center justify-center bg-gray-50 border-l border-gray-300">
            <img src={search} alt="Search" className="w-5 h-5" />
          </button>
        </div>

        <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
          <img src={voiceSearch} alt="Voice Search" className="w-5 h-5" />
        </button>
      </div>

      {/* Right */}
      <div className="flex items-center gap-5">
        <img
          src={notification}
          alt="Notifications"
          className="w-6 h-6 cursor-pointer"
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
