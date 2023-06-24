import React from "react";
import LayersIcon from "@mui/icons-material/Layers";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import ShareIcon from "@mui/icons-material/Share";
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import TwitterIcon from '@mui/icons-material/Twitter';
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="hidden fixed sm:flex flex-col sm:h-max sm:w-[20vw]  bg-gray-100  sm:justify-around">
      <div>
        {" "}
        <h1 className="ml-[10%] mt-6 mb-6 text-2xl font-bold">Blaze</h1>
      </div>
      <div className="relative  top-[3px] right-2 mb-6">
        {" "}
        <input
          type="text"
          placeholder="New Thread"
          className="p-2 px-4 rounded-full focus:outline-blue-600 ml-4"
        />
      </div>
      <button className="mb-4 relative right-20 text-gray-600 hover:text-black hover:bg-slate-200 font-bold">
        <NewspaperIcon className="mx-2" />
        Popular
      </button>
      <button className="mb-4  relative right-16 text-gray-600 font-bold hover:text-black hover:bg-slate-200">
        <LayersIcon className="mx-2" />
        Your Threads
      </button>
      <button className="mb-20  relative right-20 text-gray-600 font-bold hover:text-black hover:bg-slate-200">
        <ShareIcon className="mx-2" />
        AI profile
      </button>
      {/* <div className="bg-white p-2 rounded-md mb-5 mx-3">
        <h2 className="font-bold">
          Try <span className="text-blue-600">Pro</span>
        </h2>
        <p className="text-gray-500 mb-1">
          Perplexity Pro gives you more Copilot uses and GPT-4 access.
        </p>
        <button className="bg-blue-600 text-white p-2 font-bold rounded-md">
          Learn More
        </button>
      </div> */}
      {/* <div className="flex gap-2 mb-4">
        <p className="bg-gray-500 rounded-full p-6 ml-4"></p>
        <div>
          <p className="font-bold">user</p>
          <p className="text-gray-400">Settings</p>
        </div>
      </div>
      <button className="font-bold mx-6 p-3 bg-gray-200 rounded-md hover:text-gray-500 mb-3"><SmartphoneIcon className="mx-2"
      />Download</button>
      <div className="flex gap-5 mb-3">
        <button className="ml-3 text-gray-400 hover:text-black hover:bg-gray-200 p-2 rounded-md"><TwitterIcon className="mx-2"
        />follow</button>
        <button className="ml-3 text-gray-400 hover:text-black hover:bg-gray-200 p-2 rounded-md">
        join</button>
      </div> */}
{/* 
       <div>
        <ul className="list-none flex gap-3 px-4">
          <li className="text-gray-400"><Link href="#">Pro</Link></li>
          <li className="text-gray-400"><Link href="#">About</Link></li>
          <li className="text-gray-400"><Link href="#">Blog</Link></li>
          <li className="text-gray-400"><Link href="#">Privacy Policy</Link></li>
        </ul>
      </div>
      <p className="pl-3 mb-20 text-gray-400"><Link href="#">Terms of Service</Link></p> */}
    </div> 




  );
};

export default Navbar;
