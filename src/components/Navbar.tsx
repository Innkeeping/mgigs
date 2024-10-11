
const Navbar = () => {
  return (
    <div className="sticky top-0 navbar bg-base-100 min-h-0 z-[1001] justify-between shadow-md shadow-white px-0 sm:px-2 mb-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li><a>Recent</a></li>
            <li>
              <a>Categories</a>
              <ul className="p-2">
                <li><a>Bounties</a></li>
                <li><a>Semi-long</a></li>
                <li><a>Long-term</a></li>
                <li><a>DAOs</a></li>
              </ul>
            </li>
            <li><a>Post</a></li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">mGigs</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a>Recent</a></li>
          <li>
            <details>
              <summary>Categories</summary>
              <ul className="p-2">
              <li><a>Bounties</a></li>
                <li><a>Semi-long</a></li>
                <li><a>Long-term</a></li>
                <li><a>DAOs</a></li>
              </ul>
            </details>
          </li>
          <li><a>Post</a></li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Connect Wallet</a>
      </div>
    </div>
  );
};

export default Navbar;