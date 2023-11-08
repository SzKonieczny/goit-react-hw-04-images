import PropTypes from 'prop-types';

import css from './imageGallery.module.css';
import { ImageGalleryItem } from '..//imageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ photos, onImageClick }) => {
  return (
    <ul className={css.imageGallery}>
      {photos.map(({ id, webformatURL, largeImageURL }) => {
        return (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            onImageClick={onImageClick}
          />
        );
      })}
    </ul>
  );
};

ImageGallery.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.object),
  onImageClick: PropTypes.func,
};
