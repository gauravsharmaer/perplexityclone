
import React, { use, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import LayersIcon from '@mui/icons-material/Layers';
import ShimmerEffect from './ShimmerEffect';
import { useDispatch } from 'react-redux';
import { handlemodel,handlemodelContent } from '@/store/Slice';
import RefrenceLinks from './RefrenceLinks';
import FunctionalButtons from './FunctionalButtons';


const Accordion = (props) => {
  const { acc } = props;
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const[temp,setTemp]=useState(-1)
const dispatch =useDispatch()

  // const toggleAccordion = (i) => {
  //   console.log(i)
  //   setIsLoading(true);
  //   setIsExpanded(!isExpanded);

  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 3000);
  // };

  return (
    <>
      <div className='sm:mt-10 mt-6'>
        <LayersIcon className='ml-4 text-blue-600 mb-3' />
        <span className='mt-3 font-bold text-blue-600'>RELATED</span>
      </div>

      {acc?.map((item, i) => {
      

        
        return (
          <div key={i} className="border rounded-md mb-4 mx-6" onClick={()=>{setIsLoading(true);
    setIsExpanded(!isExpanded);
    setTemp(i)

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);}}>
          
            <div
              className="flex justify-between items-center shadow-xl p-4 cursor-pointer"
              
            >
              <h3 className="text-[16px] font-semibold hover:text-blue-600">{item?.metadata?.title}</h3>
              <span className={`arrow ${temp==i ? 'expanded' : ''}`}>
                <AddIcon className='text-blue-600' />
              </span>
            </div>
            {isLoading && temp==i ? (
              <ShimmerEffect/>
            ) : (
              temp==i && <>
              <div className="p-4 shadow-xl  text-[16px] bg-white">{item.answer}

              <button onClick={()=>{
          dispatch(handlemodelContent(item?.metadata?.description))
          dispatch(handlemodel(true))

         }} className='relative left-[10rem] sm:left-[10rem] top border-2 bg-white font-bold top-10 rounded-full p-2'>Description</button>   
         
         <RefrenceLinks link={item?.metadata?.s3_pdf_url}/>

         </div>
         
              </>
            )}
          </div>
        );
      })}
    </>
  );
};

export default Accordion;



