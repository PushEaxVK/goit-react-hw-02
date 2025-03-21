import css from './Feedback.module.css';

const Feedback = ({ good, bad, neutral }) => {
  return (
    <ul className={css.feedback}>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
    </ul>
  );
};
export default Feedback;
