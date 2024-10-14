import { Link } from "@tanstack/react-router";

const Sidebar = ({ children }) => {
  return (
    <div className="drawer lg:drawer-open rounded-md">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center overflow-y-hidden">
        {children}
        <label htmlFor="my-drawer-2" className="btn btn-square btn-md btn-neutral w-8 h-8 fixed top-24 left-0 z-10 lg:hidden">
          →
        </label>
      </div>
      <div className="drawer-side mt-20 lg:mt-16 lg:ml-12 lg:w-64">
        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay lg:hidden"></label>
        <div className="flex flex-col h-screen pt-8">
          <ul className="menu bg-base-200 text-base-content justify-left">
          <li className="py-2">
            <Link to="/" className="[&.active]:font-bold flex items-center">
              <span className="mr-2">🔍</span>
              Discover
            </Link>
          </li>
          <li className="py-2">
            <Link to="/taskboard" className="[&.active]:font-bold flex items-center">
              <span className="mr-2">▦</span>
              Taskboard
            </Link>
          </li>
          <li className="py-2">
            <a className="flex items-center">
              <span className="mr-2">🔖</span>
              Bookmarks
            </a>
          </li>
          <li className="py-2">
            <a className="flex items-center">
              <span className="mr-2">▦</span>
              Taskfeed
            </a>
          </li>
          <li className="py-2">
            <a className="flex items-center">
              <span className="mr-2">🔔</span>
              Inbox
            </a>
          </li>
          <li className="py-2">
            <a className="flex items-center">
              <span className="mr-2">👤</span>
              Profile
            </a>
          </li>
          </ul>
          <div className="bg-base-200 p-4 border-t border-base-300">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="avatar mr-4">
                  <div className="w-8 rounded-full">
                    <img src="src/assets/laptop.svg" className="rounded-full" />
                  </div>
                </div>
                <span className="text-lg font-bold">User Name</span>
              </div>
              <div className="flex items-center">
                <button className="btn btn-square btn-xs btn-neutral ml-2 mr-2">⚙️</button>
                <button className="btn btn-square btn-xs btn-neutral">🔔</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;