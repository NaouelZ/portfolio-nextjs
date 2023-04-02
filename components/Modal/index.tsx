import './modal.module.css'
import Slider from '../Slider';

type ModelProps = {
    isOpen: boolean,
    onClose: () => void,
    title: string;
    description: string;
    technologies: string[];
    gihubLink: string;
    previewLink: string;
    detailedImages: string[];
}

const Modal = ({ isOpen, onClose, title, description, technologies, gihubLink, previewLink, detailedImages}: ModelProps) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-70">
      <div className="bg-white w-1/2 h-70% rounded-lg shadow-lg">
        <div className="relative top-0 float-right px-2 py-0.5 m-4 text-white rounded-full bg-baby-blue shadow-lg">
          <button className="text-red hover:text-gray-800" onClick={onClose}>
            X
          </button>
        </div>
        <div className="p-8 z-100">
          <h2 className="mb-4 font-sans text-lg font-bold text-center uppercase text-baby-blue">{title}</h2>
          <p>{description}</p>
          <div className="mt-2 text-sm text-gray-dark">
                <p>Used technolgies :</p>
                <ul className="flex flex-wrap my-4">
                    { 
                      technologies?.map((techno, i) => (
                        <li key={i} className="p-1 ml-1 bg-purple bg-opacity-30 hover:bg-opacity-100 hover:text-white"> {techno} </li>
                    ))}
                </ul>
          </div>
          <Slider images={detailedImages} />
          <div className='mt-8 text-center'>
            <button className="p-2 mr-5 font-bold rounded-md text-red hover:text-gray-800 bg-purple bg-opacity-30" onClick={onClose}>
              Go on GitHub
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
