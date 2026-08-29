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
      className={`
        fixed left-0 top-15 bottom-0
        bg-white border-r border-gray-200
        z-40 overflow-hidden
        transition-all duration-300
        ${sidebarOpen ? "w-55" : "w-0"}
      `}
    >
      <div className="w-55 px-3 py-4">
        {/* Main Menu */}
        <div className="flex flex-col gap-1">
          {menuItems.map((item, index) => (
            <button
              key={item.name}
              className={`
                flex items-center gap-5
                w-full px-4 py-3
                rounded-lg
                hover:bg-gray-100
                transition-colors
                text-left
                ${index === 0 ? "bg-gray-100" : ""}
              `}
            >
              <img
                src={item.icon}
                alt={item.name}
                className="w-5 h-5 object-contain shrink-0"
              />

              <span className="text-sm text-gray-700 whitespace-nowrap">
                {item.name}
              </span>
            </button>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-4" />

        {/* Show More */}
        <button
          className="
            flex items-center gap-5
            w-full px-4 py-3
            rounded-lg
            hover:bg-gray-100
            transition-colors
            text-left
          "
        >
          <img
            src={showMore}
            alt="Show more"
            className="w-5 h-5 object-contain shrink-0"
          />

          <span className="text-sm text-gray-700 whitespace-nowrap">
            Show more
          </span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
