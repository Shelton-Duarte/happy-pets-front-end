import React from 'react';
import { XCircle } from '@phosphor-icons/react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl w-full relative">
        
      <XCircle size={32}  className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose} />
         
       
        
        {children}
      </div>
    </div>
  );
};

export default Modal;
