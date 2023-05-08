import styles from './footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <span>© {new Date().getFullYear()} Copyright Text</span>
    </footer>
  );
}

export default Footer;
