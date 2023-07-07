import React from 'react'
import SouthEastIcon from '@mui/icons-material/SouthEast';
const ShimmerEffect = () => {
  return (
    <div className="mt-6 w-full">
    <div className="font-bold text-2xl mt-6 text-blue-600"><SouthEastIcon/> Blaze</div>
    <div className="animate-pulse mt-2">
      <div className="h-1 bg-gray-300 rounded w-full"></div>
      <div className="h-1 bg-gray-300 rounded mt-2 w-full "></div>
      <div className="h-1 bg-gray-300 rounded mt-2 w-[50%]"></div>
      <div className="h-1 bg-gray-300 rounded mt-2 w-[20%]"></div>
    
    </div>
  </div>
  )
}

export default ShimmerEffect