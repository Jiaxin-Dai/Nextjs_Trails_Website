import Link from "next/link";
import Image from "next/image";

import CustomButton from "./CustomButton";
import Search from "./Search";



const NavBar = () => (



  <header className='w-full  absolute z-10'>
    
    <div className="navbar bg-base-100 shadow-lg rounded-box">
      <div className="flex-1">
        <button className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </button>
        <a className="btn btn-ghost text-xl">TrailHub</a>
      </div>
      <div className="flex-none gap-2">
        {/* <div className="form-control">
          <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
        </div> */}
        <Search/>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img alt="NavBar Avatar" src="/avatar.png" />
            </div>
          </label>
          <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
);

export default NavBar;
