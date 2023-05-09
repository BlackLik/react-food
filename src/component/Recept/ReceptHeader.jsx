import PropTypes from 'prop-types';
import styles from './ReceptHeader.module.css';

function ReceptHeader(props) {
  const { name, drinkAlternate, category, tags, dateModified } = props;
  return (
    <header className={styles.header}>
      <h1>{name}</h1>
      <h2>{category}</h2>
      <div className={styles.metadata}>
        {dateModified && (
          <h3>
            <time dateTime={dateModified} title='Modified date'>
              {dateModified}
            </time>
          </h3>
        )}
        <h3>
          <label htmlFor='drinkAlternate'>Drink alternate</label>
          <input
            type='checkbox'
            name='drinkAlternate'
            id='drinkAlternate'
            checked={drinkAlternate !== null ? drinkAlternate : false}
            disabled
          />
        </h3>
        <h3>
          <ul className='tags'>
            {tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </h3>
      </div>
    </header>
  );
}

ReceptHeader.propTypes = {
  name: PropTypes.string.isRequired,
  drinkAlternate: PropTypes.bool,
  category: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  dateModified: PropTypes.element,
};

export default ReceptHeader;
