"use client"
import React, { useState } from 'react'
import FlagIcon from '@mui/icons-material/Flag';
import DataArrayIcon from '@mui/icons-material/DataArray';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import Tooltip from '@mui/material/Tooltip';
import copy from 'clipboard-copy';
import Modal from './Modal';
import AccuracyModel from './AccuracyModel';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { updatequestion } from '@/store/Slice';
import { useDispatch } from 'react-redux';

const FunctionalButtons = (props) => {
 const {reply,link,inputRef,id} =props
 
  const[showModel,setShowModal]=useState(false)
  const[showaModel,setShowaModal]=useState(false)
  const[like,setLike]=useState(true)
  const[unlike,setUnLike]=useState(false)
  const[flagIndicator,setFlagIndicator]=useState(false)
  const dispatch=useDispatch()


const handleEdit =()=>{
  inputRef.current.focus()
}
  const handleCopy = () => {
    const textToCopy = reply; // Replace with the text you want to copy
    
    copy(textToCopy)
      .then(() => {
        alert('Text copied to clipboard');
        // You can add additional logic or feedback to the user here
      })
      .catch((error) => {
        console.error('Error copying text to clipboard:', error);
        // Handle the error if the text couldn't be copied
      });
  };

const handlelike=()=>{
  
  dispatch(updatequestion({prompt_result_id:id,like:true}))
  setLike(false)
  setUnLike(true)
}

const handleUnlike=()=>{
  dispatch(updatequestion({prompt_result_id:id,like:false}))
  setLike(true)
  setUnLike(false)
}

  return (
    <>
    <div className='flex flex-row items-center gap-4  mx-4 mt-3'>
        <button onClick={()=>setShowaModal(true)} > <Tooltip title="Not Accurate" className= {flagIndicator? "text-red-500":""}><FlagIcon className='h-5'/></Tooltip></button>



        <button onClick={()=>setShowModal(true)}> <Tooltip title="View Sources"><DataArrayIcon className="hover:text-blue-600 h-5"/></Tooltip></button>
        <button onClick={handleCopy}> <Tooltip title="Copy to Clipboard"><ContentPasteIcon className="hover:text-blue-600 h-[18px]"/></Tooltip></button>
        <button onClick={handleEdit}> <Tooltip title="Edit Query"><EditCalendarIcon className="hover:text-blue-600 h-[18px]"/></Tooltip></button>
         {like ?<button><ThumbUpAltIcon onClick={handlelike} className='hover:text-blue-600'/></button> : <button><Tooltip title="unlike the solution"><ThumbDownIcon onClick={handleUnlike} className='hover:text-red-600 '/></Tooltip></button>}
    </div>
    <Modal isVisible={showModel} onClose={()=>setShowModal(false) }  link={link}  />
    <AccuracyModel isVisible={showaModel} onClose={()=>setShowaModal(false) } id={id} flagIndicator={setFlagIndicator}/>

</>
  )
}

export default FunctionalButtons;
