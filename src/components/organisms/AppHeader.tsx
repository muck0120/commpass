import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from 'styles/components/organisms/AppHeader.module.scss';
import logo from 'images/components/AppHeader/logo.svg';
import connpass from 'images/components/AppHeader/icon-connpass.svg';
import twitter from 'images/components/AppHeader/icon-twitter.svg';
import github from 'images/components/AppHeader/icon-github.svg';

const AppHeader: FC = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        <Link to="/1">
          <img src={logo} alt="commpass" />
        </Link>
      </h1>
      <ul className={styles.icons}>
        <li className={styles.icon}>
          <a
            href="https://connpass.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={connpass} alt="connpass" />
          </a>
        </li>
        <li className={styles.icon}>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitter} alt="Twitter" />
          </a>
        </li>
        <li className={styles.icon}>
          <a
            href="https://github.com/MutsukiSawada/commpass"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="GitHub" />
          </a>
        </li>
      </ul>
    </header>
  );
};

export default AppHeader;
