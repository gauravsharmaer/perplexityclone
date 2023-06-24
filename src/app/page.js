// "use client"
// import React, { useEffect, useRef, useState} from 'react';

// import ShimmerEffect from '@/components/ShimmerEffect';
// import ChatGPTTypingEffect from '@/components/ChatGPTTypingEffect';
// import AccordianItem from '@/components/Accordian';
// import RefrenceLinks from '@/components/RefrenceLinks';
// import FunctionalButtons from '@/components/FunctionalButtons';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import Navbar from '@/components/Navbar';


// const HomePage = () => {
//   const [reply, setReply] = useState('');
//   const [input, setInput] = useState('');
//   const [isSearching, setIsSearching] = useState(false);
//   const [alldataholder,setAllDataHolder] =useState([])
//   const[inputShow,setInputShow]=useState("")
//   const[title,setTitle]=useState("")
//   const[url,setUrl]=useState("")
//   const inputRef=useRef(null)
// useEffect(()=>{
//   if(input.length==0){
//     setReply("")
//   }
// },[input])

//   const handleSearch = async () => {
//     setIsSearching(true);
//       setInputShow(input)
//     const options = {
//       method: 'POST',
//       // body: JSON.stringify({message :input}),
//       // headers: {
//       //   'Content-Type': 'application/json',
//       // },
//     };

//     const response = await fetch(`https://inpharmd-ai.herokuapp.com/api/v2/search?prompt=${input}`, options);
//     const data = await response.json();
//     const result = data.prompts.filter((item) => item.prompt === input);
   
//     setAllDataHolder(result)
//     setReply(result[0].answer);
//     setTitle(result[0]?.metadata?.title)
//     setUrl(result[0]?.metadata?.s3_pdf_url)
//     setIsSearching(false);
//   };
// console.log(alldataholder)

//   return (
//     <>
//   <Navbar/>
//     <h1 className='ml-28 font-bold mt-5 text-3xl sm:w-[40%] relative sm:sm:left-[43%] sm:bottom-[1px]'>Blaze</h1>
    
//     <div className='sm:w-[40%] relative sm:left-[36%] sm:bottom-[1px]'>
   
//          {isSearching ? (
//           <ShimmerEffect />
//         ) : (
//           <>
     


//       <ChatGPTTypingEffect message={reply} input={inputShow} title={title}/> 

   
//         {reply.length >0 ? (<>  
           
        
//             <RefrenceLinks   link={url} />
          
                
          
       
//         <FunctionalButtons reply={reply} link={url} inputRef={inputRef}/>


//            <AccordianItem acc={alldataholder}/> 
//           </>):""} 
//           </>
//         )}  

       
//       <div>
//         <input
//           type="text"
//           value={input}
//           ref={inputRef}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder="Ask anything..."
//           className="w-[67%] focus:outline-blue-600 border-gray-400 px-3 py-4 mb-3 rounded-md sm:w-[45rem] sm:pl-4 bg-gray-100
//           mt-2 ml-10 shadow-xl relative sm:right-14"
//         />
//       </div>

//       <div>
//         <button
//           onClick={handleSearch}
//           className="relative left-[68%] bottom-[72px] sm:left-[41rem] bg-blue-600 mb-2 mt-3  p-1  rounded-full text-white "
//         >
//         <ArrowForwardIcon/>
          
//         </button>
//       </div>

      
//     </div>
//     </>
//   );
// };

// export default HomePage;






"use client"
import React, { useEffect, useRef, useState} from 'react';
import { useDispatch,useSelector } from 'react-redux';

import ShimmerEffect from '@/components/ShimmerEffect';
import ChatGPTTypingEffect from '@/components/ChatGPTTypingEffect';
import AccordianItem from '@/components/Accordian';
import RefrenceLinks from '@/components/RefrenceLinks';
import FunctionalButtons from '@/components/FunctionalButtons';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Navbar from '@/components/Navbar';
import MoreDescription from '@/components/MoreDescription';

import { postquestion } from '@/store/Slice';
import { handlemodelContent,handlemodel } from '@/store/Slice';
import { faL } from '@fortawesome/free-solid-svg-icons';

const HomePage = () => {
  const state=useSelector((state)=>state)
  const dispatch =useDispatch()
  const [reply, setReply] = useState('');
  const [input, setInput] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [alldataholder,setAllDataHolder] =useState([])
  const[inputShow,setInputShow]=useState("")
  const[title,setTitle]=useState("")
  const[url,setUrl]=useState("")
  const [showDescription,setShowDescription]=useState(false)
  const inputRef=useRef(null)
const [isbtnClckd,setIsBtnClckd]=useState(false)

useEffect(()=>{

  if(input.length==0){
    setReply("")
  }
},[input])





  const handleSearch = async () => {
    dispatch(postquestion(input))
    setIsBtnClckd(true)
    setIsSearching(true);
      setInputShow(input)
    const options = {
      method: 'POST',
      // body: JSON.stringify({message :input}),
      // headers: {
      //   'Content-Type': 'application/json',
      // },
    };

    const response = await fetch(`https://inpharmd-ai.herokuapp.com/api/v2/search?prompt=${input}`, options);
    const data = await response.json();
    const result = data.prompts.filter((item) => item.prompt_text === input);
    console.log(data)
    setAllDataHolder(result)
    setReply(result[0].answer);
    setTitle(result[0]?.metadata?.title)
    setUrl(result[0]?.metadata?.s3_pdf_url)
    setIsSearching(false);
  };


  return (
    <>
  <Navbar/>
    <h1 className='ml-28 font-bold mt-5 text-3xl sm:w-[40%] relative sm:sm:left-[43%] sm:bottom-[1px]'>Blaze</h1>
  
    <div className='sm:w-[40%] relative sm:left-[36%] sm:bottom-[1px]'>
   
         {isSearching ? (
          <ShimmerEffect />
        ) : (
          <>
     

          {isbtnClckd && state?.user?.prompts?.prompts[0]?.answer  &&  <ChatGPTTypingEffect message={state?.user?.prompts?.prompts[0]?.answer} input={inputShow} title={title}/> }  
      

      
        {reply.length >0 ? (<>  
         <button onClick={()=>{
          dispatch(handlemodelContent(state?.user?.prompts?.prompts[0]?.metadata?.description))
          dispatch(handlemodel(true))

         }} className='relative left-[15rem] sm:left-[30rem] font-bold bg-white p-2 rounded-full border-2 
         top-12 '
         >Description</button>  
         
          <MoreDescription isVisible={state?.user?.modelactive} onClose={()=>dispatch(handlemodel(false)) } 
           description={state.user.modelcontent}/>


            <RefrenceLinks   link={url} />
          
                
          
       
        <FunctionalButtons reply={reply} link={url} inputRef={inputRef}/>


<AccordianItem acc={alldataholder}/>
          </>):""} 
          </>
        )}  

   
      <div>
        <input
          type="text"
          value={input}
          ref={inputRef}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask anything..."
          className="w-[67%] focus:outline-blue-600 border-gray-400 px-3 py-4 mb-3 rounded-md sm:w-[45rem] sm:pl-4 bg-gray-100
          mt-2 ml-10 shadow-xl relative sm:right-14"
        />
      </div>

      <div>
        <button
          onClick={handleSearch}
          // onClick={()=>dispatch(postquestion(input))}
          className="relative left-[68%] bottom-[72px] sm:left-[41rem] bg-blue-600 mb-2 mt-3  p-1  rounded-full text-white "
        >
        <ArrowForwardIcon/>
          
        </button>
      </div>

      
    </div>
    </>
  );
};

export default HomePage;