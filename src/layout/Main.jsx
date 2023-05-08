import PropTypes from 'prop-types';
import { SEO } from '../component';
import { useSelector } from 'react-redux';
import styles from './main.module.css';

function Main(props) {
  const seo = useSelector((state) => state.seo.data);
  return (
    <main className={styles.main}>
      <SEO {...seo} />
      {props.children}
    </main>
  );
}

Main.propTypes = {
  children: PropTypes.node,
};

export default Main;
