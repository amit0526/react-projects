import {
  home,
  explore,
  subscriprion,
  library,
  history,
  like,
  showMore,
} from "../../assets/assets";

const Sidebar = ({ sidebarOpen }) => {
  const menuItems = [
    {
      icon: home,
      name: "Home",
    },
    {
      icon: explore,
      name: "Explore",
    },
    {
      icon: subscriprion,
      name: "Subscriptions",
    },
    {
      icon: library,
      name: "Library",
    },
    {
      icon: history,
      name: "History",
    },
    {
      icon: like,
      name: "Liked videos",
    },
  ];

  return (
    <aside
      className={`fixed left-0 top-15 bottom-0 bg-white border-r border-gray-200
      transition-all duration-300 overflow-hidden z-40
      ${sidebarOpen ? "w-55" : "w-0"}`}
    >
      <div className="w-55 px-3 py-4">
        {/* Menu Items */}
        <div className="flex flex-col gap-1">
          {menuItems.map((item) => (
            <button
              key={item.name}
              className="flex items-center gap-5 w-full px-4 py-3 rounded-lg hover:bg-gray-100 transition text-left"
            >
              <img
                src={item.icon}
                alt={item.name}
                className="w-5 h-5 object-contain"
              />

              <span className="text-sm font-medium text-gray-700">
                {item.name}
              </span>
            </button>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-4"></div>

        {/* Show More */}
        <button className="flex items-center gap-5 w-full px-4 py-3 rounded-lg hover:bg-gray-100 transition">
          <img src={showMore} alt="Show more" className="w-5 h-5" />

          <span className="text-sm font-medium text-gray-700">Show more</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
