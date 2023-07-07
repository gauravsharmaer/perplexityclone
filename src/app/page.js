"use client";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ShimmerEffect from "@/components/ShimmerEffect";
import ChatGPTTypingEffect from "@/components/ChatGPTTypingEffect";
import AccordianItem from "@/components/Accordian";
import RefrenceLinks from "@/components/RefrenceLinks";
import FunctionalButtons from "@/components/FunctionalButtons";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Navbar from "@/components/Navbar";
import MoreDescription from "@/components/MoreDescription";
import AiSummary from "@/components/AiSummary";
import { postquestion, aiSummary } from "@/store/Slice";
import { handlemodelContent, handlemodel, getUserStatus } from "@/store/Slice";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const state = useSelector((state) => state);
  const userStatus = useSelector(getUserStatus);
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const router = useRouter();

  const [reply, setReply] = useState("");
  const [input, setInput] = useState("");
  const [inputShow, setInputShow] = useState("");
  const [isbtnClckd, setIsBtnClckd] = useState(false);
  const [AiSummarymodel, setAiSummaryModel] = useState(false);

  // const isTokenPresent=JSON.parse(localStorage.getItem("items"))
  // let confirm=isTokenPresent?.data?.attributes?.email

  //   useEffect(() => {
  //     if (input.length === 0) {
  //       setReply("");
  //     }
  //     if(confirm ===undefined){
  //       router.push("/login")
  //   }
  //   }, [input,confirm]);

  let confirm = undefined;

  // Check if localStorage is available
  if (typeof localStorage !== "undefined") {
    const isTokenPresent = JSON.parse(localStorage.getItem("items"));
    confirm = isTokenPresent?.data?.attributes?.email;
  }

  useEffect(() => {
    if (input.length === 0) {
      setReply("");
    }

    // Redirect to login page if necessary data is not present
    if (typeof localStorage === "undefined" || confirm === undefined) {
      router.push("/login");
    }
  }, [input, confirm, router]);

  const handleSearch = () => {
    dispatch(postquestion(input));

    setIsBtnClckd(true);
    setInputShow(input);
  };



  const handleLogout=()=>{
    localStorage.clear()
    router.push("/login");
  }

  return (
    <>
    {/* <button onClick={handleLogout}>signout</button> */}
      <Navbar />
      <h1 className="ml-28 font-bold mt-5 text-3xl sm:w-[40%] relative sm:sm:left-[43%] sm:bottom-[1px]">
        Blaze
      </h1>

      <div className="sm:w-[40%] relative sm:left-[36%] sm:bottom-[1px]">
        {userStatus === "loading" ? (
          <ShimmerEffect />
        ) : (
          <>
            {isbtnClckd && state?.user?.prompts?.prompts[0]?.answer && (
              <ChatGPTTypingEffect
                message={state?.user?.prompts?.prompts[0]?.answer}
                input={inputShow}
              />
            )}

            {isbtnClckd &&
              state?.user?.prompts?.prompts[0]?.answer.length > 0 && (
                <>
                  <button
                    onClick={() => {
                      dispatch(
                        handlemodelContent(
                          state?.user?.prompts?.prompts[0]?.metadata
                            ?.description
                        )
                      );
                      dispatch(handlemodel(true));
                    }}
                    className="relative left-[15rem] sm:left-[20rem] font-bold bg-white p-1 rounded-full border-2 top-12"
                  >
                    Description
                  </button>

                  <MoreDescription
                    isVisible={state?.user?.modelactive}
                    onClose={() => dispatch(handlemodel(false))}
                    description={state.user.modelcontent}
                  />

                  <button
                    onClick={() => {
                      dispatch(aiSummary(state?.user?.prompts?.prompts[0]?.id)),
                        setAiSummaryModel(true);
                    }}
                    className="relative sm:left-[3rem]  sm:top-12
                  font-bold bg-white p-1 rounded-full border-2 pl-2 top-[48px] left-4 "
                  >
                    AiSummary
                  </button>

                  {isbtnClckd && state?.user?.prompts?.prompts[0]?.answer && (
                    <RefrenceLinks
                      link={
                        state?.user?.prompts?.prompts[0]?.metadata?.s3_pdf_url
                      }
                    />
                  )}

                  <AiSummary
                    description={state.user.ai_summary.ai_summary}
                    isVisible={AiSummarymodel}
                    onClose={() => setAiSummaryModel(false)}
                  />

                  {isbtnClckd && state?.user?.prompts?.prompts[0]?.answer && (
                    <FunctionalButtons
                      reply={state?.user?.prompts?.prompts[0]?.answer}
                      link={
                        state?.user?.prompts?.prompts[0]?.metadata?.s3_pdf_url
                      }
                      inputRef={inputRef}
                      id={state?.user?.prompts?.prompts[0]?.id}
                    />
                  )}

                  {isbtnClckd && state?.user?.prompts?.prompts[0]?.answer && (
                    <AccordianItem
                      acc={state?.user?.prompts?.prompts}
                      inputRef={inputRef}
                    />
                  )}
                </>
              )}
          </>
        )}

        <div>
          <input
            type="text"
            value={input}
            ref={inputRef}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask anything..."
            className="w-[67%] focus:outline-blue-600 border-gray-400 px-3 py-4 mb-3 rounded-md sm:w-[45rem] sm:pl-4 bg-gray-100 mt-2 ml-10 shadow-xl relative sm:right-14"
          />
        </div>

        <div>
          <button
            onClick={handleSearch}
            className="relative left-[68%] bottom-[72px] sm:left-[41rem] bg-blue-600 mb-2 mt-3  p-1  rounded-full text-white"
          >
            <ArrowForwardIcon />
          </button>
        </div>
      </div>
    </>
  );
};

export default HomePage;
