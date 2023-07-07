import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import LayersIcon from "@mui/icons-material/Layers";
import ShimmerEffect from "./ShimmerEffect";
import { useDispatch } from "react-redux";
import { handlemodel, handlemodelContent } from "@/store/Slice";
import RefrenceLinks from "./RefrenceLinks";
import FunctionalButtons from "./FunctionalButtons";

const Accordion = (props) => {
  const { acc,inputRef } = props;
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [temp, setTemp] = useState(-1);
  const dispatch = useDispatch();

  return (
    <>
      <div className="sm:mt-10 mt-6">
        <LayersIcon className="ml-4 text-blue-600 mb-3" />
        <span className="mt-3 font-bold text-blue-600">RELATED</span>
      </div>

      {acc?.map((item, i) => {
        return (
          <div
            key={i}
            className="border rounded-md mb-4 mx-6"
            
          >
            <div className="flex justify-between items-center shadow-xl p-4 cursor-pointer">
              <h3 className="text-[16px] font-semibold hover:text-blue-600">
                {item?.metadata?.title}
              </h3>
              <span className={`arrow ${temp == i ? "expanded" : ""}`}>
                <AddIcon className="text-blue-600" onClick={() => {
              setIsLoading(true);
              setIsExpanded(!isExpanded);
              setTemp(i);

              setTimeout(() => {
                setIsLoading(false);
              }, 3000);
            }}/>
              </span>
            </div>
            {isLoading && temp == i ? (
              <ShimmerEffect />
            ) : (
              temp == i && (
                <>
                  <div className="p-4 shadow-xl  text-[16px] bg-white">
                    {item.answer}

<div className="flex-col mt-6 ">
<RefrenceLinks link={item?.metadata?.s3_pdf_url} />
<button
                      onClick={() => {
                        dispatch(
                          handlemodelContent(item?.metadata?.description)
                        );
                        dispatch(handlemodel(true));
                      }}
                      className="relative    border-2 bg-white font-bold  rounded-full p-2 left-[10rem] bottom-8 sm:left-[15rem]"
                    >
                      Description
                    </button>

                   
</div>

<FunctionalButtons reply={item?.answer} link={item?.metadata?.s3_pdf_url} id={item.id}  inputRef={inputRef}/>
                  </div>
                </>
              )
            )}
          </div>
        );
      })}
    </>
  );
};

export default Accordion;
