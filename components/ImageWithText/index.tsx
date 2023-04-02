import React, { useState } from 'react';
import Modal from '../Modal';
import { Project } from '@/helpers/dataFetcher';


const ImageWithText = ({ project }: { project: Project }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
      setModalIsOpen(true);
    };
  
    const closeModal = () => {
      setModalIsOpen(false);
    };

    return (
      <>
        <div className={`relative p-1 rounded-lg bg-${project?.color} bg-opacity-30 z-0`}>
            <img src={project?.coverImage} alt={project?.title} className="w-full h-auto rounded-lg" />
            <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full transition-opacity duration-300 opacity-0 hover:opacity-100">
                <div className="p-4 text-sm text-center hover:bg-black hover:bg-opacity-25">
                    <p className="text-sm font-bold text-white">{project?.shortDescription}</p>
                    <button onClick={openModal} className={`p-1 mt-3 text-white text-sm font-semibold rounded-lg bg-${project?.color}`}>LEARN MORE</button>
                </div>
            </div>
        </div>
        <Modal isOpen={modalIsOpen} onClose={closeModal} title={project.title} description={project.description} technologies={project.technologies} gihubLink={project.gihubLink} previewLink={project.previewLink} detailedImages={project.detailedImages} />
      </>
    );
  };
  
  export default ImageWithText;
