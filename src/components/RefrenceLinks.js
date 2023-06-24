import React from 'react'
import Link from 'next/link'

import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

const RefrenceLinks = (props) => {
const {link}= props
// console.log(link)
  return (

    

<div className='flex flex-wrap gap-5 mt-3 mx-5 '>

  
<Link href={link } className="block group cursor-pointer" target="_blank">
<div className="rounded-full border   flex items-center     bg-transparent">
<div className="w-[20px] aspect-square rounded-full flex items-center justify-center text-center   ">
{/* <div className=" font-sans text-xs font-medium    selection:text-white dark:selection:bg-opacity-50 selection:bg-opacity-70 rounded-full bg-gray-300 px-2 mr-2">1</div> */}
</div>
<div className="pl-xs -mt-one">
<div className="flex items-center    bg-transparent">
<div className="relative top-one">
<div className="rounded-full overflow-hidden">
{/* <Image className="block w-[16px] h-[16px] " src={utube} alt="quantamagazine.org favicon" width="16" height="16"/> */}
<PictureAsPdfIcon className='text-red-500'/>
</div>
</div>
<div className=" duration-300 transition-all line-clamp-1 break-all default font-sans text-sm text-textMain :bg-super selection:text-white dark:selection:bg-opacity-50 selection:bg-opacity-70 pl-3 font-semibold pr-2">PDF</div>
</div>
</div>
</div>
</Link>
</div>)




  
}




export default RefrenceLinks