
import React from 'react'

const AccuracyModel = (props) => {
    const {isVisible,onClose}=props
    if(!isVisible){
        return null
    }

    const handleClose=(e)=>{
        if(e.target.id === "wrapper"){
            onClose()
        }
    }
  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50'
    id='wrapper' onClick={handleClose}>
         <div className='w-[400px] flex flex-col bg-white mx-3 rounded-xl'>
            <button className='rounded-full bg-slate-300 text-xl place-self-end text-blue-600 px-2 mt-2 mr-3' onClick={()=>onClose()}>
             X
             </button>
              <div className='bg-white font-bold text-2xl  py-2 pl-5 sm:pl-10'>Help us improve</div>
              <div className='bg-white sm:pl-10 text-lg  py-2  px-2 pl-3 text-gray-400  border-2  border-t-white border-l-white border-r-white border-b-gray-200'>Provide additional feedback on this answer</div>

              <div className='bg-white pl-1 py-2 sm:pl-10'><input placeholder='Write a better answer' className=' p-2 focus:grayscale  rounded-full border-2 sm:pr-[8rem] border-gray-200' /></div>
               <div className='bg-white sm:ml-12  pl-3 py-2 border-2 ml-2 mr-12 rounded-full border-gray-200 mb-2 sm:mr-7'>
                <input type='checkbox' className='p-2 '/><span  className='text-[16px] p-3 '>Inaccurate</span>
                             
               </div>
               <div className='bg-white  pl-3 py-2 border-2 ml-2 mr-12 rounded-full border-gray-200 mb-2 sm:ml-12 sm:mr-7'>
                <input type='checkbox' className='p-2'/><span  className='text-[16px] p-3'>Out of date</span>
                              
               </div>
               <div className='bg-white sm:ml-12 pl-3 py-2 border-2 ml-2 mr-12 rounded-full border-gray-200 mb-2 sm:mr-7'>
                <input type='checkbox' className='p-2'/><span  className='text-[16px] p-3'>Too short</span>
                              
               </div>
               <div className='bg-white sm:ml-12 pl-3 py-2 border-2 ml-2 mr-12 rounded-full border-gray-200 mb-2 sm:mr-7'>
                <input type='checkbox' className='p-2'/><span  className='text-[16px] p-3'>Harmful</span>
                              
               </div>
               <div className='bg-white sm:ml-12 pl-3 py-2 border-2 ml-2 mr-12 rounded-full border-gray-200 mb-2 sm:mr-7'>
                <input type='checkbox' className='p-2'/><span  className='text-[16px] p-3'>This is not helpful</span>
                              
               </div>
               <div className='flex justify-end gap-4'><button>Cancel</button>
               <button className='bg-blue-600 p-3 m-2 rounded-md text-white font-bold'>Submit</button></div>
               
            

         </div>
    </div>
  )
}

export default AccuracyModel