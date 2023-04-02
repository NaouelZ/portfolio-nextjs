import { useState } from 'react';

const Slider = ({images} : string[]) => {
  const [currentImage, setCurrentImage] = useState(0);

  const handlePrevClick = () => {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
  };

  const handleNextClick = () => {
    setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
  };

  return (
    <div className="relative min-h-[20rem] w-auto">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Image ${index}`}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
            currentImage === index ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      <div className="absolute z-10 w-full transform -translate-y-1/2 top-1/2 left-2">
        <button
          onClick={handlePrevClick}
          className="px-4 py-2 mr-4 text-xl bg-gray-800 rounded-full text-purple focus:outline-none"
        >
            <i className="fa-solid fa-circle-arrow-left"></i>
        </button>
        <button
          onClick={handleNextClick}
          className="float-right px-4 py-2 mr-4 text-xl rounded-full text-purple bg-dark-blue right-2 focus:outline-none"
        >
          <i className="fa-solid fa-circle-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Slider;