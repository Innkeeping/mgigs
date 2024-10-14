const Sidebar = ({ children }) => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {children}
        <label htmlFor="my-drawer-2" className="btn btn-square btn-md btn-neutral w-8 h-8 fixed top-24 left-0 z-10 lg:hidden">
          →
        </label>
      </div>
      <div className="drawer-side mt-20 lg:mt-16">
        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay lg:hidden"></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 ml-14">
          <li><a>🔍Discover</a></li>
          <li><a>▦Taskfeed</a></li>
          <li><a>🔖Bookmarks</a></li>
          <li><a>🔔Inbox</a></li>
          <li><a>👤Profile</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;