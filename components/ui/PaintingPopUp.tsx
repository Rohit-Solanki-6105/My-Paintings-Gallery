import React from 'react';
import { IoClose } from 'react-icons/io5';
// import { IoHome, IoPerson, IoArchiveSharp, IoWoman, IoPencilOutline, IoPaperPlaneOutline } from "react-icons/io5";

interface PaintingDialogProps {
  image: string | null;
  onClose: () => void;
}

const PaintingPopUp: React.FC<PaintingDialogProps> = ({ image, onClose }) => {
  if (!image) return null;

  return (
    <dialog
      id="painting_dialog"
      className="fixed top-0 left-0 flex justify-center items-center"
      open
      onClick={onClose}
    >
      <div
        className="relative max-w-[100vw] max-h-[100vh] flex justify-center items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="fixed top-0 right-0 p-2" onClick={onClose}>
          <IoClose size={40} />
        </button>
        <img
          id="painting_pop_image"
          src={image}
          alt="Painting"
          className="h-fit w-fit max-h-[100vh] max-w-[100vw]"
        />
      </div>
    </dialog>
  );
};

export default PaintingPopUp;
