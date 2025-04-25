import Link from "next/link";
import Image from "next/image";
// import "./NavBar.css"; // Adjust the path if needed

const NavBar = () => {
  return (
    <nav className="border rounded-4xl border-[#FFEC5D] flex justify-between px-10 py-1 items-center h-15">
      <div>
        <img src="/lg.png" alt="Logo" width={69} height={65} />
      </div>

      <div>
        <ul className="flex gap-15">
          <li>Home</li>
          <li className="flex items-center space-x-1">
            <img src="/search.png" alt="Search" width={26} height={26} />
            <span>Discover</span>
          </li>

          <li>Events</li>
        </ul>
      </div>

      <div>
        <img src="/account.png" alt="Account" width={40} height={40} />
      </div>
    </nav>
  );
};

export default NavBar;
