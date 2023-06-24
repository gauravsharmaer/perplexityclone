"use client"
import React, { useState, useEffect } from 'react';

const ChatGPTTypingEffect = ({message,  input,title }) => {
  // const message =useSelector((state)=>state.user.prompts[0]?.answer)
console.log(message)
  const [typingMessage, setTypingMessage] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);




  useEffect(() => {
    let currentWordIndex = 0;
    const words = message.split(' ');

    const typingInterval = setInterval(() => {
      if (currentWordIndex === words.length - 1) {
        clearInterval(typingInterval);
        setIsTypingComplete(true);
        return;
      }

      setTypingMessage((prevTypingMessage) => {
        const updatedMessage = prevTypingMessage + ' ' + words[currentWordIndex];
        return updatedMessage;
      });

      currentWordIndex++;
    }, 200); // Delay between each word, adjust as needed

    return () => clearInterval(typingInterval);
  }, [message]);

  return (
    <div className='mt-3 mx-6 mb-4'>
      <p className='font-bold text-[20px] mb-2'>{input}</p>
      <p className='text-[16px]'>{typingMessage}</p>

      {/* {isTypingComplete && isTypingComplete? (
      
        <div>
      
          {message.split('.').map((point, index) => (
            <ol key={index} className='mb-2 text-[16px]'>
               
              <li>{point.trim()}</li>
            </ol>
          ))}
        </div>
      ) : (
         
        <p className='text-[16px]'>{typingMessage}</p>
      )} */}
    </div>
  );
};

export default ChatGPTTypingEffect;









// import React from 'react'

// const ChatGPTTypingEffect = ({reply}) => {
//   return (
//     <>
//     {reply.map((item,i)=>{
//       return(
//         <div key={i}>
//         <p className='font-bold' >{item.metadata.title}</p>
//                   <p className='mb-2'>{item.answer}</p>
//         </div>
//       )
//     })}
//     </>
//   )
// }

// export default ChatGPTTypingEffect