import PropTypes from 'prop-types';

import css from './modal.module.css';
import { useEffect } from 'react';

export const Modal = ({
  onImageClick,
  largeImgUrl,
  setIsModalOpen,
  nodeRef,
}) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        onImageClick('');
        setIsModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onImageClick, setIsModalOpen]);

  const handleBackdrop = event => {
    if (event.target === event.currentTarget) {
      onImageClick('');
      setIsModalOpen(false);
    }
  };

  return (
    <div className={css.overlay} onClick={handleBackdrop}>
      <div className={css.modal}>
        <img src={largeImgUrl} alt="" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  onImageClick: PropTypes.func,
};
