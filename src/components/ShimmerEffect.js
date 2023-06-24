import React from 'react'
import SouthEastIcon from '@mui/icons-material/SouthEast';
const ShimmerEffect = () => {
  return (
    <div className="mt-6 w-full">
    <div className="font-bold text-2xl mt-6 text-blue-600"><SouthEastIcon/> Blaze</div>
    <div className="animate-pulse mt-2">
      <div className="h-2 bg-gray-300 rounded"></div>
      <div className="h-2 bg-gray-300 rounded mt-2"></div>
      <div className="h-2 bg-gray-300 rounded mt-2"></div>
      <div className="h-2 bg-gray-300 rounded mt-2"></div>
      <div className="h-2 bg-gray-300 rounded mt-2"></div>
    </div>
  </div>
  )
}

export default ShimmerEffect