<div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* Page content here */}
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
      Open drawer
    </label>
  </div>
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
      <li><a>🔍Discover</a></li>
      <li><a>▦Taskfeed</a></li>
      <li><a>🔖Bookmarks</a></li>
      <li><a>🔔Inbox</a></li>
      <li><a>👤Profile</a></li>
    </ul>
  </div>
</div>