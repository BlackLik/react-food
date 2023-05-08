import styles from './header.module.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className={styles.header}>
        <nav>
            <Link to='/'>React food</Link>
            <menu>
                <li><Link to='/contact'>Contact</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><a href="https://github.com/BlackLik/react-food" target='_blank' rel="noopener noreferrer">Repo</a></li>
            </menu>
        </nav>
    </header>
  )
}

export default Header