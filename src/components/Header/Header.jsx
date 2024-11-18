import { useState } from 'react';
import Content from '../Content/Content';
import Nav from '../Nav/Nav';
import { cities, navItems} from './headerData';
import logo from '../../assets/logo.png';
import location from '../../assets/location.svg';
import notification from '../../assets/Notification-Bell.svg';
import styles from './header.module.css';

export default function Header() {

  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow((prev) => !prev);
  };

  return (
    <header className={`${styles.header} ${show ? styles.show : ''}`}>
      <div className={styles.top}>
        <Content>
          <div className={styles.topContent}>
            <a href="/" className={styles.logoLink}>
              <img className={styles.logo} src={logo} alt="Tele2 Logo" />
            </a>
            <div className={styles.location}>
              <img className={styles.locationIcon} src={location} alt="Location Icon" />
              <select id="city-select" className={styles.cityDropdown} aria-label="Select City">
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.notificationBox} aria-label="Notifications">
              <span className={styles.notificationCount} />
              <img className={styles.notification} src={notification} alt="Notification Icon" />
            </div>
            <div
              className={styles.burger}
              onClick={handleClick}
              aria-expanded={show}
              aria-label="Toggle Navigation Menu"
            >
              <span id="burger" />
            </div>
          </div>
        </Content>
      </div>
      <div className={styles.bottom}>
        <Content>
          <Nav items={navItems} show={show} />
        </Content>
      </div>
    </header>
  );
}
