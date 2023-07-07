"use client";

import { useEffect, useState } from "react";
import { getauthentication } from "@/store/Slice";
import { Login } from "@/store/Slice";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import loginpic from  "public/loginpic.jpg"
import Image from "next/image";
import Link from "next/link";
const LoginPage = () => {
  const router = useRouter();
  const [einput, seteInput] = useState("");
  const [password, setPassword] = useState("");
  const [item, setItem] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(Login({ email: einput, password: password }));
    seteInput("");
    setPassword("");
    setItem(true);
  };
  let confirm;
  const auth = useSelector(getauthentication);
  {
    item ? localStorage.setItem("items", JSON.stringify(auth)) : "";
  }

  if (typeof localStorage !== "undefined") {
    const isTokenPresent = JSON.parse(localStorage.getItem("items"));
    confirm = isTokenPresent?.data?.attributes?.email;
  }
  // console.log(isTokenPresent?.data?.attributes?.email)

  useEffect(() => {
    if (confirm != undefined) {
      router.push("/");
    }
  }, [confirm, router]);

  return (
    <>
      <div className="bg-indigo-100 h-[10rem] sm:bg-white">
        <h1 className="text-indigo-800 text-center font-bold text-2xl relative top-14 sm:text-left sm:ml-14">
          BLAZE
        </h1>
      </div>

      <div className="flex-col bg-white shadow-xl ml-8 pl-3 absolute top-[12rem] rounded-lg sm:left-[1%] sm:w-[30%]">
        <h2 className="text-center font-bold text-4xl mb-7 text-indigo-900 mt-4 ">
          Log in
        </h2>

        <div className="mb-3">
          <div className="text-sm font-bold text-gray-700">Email Address</div>

          <input
            type="text"
            placeholder="Email"
            value={einput}
            onChange={(e) => seteInput(e.target.value)}
            className=" focus:outline-indigo-500 text-lg py-4 mb-3 mr-2 px-6 sm:pr-44 border border-gray-300 realtive  bg-indigo-50 focus:bg-white"
            required
          />
        </div>

        <div>
          <div className="text-sm font-bold text-gray-700">Password</div>
          <input
            type="text"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 text-lg px-6 focus:outline-indigo-500 py-4  mb-6 sm:pr-44 bg-indigo-50 focus:bg-white"
            required
          />
        </div>

        <div className="text-center bg-indigo-500 relative right-2 pt-4  font-bold text-white mb-4 sm:pl-2 w-full rounded-full hover:bg-indigo-600">
          <button className="mb-5 text-gray-100" onClick={handleSubmit}>
            Log In
          </button>
        </div>

        <div className="mt-12 text-sm item-center flex justify-center font-semibold gap-2 mb-3">
          <span>Dont have an account ? </span>

          <Link
            href={"#"}
            className="text-indigo-600 hover:text-indigo-800 cursor-pointer"
          >
            Sign up
          </Link>
        </div>
      </div>
 
       <div className="hidden sm:flex ">
        <Image src={loginpic} alt="pic"  className="absolute hidden sm:flex ml-[45rem] h-[100vh] w-[53vw] bottom-0 " />
      </div>  
    </>
  );
};

export default LoginPage;
