import PropTypes from 'prop-types';
import styles from './Card.module.css';
import { Link } from 'react-router-dom';

function Card(props) {
  let { id, name, image, description, link } = props;

  description = description.substring(0, 200) + ' ...';

  return (
    <article key={id} className={styles.card}>
      <header>
        {image && <img src={image} alt={name} />}
      </header>
      <section>
        <h2>{name}</h2>
        <p>{description}</p>
        <div className={styles.btn_group}>
          {link && (
            <Link className={styles.btn} to={link}>
              Read more
            </Link>
          )}
        </div>
      </section>
    </article>
  );
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  description: PropTypes.string.isRequired,
  link: PropTypes.string,
};

export default Card;
