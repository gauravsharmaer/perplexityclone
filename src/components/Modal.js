import Link from 'next/link';
import React from 'react';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
const Modal = (props) => {
  const { isVisible, onClose, link } = props;

  if (!isVisible) {
    return null;
  }

  const handleClose = (e) => {
    if (e.target.id === 'wrapper') {
      onClose();
    }
  };

  return (
    <>
      <div
        className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-50'
        id='wrapper'
        onClick={handleClose}
      >
        <div className='w-[600px] flex flex-col bg-white rounded-md'>
          <button
            className='text-white mt-2 mr-4  px-2 place-self-end bg-gray-300   rounded-full'
            onClick={() => onClose()}
          >
            x
          </button>
          <div className='bg-white font-bold text-[24px] shadow-xl py-4 ml-2'>Sources</div>
          {/* {link.map((item, i) => {
            return (
              <div key={i}>
                <div className='bg-white p-2 rounded mb-2 py-4'>
                  <Link href={item?.link}>{item?.title}</Link>
                </div>
                <div className='ml-6 font-bold'>{item.description}</div>
              </div>
            );
          })} */}

          <div className='bg-white p-2 rounded mb-2 py-4'>
            <PictureAsPdfIcon className='mx-1'
            />
                  <Link href={link}>PdfUrl</Link>
                </div>
                  

          <div className='flex justify-end gap-4'>
            <button>Cancel</button>
            <button className='bg-blue-600 p-3 m-2 rounded-md text-white font-bold'>Submit</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
