import styles from './nav.module.css';

export default function Nav({ items, show }) {
  return (
    <nav className={`${styles.nav} ${show ? styles.show : ''}`}>
      <ul className={styles.navList}>
        {items.map((item) => (
          <li key={item}>
            <a href="#" className={styles.link}>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
