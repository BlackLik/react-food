import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import styles from './ReceptFooter.module.css';

function ReceptFooter(props) {
  const { source, imageSource, creativeCommonsConfirmed } = props;
  const navigate = useNavigate();
  return (
    <footer>
      <section className={styles.source_group}>
        {source && (
          <a href={source} target='_blank' rel='noopener noreferrer'>
            Source
          </a>
        )}
        {imageSource && (
          <a href={imageSource} target='_blank' rel='noopener noreferrer'>
            Image Source
          </a>
        )}
        {creativeCommonsConfirmed && (
          <a
            href={creativeCommonsConfirmed}
            target='_blank'
            rel='noopener noreferrer'
          >
            Creative Commons Confirmed
          </a>
        )}
      </section>
      <div className={styles.btn_group}>
        <button onClick={() => navigate(-1)}>Go back</button>
      </div>
    </footer>
  );
}

ReceptFooter.propTypes = {
  source: PropTypes.string,
  imageSource: PropTypes.string,
  creativeCommonsConfirmed: PropTypes.array,
};

export default ReceptFooter;
