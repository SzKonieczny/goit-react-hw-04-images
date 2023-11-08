import PropTypes from 'prop-types';
import css from './button.module.css';

export const Button = ({ onBtnClick }) => {
  return (
    <button className={css.loadMoreButton} onClick={onBtnClick}>
      Load more
    </button>
  );
};

Button.propTypes = {
  onBtnClick: PropTypes.func,
};
