import PropTypes from 'prop-types';

import css from './FeedbackOptions.module.css';
export const FeedbackOptions = ({ onLeaveFeedback, options }) => (
  <ul className={css.FeedbackOptions}>
    {options.map(option => (
      <li key={option}>
        <button type="button" data-value={option} onClick={onLeaveFeedback}>
          {option[0].toUpperCase() + option.slice(1)}
        </button>
      </li>
    ))}
  </ul>
);

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
